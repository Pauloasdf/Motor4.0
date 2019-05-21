import React,{Fragment} from 'react';
//import ReactDOM from 'react-dom';

class Contas extends React.Component{
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

            function erroDeRpm(){
                if(this.state.graficos.rpmAtual <= 50 && this.state.graficos.rpmAtual <120){
                    return alert("Critico");
                }
                else if (this.state.graficos.rpmAtual >= 120 && this.state.graficos.rpmAtual < 180){
                    return alert("Cuidado!")
                }
                else if (this.state.graficos.rpmAtual >= 180 && this.state.graficos.rpmAtual <= 200){
                    return alert("Estável.")
                }
            };
      }
    render(){  

    //const rpmIdeal = 200;
    const vazaoIdeal = 120;
    var vazaoAtual = 0;
    //const rpmPorHoraIdeal= 12000;
    // const rpmMin= 140;
    // const consEnergiaPorHora= 100;
      
    //const erroDeInicializacao = 0;
 
    function calculaVazaoAtual(){
        var vazaoAtual = 10/(1000/this.state.graficos.rpmAtual);
        if(vazaoAtual<84){
            return alert("Produção em nível crítico com RPM atual!!")
        }
    };
    

    // function calculaVazaoDiaria(){
    //     return vazaoAtual*24;
    // };

    // function calculaConsumoDiario(){
    //     return consEnergiaPorHora*24;
    // };
     
    return (
        <div className="contas"> 
            <h5>Vazão Atual = {vazaoAtual}</h5>
        </div>
        );
}    
    }


export default Contas;