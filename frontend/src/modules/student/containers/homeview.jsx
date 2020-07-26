import React from 'react'
import './css/homeview.css'

const homeview = (props) => {
    return (
        <form className="homeview__student" >  
            <section className="student__header">
                <h2>Perfil</h2>
            </section>
            <section className="student_body">
                <div className="student__datos">
                    Datos Personal
                </div>

                <section className="form-group student__form">
                    <div className="form-column" >
                        <label htmlFor="" className="label__student" >Nombre</label>
                        <input type="text"
                            name='name'
                            placeholder='Nombre'
                            className='input student_input'
                            // onChange={handleUpdate}
                        />
                        <label htmlFor="" className="label__student" >Apellido</label>
                        <input type="text"
                            name='surname'
                            placeholder="Apellido"
                            className='input student_input'
                            // onChange={handleUpdate}
                        />
                    </div>
                    <div className="form-column" >
                        <label htmlFor="" className="label__student" >Email</label>
                        <input type="email"
                            name='email'
                            placeholder='correo electronico'
                            className='input student_input'
                            // onChange={handleUpdate}
                        />
                        <label htmlFor="" className="label__student" >Celular</label>
                        <input type="number"
                            name='phone'
                            placeholder="Celular"
                            className='input student_input'
                            // onChange={handleUpdate}
                        />
                    </div>                    
                </section> 

            </section>
            <section className="student_body">
                <div className="student__datos">
                    Formación Academica
                </div>
                <section className="form-group student__form">
                    <div className="form-column" >
                        <label htmlFor="" className="label__student" >Universidad</label>
                        <input type="text"
                            name='name'
                            placeholder='Nombre'
                            className='input student_input'
                            // onChange={handleUpdate}
                        />
                        <label htmlFor="" className="label__student" >Semestre</label>
                        <input type="text"
                            name='surname'
                            placeholder="Apellido"
                            className='input student_input'
                            // onChange={handleUpdate}
                        />
                    </div>
                    <div className="form-column" >
                        <label htmlFor="" className="label__student" >Carrera Profesional</label>
                        <input type="email"
                            name='email'
                            placeholder='correo electronico'
                            className='input student_input'
                            // onChange={handleUpdate}
                        />
                        <label htmlFor="" className="label__student" >Año</label>
                        <input type="text"
                            name='year'
                            placeholder="PRIMERO"
                            className='input student_input'
                            // onChange={handleUpdate}
                        />
                    </div>                    
                </section> 
            </section>
        </form>
    )
}

export default homeview
