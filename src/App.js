import './App.css';
import React from 'react';
import Header from './Header';
import Case from './Case';
import Result from './Result';
import Form from './Form';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Case />
      <Result />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
