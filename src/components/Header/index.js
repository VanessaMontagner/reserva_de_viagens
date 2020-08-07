import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import logo from '../../assets/aviao.png';
import "./style.css";
import reserve from '../../store/modules/reserve/reducer';

export default function Header() {
    const reserveSize = useSelector(state => state.reserve.length);

 return (
   <header className="container">
       <Link to="/">
       <img className="logo" src={logo} alt="Logo Projeto" />
       </Link>

        <Link className="reserva" to="/reservas">
            <div>
                <strong>Minhas Reservas</strong>
                <span>{reserveSize} Reservas</span>
            </div>
        </Link>

   </header>
 );
}