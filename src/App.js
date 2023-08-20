import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Case from './Case';
import Result from './Result';
import Form from './Form';
import Footer from './Footer';
import PopupMenu from './PopupMenu';

function App() {

  const [openPopupMenu, setOpenPopupMenu] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const toggleMenu = () => {
    setOpenPopupMenu(!openPopupMenu);
  };

  const onClose = () => {
    setOpenPopupMenu(false);
  }

  const handleOverlayClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };


  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (openPopupMenu) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [openPopupMenu, onClose]);

  // решение задач

  console.log("A");

  setTimeout(function () {
    console.log("B");
    Promise.resolve().then(function () {
      console.log("C");
      Promise.resolve().then(function () {
        console.log("D");
      });
    });
  });

  Promise.resolve().then(function () {
    console.log("E");
    setTimeout(function () {
      console.log("F");
    }, 0);
    Promise.resolve().then(function () {
      console.log("G");
    });
  });

  console.log("H");





  //решение задач
  return (
    <div className="App">
      <Header
        toggleMenu={toggleMenu}
      />
      <Case />
      <Result />
      <Form
        setSubmitMessage={setSubmitMessage}
        submitMessage={submitMessage}
      />
      <PopupMenu
        openPopupMenu={openPopupMenu}
        toggleMenu={toggleMenu}
        handleOverlayClick={handleOverlayClick}
      />
      <Footer />
    </div>
  );
}

export default App;
