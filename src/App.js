import React, {useState} from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Item from './components/Item';
import Modal from './components/Modal';

function App() {
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () =>
  {
    setShowModal(true)
  }

  return (
    <div class="page-wrap">
      <Header buttonClick={toggleModal}/>
      <Modal open={showModal}/>
      <main class="main">
        <div class="wrap">
          <Item/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
