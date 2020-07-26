import React from 'react';
import './css/homeview.css';

const homeview = (props) => {

    const handleHistory = () => {
        props.history.push('/teacher/add')
    }
    
    return (
        <main className="silabus__container" >
            <section className="silabus__top">
                <h2>Silabus</h2>
                <button onClick={handleHistory} >Agregar Silabus</button>
            </section>
            <table className="table" >
                <thead>
                    <tr>
                        <th>
                            <td>Titulo</td>
                        </th>
                        <th>
                            <td>Año academico</td>
                        </th>
                        <th>
                            <td>Semestre</td>
                        </th>
                        <th>
                            <td>Archivos</td>
                        </th>
                        <th>
                            <td>Acciones</td>
                        </th>
                    </tr> 
                </thead>
                <tbody>
                    <tr>
                        <td>Titulo1</td>
                        <td>PRIMERO</td>
                        <td>SECOND</td>
                        <td>silabus.pdf</td>
                        <td>actions</td>
                    </tr>
                </tbody>
            </table>
        </main>
    )
}

export default homeview
