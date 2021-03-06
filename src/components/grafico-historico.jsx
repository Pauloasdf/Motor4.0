import React from 'react';
import Plot from 'react-plotly.js';
import { Container, Row, Col } from 'reactstrap';

class GraficoHistorico extends React.Component {
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
            y: [0,210,125,121,127,123,132,142,141,132,128,129,133,136,142],
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

export default GraficoHistorico;