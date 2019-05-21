import React,{Fragment} from 'react';
//import ReactDOM from 'react-dom';


class NavMenu extends React.Component{
    
    
    
    render(){       
        let lista = this.props.menu.map(function(value){
            return(<li key={value.titulo}><a href={value.link}>{value.titulo}</a></li>);
        });
        return (
            <ul id="nav-mobile" className="right">
            {lista}
            </ul>
        )
    }
}

export default NavMenu;