import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'



const Formulario = ({getData}) => {

    const { register, reset, handleSubmit } = useForm()

    const resetInfo = {
        name: '',
        duration: '',
        genre: '',
        release_date: ''
    }

    const sendInfo = data => {
        const url = 'https://movies-crud-academlo.herokuapp.com/movies/'
        axios.post(url, data)
        .then(res => {
            getData()
        })
        .catch(err => console.log(err))
        reset(resetInfo)
    }

    const submit = data => {
        sendInfo(data)
    }
    return (
        <div>
            <form className='formulario' onSubmit={handleSubmit(submit)}>
                <label htmlFor="name">Nombre:</label>
                <input {...register('name')} type="text" id='name' />
                <br />
                <label htmlFor="duration">Duracion:</label>
                <input {...register('duration')} type="text" id='duration' />
                <br />
                <label htmlFor="genre">Genero:</label>
                <input {...register('genre')} type="text" id='genre' />
                <br />
                <label htmlFor="date">Lanzamiento:</label>
                <input {...register('release_date')} type="date" id='date' />
                <br />
                <button className='btn_send'>Enviar</button>
            </form>
        </div>

    )
}

export default Formulario