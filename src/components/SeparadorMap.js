import React from 'react'
import PropTypes from 'prop-types'
import "./Mapa.css";
const SeparadorMap = props => {
    return (
        <div className={`separador naranja`}>
            <p>{props.titulo && props.titulo.toUpperCase() }</p>
        </div>
    )
}

SeparadorMap.propTypes = {
    titulo:PropTypes.string,
    indi:PropTypes.number,

};



export default SeparadorMap

