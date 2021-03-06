import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Plotly from 'plotly.js-dist';
import GraficoEnergia from './components/grafico';
import GraficoProducao from './components/graficoProducao';
import GraficoRPM from './components/graficoRPM';
import { Container, Row, Col } from 'reactstrap';
import Pagina from './pagina-graficos';
import Navbar from './components/navbar';
import NavMenu from './components/navbar';
import Contas from './components/contas'

function App() {
  return (

    <div>
      <Navbar cor={"blue"} titulo={"Motor 4.0"}></Navbar>
      <div className="Row">
      {/* Lateral Esquerda */}
      </div>
      <div className="App col-sm-12">
      <div className="col-sm-12">
          <Container fluid>
          <br></br>
            <Row>
              <Col className="coluna">
              <div className="cimaGraficos"><h5>ENERGIA</h5></div>
                <GraficoEnergia></GraficoEnergia> 
              </Col>
            </Row>
            <Row>
              <Col className="coluna">
              <div className="cimaGraficos"><h5>RPM's</h5></div>
                  <GraficoRPM></GraficoRPM>
              </Col>
              </Row>
            <Row>
              <Col className="coluna">
              <div className="cimaGraficos"><h5>PRODUÇÃO</h5></div>
                  <GraficoProducao></GraficoProducao>  
              </Col>
            </Row>
          </Container>
          
        </div>
        
      </div>
    {/* Lateral Direita */}
      <Contas></Contas>
    </div>
  );
}

export default App;
