import React, {useState, useEffect} from 'react';
import './App.css';
import Archive from './components/Archive';
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
      if (items[i].date !== getTime() && items[i].isComplete)
      {
        var id = items[i].id
        var url = `https://localhost:7242/api/todoitems/${id}`
        fetch(url, {method: 'DELETE',})
      }
    }
  })

  let completed = [];
  let notCompleted = [];
  items.forEach((el) => {
    if (el.isComplete === true)
    {
      completed.push(el)
    }
    else
    {
      notCompleted.push(el)
    }
  })

  return (
    <div className="page-wrap">
      <Header buttonClick={toggleModal}/>
      <Modal open={showModal}/>
      <main className="main">
        <div className="wrap">
          <ul>
            {notCompleted.map(el => <li key={el.id}><Item data={el}/></li>)}
          </ul>
          <Archive list={completed}/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
