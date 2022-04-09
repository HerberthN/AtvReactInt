import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import './style.css';
//import { StyleSheet, Text, View, Button } from 'react-native'

const App = () => {
  const back1 = () => ({margin: 'auto', width: 1000, height: 500, backgroundColor: '#D8D8D8', padding: 12, 
  borderRadius: 8, textAlign: "center"})
  const textoDoRotulo = "PROFISSIONAIS DE SAÚDE";
  const styleObj = {
    backgroundColor: '#D8D8D8',
    paddingTop: "10px",
    margin: 'auto', 
    width: 800, 
    height: 400,
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#A8A8A8',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
}
  const nome1 = "jose da silva"
  const nome2 = "maria da silva"
  const nome3 = "jaqueline mendes"
  return(
      <div style={back1()}>
          {<label className="rotulo" htmlFor="nome">{textoDoRotulo}</label>}
          <div style={styleObj}>
            <div className='img1'>
            <img src={require('./images/R.jpg')} alt="R"/>
            {<label className="nome1" htmlFor="nome:">{nome1}</label>}
            </div>
            <div className='img2'>
            <img src={process.env.PUBLIC_URL + "/R (2).jpg"} alt="R2"/>
            {<label className="nome2" htmlFor="nome:">{nome2}</label>}
            </div>
            <div className='img3'>
            <img src="https://i.ibb.co/MstRFDx/R-1.jpg" alt="R3" />
            {<label className="nome3" htmlFor="nome:">{nome3}</label>}
            </div>
          </div>
      </div>
  ) 
}
// const box = {
//   border: 5px solid #A8A8A8;
//   border-radius: 14px;
//   backgroundColor: '#888888'
//   };

// renderBox() {
//   	return (
//     	<div style={box}> <p style={text}>
//       		This is just a box, no need to worry.
//         </p> </div>
//   	);
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#d3d3d3',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })
export default App;
