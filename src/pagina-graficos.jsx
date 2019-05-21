import React from 'react';
import Plot from 'react-plotly.js';
import { Container, Row, Col } from 'reactstrap';
import GraficoEnergia from './components/grafico'

class Pagina extends React.Component {
  render() {
    return (
       <GraficoEnergia props={this.state.graficos}></GraficoEnergia>
    );
  }
}

export default Pagina;

