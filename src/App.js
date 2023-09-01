import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Case from './Case';
import Result from './Result';
import Form from './Form';
import Footer from './Footer';
import PopupMenu from './PopupMenu';
import axios from 'axios';

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

  const handleSubmit = async (formData) => {
    try {
      await axios.post('https://api.diplomak.nomoreparties.sbs/send-email', formData);
      console.log("Данные успешно отправлены")
    } catch (error) {
      console.log("Ошибка при отправке данных")
    }
  };

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
        handleSubmit={handleSubmit}
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
