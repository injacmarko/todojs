import React, {useState, useEffect} from 'react';
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

  const [items, setItems] = useState([])
  useEffect(() => {
    fetch('https://localhost:7242/api/todoitems')
    .then(response => response.json())
    .then(data => setItems(data))
  })

  function getTime()
    {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        today = dd + '/' + mm + '/' + yyyy;
        return today.toString();
    }

  useEffect(() => {
    for (let i = 0; i < items.length; i++)
    {
      if (items[i].date !== getTime() && items[i].isChecked)
      {
        var id = items[i].id
        var url = `https://localhost:7242/api/todoitems/${id}`
        fetch(url, {method: 'DELETE'})
      }
    }
  })

  return (
    <div className="page-wrap">
      <Header buttonClick={toggleModal}/>
      <Modal open={showModal}/>
      <main className="main">
        <div className="wrap">
          <ul>
            {items.map(el => <li key={el.id}><Item data={el}/></li>)}
          </ul>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
