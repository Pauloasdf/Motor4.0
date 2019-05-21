import React from 'react';
import Plot from 'react-plotly.js';
import { Container, Row, Col } from 'reactstrap';

class GraficoProducao extends React.Component {
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
    const grafico = this.state.graficos.map(function(value,k){ 
        const falta = value.producaoIdeal - value.producaoAtual;
        const atual = value.producaoAtual;
        const numeroMaquina = value.id;
        return (
            <Plot
            data={[
            {type: "pie", 
            values: [falta, atual], 
            marker: {
            colors: ['#E4000F', '#0000FF']
            },
            labels: ['Perda', 'Utilizado']}
            ]}
            layout={ {width: 300, height: 300, title:"Máquina " + numeroMaquina } }
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

export default GraficoProducao;