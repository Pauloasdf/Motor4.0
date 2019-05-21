import React,{Fragment} from 'react';
import Plotly from 'plotly.js-dist';
import GraficoEnergia from './components/grafico';
import GraficoProducao from './components/graficoProducao';
import GraficoRPM from './components/graficoRPM';
import { Container, Row, Col } from 'reactstrap';
import Pagina from './pagina-graficos';
import Navbar from './components/navbar';
import NavMenu from './components/navbar';
import Contas from './components/contas'
import GraficoHistorico from './components/grafico-historico';
import GraficoHistorico3 from './components/grafico-historico3';
import GraficoHistorico4 from './components/grafico-historico4';
//import ReactDOM from 'react-dom';

class Historico extends React.Component{
    constructor(props){
        super(props);
        this.state = {graficos:[]};
    }
      componentDidMount(){
        fetch('http://localhost:2000/graficos')
          .then(cartao => cartao.json())
          .then(data => {
              this.setState({ graficos:data })
              console.log(this.state);
            });
        }
    render(){  

    const vazaoIdeal = 120;
    var vazaoAtual = 0;
    // const rpmMin= 140;
    // const consEnergiaPorHora= 100;
       
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
                <GraficoHistorico></GraficoHistorico>    
                <h6>Próxima estimativa de Manutenção: 12 meses</h6>   
              </Col>
            </Row>
            <Row>
              <Col className="coluna">
              <div className="cimaGraficos"><h5>RPM's</h5></div>
                  <GraficoHistorico3></GraficoHistorico3>
                  <h6>Próxima estimativa de Manutenção: 11,5 meses</h6>   
              </Col>
              </Row>
            <Row>
              <Col className="coluna">
              <div className="cimaGraficos"><h5>PRODUÇÃO</h5></div>
                  <GraficoHistorico4></GraficoHistorico4> 
              </Col>
            </Row>
          </Container>
          
        </div>
        
      </div>
    {/* Lateral Direita */}
      <Contas></Contas>
    </div>)
}    
    }


export default Historico;