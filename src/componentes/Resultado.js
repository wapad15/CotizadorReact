import React,{Component} from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default class Resultado extends Component {
  render() {
    const resultado = this.props.resultado;
    const mensaje = (!resultado) ? 'Elije Marca, Año y tipo de seguro' : 'El total es: $'
    return (
      <div className="gran-total">
        {mensaje}
        <TransitionGroup component="span" className="resultado">
          <CSSTransition
            className="resultado"
            key={resultado}
            timeout={{ enter: 500, exit: 500 }}>
            <span>{resultado}</span>
          </CSSTransition>
        </TransitionGroup>

      </div>
     )
  }
}