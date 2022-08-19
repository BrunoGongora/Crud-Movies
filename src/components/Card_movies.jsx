import React from 'react'
import axios from 'axios'

const Card_movies = ({datas, getData}) => {
    
    const deleteInfo = () => {
        const  url = `https://movies-crud-academlo.herokuapp.com/movies/${datas.id}/`
        axios.delete(url)
        .then(res => {
            getData()
        })
        .catch(err => console.log(err))
    }



    return (
        <div className='class__body'>
            <div className='card'>
                <h3>Nombre: {datas.name}</h3>
                <p>Duracion: {datas.duration}</p>
                <p>Genero: {datas.genre}</p>
                <p>Año de lanzamiento: {datas['release_date']}</p>
            </div>
            <div className='botons'>
                <button className='btn delete' onClick={deleteInfo}>Delete</button>
                <button className='btn edit'>Edit</button>
            </div>
        </div>

    )
}

export default Card_movies