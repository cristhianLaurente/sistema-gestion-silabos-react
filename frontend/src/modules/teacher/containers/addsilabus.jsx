import React, { useState, useEffect, Component } from 'react'
import { Link } from 'react-router-dom'
import File from '../../../components/inputs/file';
import './css/addsilabus.css'


const AddSilabus = (props) => {

    const [disabled, setDisabled] = useState(false)
    const [data, setData] = useState({title:'', year:'', semestre:'', pdf:{},valid:true, inputs: false})

    const handleSelect = () => {
        setDisabled(!disabled)
    }

    const getFile = (file) => {
        setData({...data, pdf: file, valid: false, inputs: true})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('object submit')
    }

    let classList  = ''
    if(data.valid) {
        classList = ['btn-submit disabled']
    }else {
        classList = 'btn-submit'
    }

    return (
        <main className="silabus__container">
            <section className="silabus__top">
                <article>
                    <Link  to="/teacher" >regresar</Link>
                    <h2>Agregar Silabus</h2> 
                </article>               
            </section>
            
            <form className="form__container" 
                onSubmit={handleSubmit}>
                <section className="form-group add">
                    <input type="text"
                        name='text'
                        placeholder='Titulo'
                        className='input' disabled={data.inputs}
                        // onChange={handleUpdate}
                    />
                    <select className="input select" disabled={data.inputs}  onClick={handleSelect} >
                        <option value="0" disabled={disabled} >Seleccionar año</option>
                        <option value="1">PRIMER AÑO</option>
                        <option value="2">SECUNDO AÑO</option>
                        <option value="3">TERCER AÑO</option>
                        <option value="4">CUARTO AÑO</option>
                        <option value="5">QUINTO AÑO</option>
                    </select>
                    <select className="input select" disabled={data.inputs}  onClick={handleSelect} >
                        <option value="0" disabled={disabled} >Seleccionar semestre</option>
                        <option value="1">PRIMER SEMESTRE</option>
                        <option value="2">SECUNDO SEMESTRE</option>
                    </select>
                    <File file={getFile} />
                    <button type='submit' disabled={data.valid} className={classList} >Agregar Silabus</button>
                </section>
            </form>
                    
            
        </main>
    )
}

export default AddSilabus
