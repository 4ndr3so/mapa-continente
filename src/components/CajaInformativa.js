import React from 'react'
import PropTypes from 'prop-types';

import "./Mapa.css";

const CajaInformativa = props => {
    return (
        <div className={"cajaInfo"}>
            
            <div className="infoCajaInfo">
            <p className="mesaF">{props.institucion}</p>
             {props.pais && <p className="nombreR"><b>País:</b> {props.pais}</p>}
             {props.vigencia && <p className="nombreR"><b>Vigencia:</b> {props.vigencia}</p>}
             {props.objeto && <p className="nombreR"><b>Objetivo:</b> {props.objeto}</p>}       
            
            </div>
        </div>
    )
}

CajaInformativa.propTypes = {
    municipio:PropTypes.string,
    correo:PropTypes.string,
    centroFor:PropTypes.string,
    isTop:PropTypes.bool,
    titulo:PropTypes.string,
    indiceM:PropTypes.number,
    direccion:PropTypes.string,
    nombreR:PropTypes.string,
};

export default CajaInformativa