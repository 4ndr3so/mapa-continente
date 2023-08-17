import logo from './logo.svg';
import './App.css';
import imglogoUbica from "./assets/img/ubica_logo_naranja.png"
import {Mapa} from './components/Mapa';
import global from "./assets/img/global.png"
import { useDispatch, useSelector } from "react-redux";
import {  selecData } from './redux/actions'; 
import $ from "jquery";

function App() {
  const data = useSelector(state => state.datosMapa.datos);
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    $('#modalMapa').modal()
    $('.modal-backdrop').appendTo('.App');
    dispatch(selecData(data,"GL"))
  }

  return (
    <div className="App">
      <div className="texto1">
      <img src={imglogoUbica} alt="Logo ubicación" />
        <p>ALIADOS Y/O COOPERANTES</p>
        <p className="texto1int">INTERNACIONALES</p> 
        </div>
      <div className="texto2" onClick={handleClick}>
      <img className="globalImg" src={global} alt="Global" />
        <p className="global">GLOBAL</p>
      </div>
    <Mapa></Mapa>
    </div>
  );
}

export default App;
