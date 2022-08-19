import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import Card_movies from './components/Card_movies'
import Formulario from './components/Formulario'

function App() {
  const [data, setData] = useState()

  const getData = data => {
    const url = 'https://movies-crud-academlo.herokuapp.com/movies/'
    axios.get(url)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getData(data)
  }, [])

    console.log(data)


  return (
    <div className="App">
      
      <div>
      <h1>Crud Movies</h1>
        <Formulario 
        getData={getData}
        />
      </div>
      <hr />
      <div className='card_movie'>
         {
          data?.map(datas => (
            <Card_movies
              key={datas.id}
              datas={datas}
              getData={getData}
            />
          ))
        }
      </div>

    </div>
  )
}

export default App
