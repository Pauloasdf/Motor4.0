import React from 'react';
import Plot from 'react-plotly.js';
import { Container, Row, Col } from 'reactstrap';
import { Alert } from 'reactstrap';

class GraficoEnergia extends React.Component {
    constructor(props){
        super(props);
        this.state = {graficos:[], isLigado:false, isLigado2:false};
    }
      componentDidMount() {
        fetch('http://localhost:2000/graficos')
          .then(cartao => cartao.json())
          .then(data => {
              this.setState({ graficos:data })
              console.log(this.state);
            });
      }
render(){
    const grafico = this.state.graficos.map(function(value,i){ 
        const falta = value.energiaIdeal - value.energiaAtual;
        const atual = value.energiaAtual;
        const rpmAtual = value.rpmAtual;
        const numeroMaquina = value.id;
        var isLigado=false;
        var cor = "green";

        
        
        if (atual>150 && value.rpmAtual < 140){
          cor = "red";
          alert("O gasto de energia está muito alto e as rotações por minuto estão muito baixas. Status: Urgente!");
        }else
         if(atual>130 && atual<150){
          cor = "yellow";
          alert("O gasto de energia está levemente alto. Status: Moderado!");
        }else if(value.rpmAtual<140 && atual<150){
          alert("O número de rotações por minutos está muito abaixo do esperado. Status: Crítico!")
        }else if(atual>150 && value.rpmAtual<140){
          alert("A rede elétrica pode estar em meia fase ou com problemas de alimentação. Cuidado!")
        }

        return (

            <Plot
            data={[
              
            { x: [1],
              y: [150],
              type: 'scatter',
              mode: 'lines+points',
              
            },
            {type: 'bar', x: [1, 2, 3], y: [atual],
            marker: {color: cor},
          },

          ]}
          layout={ {width: 320, height: 240, title:"Máquina " + numeroMaquina} }
          />

        );
    });
    return(
        <div>
            {grafico}
        </div>   
    )
  }
  
}

export default GraficoEnergia;