import React from 'react';
import Plot from 'react-plotly.js';
import { Container, Row, Col } from 'reactstrap';

class GraficoHistorico3 extends React.Component {
    constructor(props){
        super(props);
        this.state = {graficos:[]};
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
        const falta = value.rpmIdeal - value.rpmAtual;
        const atual = value.rpmAtual;
        const numeroMaquina = value.id;
        const arrayEnergia = value.arrayEnergia;
        const arrayRPM = value.arrayRPM;
        const arrayProducao = value.arrayProducao;
        return (
            <Plot
            data={[
              
            { x: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
            y: [0,50,100,200,190,180,170,160,150,140,130,120,110,100,90],
              type: 'lines',
              mode: 'lines+points',
              
            },
            {type: 'bar', x: [10], y: [0],
            marker: {color: "black"},
          },

          ]}
          layout={ {width: 500, height: 400, title:"Máquina " + numeroMaquina} }
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

export default GraficoHistorico3;