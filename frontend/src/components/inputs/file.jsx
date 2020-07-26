import React, { Component } from "react";
import * as firebase from 'firebase';
import Swal from 'sweetalert2';
import './css/file.css'


// configuraciones de firebase | lestgo
var firebaseConfig = {
  apiKey: "apiKey",
  authDomain: "authDomain",
  databaseURL: "databaseURL",
  projectId: "projectId",
  storageBucket: "storageBucket",
  messagingSenderId: "messagingSenderId",
  appId: "appId",
  measurementId: "measurementId"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

let storage = firebase.storage().ref();

class file extends Component {
  
  constructor(props) {
     super(props);
     this.state= {
        archivo: undefined,
        disabled: true,
        input: false,
        file: false                  
     }                 
  }
            
                    
  updateImage = (e) => {
    this.setState({
        // ...this.state,
        archivo: e.target.files[0]  ,               
        disabled: false,
        file: true,
    });   
  }


  subirImagen = () => {
    let nombreArchivo = this.state.archivo.name;
    let nombreFinal = +(new Date()) + '-' +nombreArchivo;

    let metadata = {
       contentType: this.state.archivo.type                 
    }

    if(this.state.file) {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "NOTA!, una vez guardes los cambios, no podras modificarlos",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, cargar archivo'
          }).then((result) => {
            if (result.value) {                          
                storage.child('react-firebase/' + nombreFinal)
                  .put(this.state.archivo, metadata).then((response)=>{
                       Swal.fire({
                           icon: 'success',
                           text: 'Carga exitosa',
                           timer: 2000,
                           title: 'Exito'
                       })
                        this.setState({
                            ...this.state,
                            disabled: true,
                            input: true,
                            file: false
                        })
                     return response.ref.getDownloadURL()
                  }).then(url => {
                    let objectPdf = {
                        url,
                        name: nombreFinal
                    }  
                    this.props.file(objectPdf)               
                  }) 
                  .catch(err => console.log(err,'err')) 
            }
          })
    }               
  }
  
  render() {
      let classList = '';
      if(this.state.disabled) {
        classList = ['btn-file disabled']
        }else {
            classList = 'btn-file'
        }
    return (
        <div className="file__container" >
            <input type="file"  disabled={this.state.input} onChange={this.updateImage}  />
            <button type="button" className="btn-file" onClick={this.subirImagen} disabled={this.state.disabled} >guardar cambios</button>            
        </div>
    );
  }
}

export default file;