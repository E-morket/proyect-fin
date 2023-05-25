import * as React from 'react';
import user from '../portafolio/assets/userLog.png';
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Alert, Button, Grid, TextField, Box, } from '@mui/material'

const tablaUsuarios = () => {
   
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')
    const [solicitud, setSolicitud] = useState('')
    const [comentario, setComentario] = useState('')
   
    
    const [showForm, setShowForm] = useState(true)
    const [showAlert, setShowAlert] = useState(false)
   
    const [showAlert2, setShowAlert2] = useState(false)
    const [showButtonSave, setShowButtonSave] = useState(true)
    const baseURL = 'http://localhost:3001/profinal'

    const showFormData = () => {
        setShowForm(false)
    }

    const onChangeNombre = (event) => { setNombre(event.target.value) }
    const onChangeCorreo = (event) => { setCorreo(event.target.value) }
    const onChangeTelefono= (event) => { setTelefono(event.target.value) }
    const onChangeSolicitud= (event) => { setSolicitud(event.target.value) }
    const onChangeComentario= (event) => { setComentario(event.target.value) }
   
    const save = () => {
        if (nombre === '' || correo === '' || telefono === '' || solicitud ==='' ||comentario === '') {
            setShowAlert(true)
        } else {
            if (!showForm) {
                axios.post('http://localhost:3001/adduser', {
                    nombre: nombre,
                    correo: correo,
                    telefono: telefono,
                    solicitud: solicitud,
                    comentario: comentario,
                    
                }).then((reponse) => {
                    setNombre('')
                    setCorreo('')
                    setTelefono('')
                    setSolicitud('')
                    setComentario('')
                   
                    setShowForm(true)
                    setShowAlert(false)
                   
                    setShowAlert2(true)
                    setShowButtonSave(true)
                    getData()
                })
            }
        }
    }
    
   
 
    const getData = async () => {
        try {
             await axios.get(baseURL)
            
        } catch (error) {
            console.log('Error', error)
        }
    }

   

  

    const cancel = (() => {
        setShowForm(true)
        setNombre('')
        setCorreo('')
        setTelefono('')
        setSolicitud('')
        setComentario('')
        setShowButtonSave(true)
        setShowAlert(false)
       
        setShowAlert2(false)


    })



    useEffect(() => {
        getData()
    }, [])


    return (
        <Box sx={{ flexGrow: 1 }} variant="outlined"className='modal1' >
                
               <Grid className='button-registro' item xs={8} sx={{ mt: "8%", mb:"3px"}} ml={85} mt={5}>
               
                <Button onClick={() => { showFormData() }} variant="outlined" size='large' >
                <Grid ml={2}>
                <h1>REGISTRATE</h1>
                </Grid>
                <img item  className='imgLog' src={user}  alt='user' />
                </Button>
                
            </Grid>
             
            <div className='tabla1'>
               
                        
            {
                !showForm &&
            
                <Grid container spacing={2} pl={18} >
                    <Grid item xs={12}>
                        {
                            showAlert &&
                            <Alert severity="warning">Debes de llenar todos los campos</Alert>
                        }
                    </Grid>
                    <div className='textfield'>
                    <Grid sx={{ mt: 4 }} item xs={12} >
                        <TextField
                            value={nombre}

                            onChange={onChangeNombre}
                            id="outlined-basic"

                            label="Nombre"
                            variant="outlined" />
                    </Grid>
                    <Grid sx={{ mt: 4 }} item xs={12} >
                        <TextField
                            value={correo}

                            onChange={onChangeCorreo}
                            id="outlined-basic"
                            label="correo"
                            variant="outlined" />
                    </Grid>
                    <Grid sx={{ mt: 4 }} item xs={12}>
                        <TextField
                            value={telefono}

                            onChange={onChangeTelefono}
                            id="outlined-basic"
                            label="telefono"
                            variant="outlined" />
                    </Grid>
                    <Grid sx={{ mt: 4 }} item xs={12}>
                        <TextField
                            value={solicitud}

                            onChange={onChangeSolicitud}
                            id="outlined-basic"
                            label="solicitud"
                            variant="outlined" />
                    </Grid>
                    <Grid sx={{ mt: 4 }} item xs={12}>
                        <TextField
                            value={comentario}
                            onChange={onChangeComentario}
                            id="outlined-multiline-static"
                            
                            label="Comentario"
                            multiline
                            rows={4}
                            defaultValue="" />
                    </Grid>
                   
                    </div>

                    {
                        showButtonSave ?

                            <Grid container marginLeft="17%" className='textfiled boton4' mt={-14}>
                                <Grid sx={{ mt: 4 }} item xs={3}>
                                    <Button onClick={() => { cancel() }} color="error" variant="outlined">cancelar</Button>
                                </Grid>
                                <Grid sx={{ mt: 4 }} item xs={4}>
                                    <Button onClick={() => { save() }} color="success" variant="outlined">Guardar</Button>
                                </Grid>
                                
                            </Grid>
                            :
                            <Grid container marginLeft="30%" mt={-14} >
                                <Grid sx={{ mt: 4 }} item xs={3}  >
                                    <Button onClick={() => { cancel() }} color="success" variant="outlined" fullWidth>atras</Button>
                                </Grid>

                            </Grid>
                    }
                </Grid>
            }

            {
                showForm &&
                <Grid container>
                    <Grid item xs={6} m="2%" sx={{ mt: "4%", ml:"15.5%"}} pl="6%"  >
                        {
                            showAlert2 &&
                            <Alert severity="success">usuario agregado </Alert>
                        }
                    </Grid>

                </Grid>
            }
            </div>
        </Box>
    );

}

export default tablaUsuarios