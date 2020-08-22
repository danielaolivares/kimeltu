import React from 'react';

class Profile extends React.Component {
  render () {
    return (
      <div>
        <p>Selecciona lo qe más te gusta</p>
        <label htmlFor=""><input type="checkbox"/>Mascotas</label>
        <label htmlFor=""><input type="checkbox"/>Cosmetología</label>
        <label htmlFor=""><input type="checkbox"/>Andar en bicicleta</label>
        <label htmlFor=""><input type="checkbox"/>Carretear con mis amigos</label>
        <label htmlFor=""><input type="checkbox"/>Estudiar</label>
        <label htmlFor=""><input type="checkbox"/>Dormir</label>
        <label htmlFor=""><input type="checkbox"/>Ver película</label>
        <label htmlFor=""><input type="checkbox"/>Practicar deporte</label>
        <label htmlFor=""><input type="checkbox"/>leer</label>
        <label htmlFor=""><input type="checkbox"/>jugar</label>
        <label htmlFor=""><input type="checkbox"/>Dibujar</label>
        <label htmlFor=""><input type="checkbox"/>Pintar</label>
        <label htmlFor=""><input type="checkbox"/>Escuchar música</label>
        <label htmlFor=""><input type="checkbox"/>Veganismo</label>
        <label htmlFor=""><input type="checkbox"/>Salud</label>
        <label htmlFor=""><input type="checkbox"/>Nutrición</label>
        <label htmlFor=""><input type="checkbox"/>Ecología</label>
        <label htmlFor=""><input type="checkbox"/></label>
        <label htmlFor=""><input type="checkbox"/></label>
      </div>
    )
  }
}

export default Profile;