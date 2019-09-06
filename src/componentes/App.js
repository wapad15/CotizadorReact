import React,{Component} from 'react';
import Header from './Header';
import Formulario from './Formulario';
import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from '../helper';
import Resumen from './Resumen'
import Resultado from './Resultado';


class App extends Component {
  state = {
    resultado: '',
    datos: {}
  }
 cotizarSeguro = (datos) => {
   const { marca, plan, year } = datos
   
   //agregar una base de 2000
   let resultado = 2000
   
   //obtener la diferencia de años 
   const diferencia = obtenerDiferenciaAnio(year);

   //por cada restar el 3 % al valor del seguro
   resultado -= ((diferencia*3)*resultado)/100

   //americano 15% asiatico 5% y europeo 30% de incremento
   resultado = calcularMarca(marca) * resultado

   // el plan del auto Basico:20% Completo:20%

   let incrementoplan = obtenerPlan(plan)
   
   //realizamos el incremento
   resultado += parseFloat(incrementoplan*resultado).toFixed(2)
   
   //---------finalizacion de  calcular el costo-------------
   const datosAuto = {
     marca: marca,
     plan: plan,
     year: year
   }
   this.setState({
     resultado: resultado,
     datos : datosAuto
   })
 }
  
render(){
  return (
    <div className="contenedor">
        <Header
          titulo = "Cotizador De Seguros De Autos WAPAD"
        />
        <div className="contenedor-formulario">
        <Formulario
          cotizarSeguro = {this.cotizarSeguro}
        />
        <Resumen
          datos= {this.state.datos}
          
        />
        <Resultado
          resultado = {this.state.resultado}
          />
        </div>
      </div>
  );
 }
}

export default App;
