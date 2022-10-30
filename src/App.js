import React from 'react';
import MyFisrtComponent from './components/MyFirstComponent';
import MySecondComponent from './components/MySecondComponent';

export default function App() {
  return (
    <>
      <MyFisrtComponent name="Matias" lastname="Perez" />
      <MyFisrtComponent name="Natalia" lastname="Bartolome" />
      <MyFisrtComponent name="Luis" lastname="Ruiz Diaz" />
      <MySecondComponent />
    </>
  );
}
