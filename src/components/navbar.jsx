import React from 'react';
import NavMenu from './nav-menu';
class Navbar extends React.Component{
    render(){
        let menu = [
            // {titulo:"Olá " + JSON.parse(sessionStorage.getItem('usuario')).nome},
            {titulo:"Ao Vivo", link:"http://localhost:3000/"},
            {titulo:"Histórico", link:"http://localhost:3000/historico"},
            // {titulo:"Módulos", link:"http://localhost:3000/modulos"},
            // {titulo:"Conceitos", link:"http://localhost:3000/base"},
        ];

        let corNavbar = "div-navbar nav-wrapper "+ this.props.cor; 
        return( 
        <nav>
            <div className={corNavbar}>
                <div className="container">
                    <a href="http://localhost:3000/" className="brand-logo">{this.props.titulo}</a>
                    <NavMenu menu={menu}/>
                </div>
            </div>
        </nav>
        )
    }
}

export default Navbar;