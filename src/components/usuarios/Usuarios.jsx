import * as React from 'react';
import './Usuarios.css'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Alert, Button, Grid, TextField, Box, Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Table } from '@mui/material'

const Usuarios = () => {
    const [data, setData] = useState([])
    const [id, setId] = useState([])
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')
    const [solicitud, setSolicitud] = useState('')
    const [comentario, setComentario] = useState('')
    const [idtablaFinal, setIdtablaFinal] = useState('')
    
    const [showForm, setShowForm] = useState(true)
    const [showAlert, setShowAlert] = useState(false)
    const [showAlert1, setShowAlert1] = useState(false)
    const [showAlert2, setShowAlert2] = useState(false)
    const [showAlert3, setShowAlert3] = useState(false)
    const [showButtonSave, setShowButtonSave] = useState(true)
    const baseURL = 'http://localhost:3001/profinal'

    const showFormData = () => {
        setShowForm(false)
    }

    const onChangeNombre = (event) => { setNombre(event.target.value) }
    const onChangeCorreo = (event) => { setCorreo(event.target.value) }
    const onChangeTelefono = (event) => { setTelefono(event.target.value) }
    const onChangeSolicitud = (event) => { setSolicitud(event.target.value) }
    const onChangeComentario = (event) => { setComentario(event.target.value) }
   

    const save = () => {
        if (nombre === '' || correo === '' || telefono === '' || solicitud === '' || comentario === '') {
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
                    setTimeout(setShowAlert2,5000);
                    setShowForm(true)
                    setShowAlert(false)
                    setShowAlert3(false)
                    setShowAlert2(true)
                    setShowButtonSave(true)
                    getData()
                })
            }
        }
    }



    const getData = async () => {
        try {
            const { data: response } = await axios.get(baseURL)
            setData(response)
        } catch (error) {
            console.log('Error', error)
        }
    }

    const edit = ((obj) => {
        setShowForm(false)
        setShowButtonSave(false)
        setNombre(obj.nombre)
        setCorreo(obj.correo)
        setTelefono(obj.telefono)
        setSolicitud(obj.solicitud)
        setComentario(obj.comentario)
        setIdtablaFinal(obj.idtablaFinal)

    })
    const update = (() => {
        if (nombre === '' || correo === '' || telefono === '' || solicitud === '' || comentario === '') {
            setShowAlert(true)
        } else {
            axios.put(`http://localhost:3001/update/${idtablaFinal}`, {

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
                setShowAlert3(true)
                setTimeout(setShowAlert3,5000);
                setShowForm(true)
                setShowAlert(false)
                setShowAlert1(false)
                setShowAlert2(false)
                setShowButtonSave(true)
                getData()
            })

        }
    })

    
        
        const delet=()=>{
        axios.delete(`http://localhost:3001/eliminar/${idtablaFinal}`, {

        nombre: nombre,
        correo: correo,
        telefono: telefono,
        solicitud: solicitud,
        comentario: comentario,

    }).then(()=>{
        setNombre('')
        setId('')
        setShowForm(true)
        setShowAlert(false)
        setShowAlert1(true)
        setTimeout(setShowAlert1,5000);
        setShowAlert2(false)
        setShowAlert3(false)
        setShowButtonSave(true)
        getData()

    })
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
        <Box sx={{ flexGrow: 1 }} variant="outlined" className='modal' >
            <div className='tablas'>
                {
                    !showForm &&
                    <Grid container spacing={2} pl={18}>
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
                                <Grid container marginLeft="5%" mt={-13} >
                                    <Grid sx={{ mt: 4 }} item xs={3}  >
                                        <Button onClick={() => { cancel() }} color="warning" variant="outlined" size='large'>cancelar</Button>
                                    </Grid>
                                    <Grid sx={{ mt: 4 }} item xs={3} >
                                        <Button onClick={() => { update() }} color="success" variant="outlined" size='large'>Actualizar</Button>

                                    </Grid>
                                  
                                    <Grid sx={{ mt: 4 }} item xs={3}  >
                                        <Button onClick={() => { delet() }} color="success" variant="outlined" size='large' >Borrar</Button>

                                    </Grid>

                                </Grid>
                        }
                    </Grid>
                }

                {
                    showForm &&
                    <Grid container mt={20}>
                        <Grid item xs={10} m="2%" sx={{ mt: "-13%" }} pl="5%" justifyContent={'center'} >
                            {
                                showAlert2 &&
                                <Alert severity="success">usuario agregado </Alert>
                            }
                        </Grid>
                        <Grid item xs={10} m="2%" sx={{ mt: "-13%" }} pl="5%" fontSize={'large'} >
                            {
                                showAlert1 &&
                                <Alert severity="success" size="medium">usuario borrado </Alert>
                            }
                        </Grid>
                        <Grid item xs={10} m="2%" sx={{ mt: "-10%" }} pl="5%" >
                            {
                                showAlert3 &&
                                <Alert severity="success">Usuario Actualizado </Alert>
                            }
                        </Grid>



                        <Grid className='button1' item xs={8} sx={{ mt: "-5%" }} pl={35} pb={5}  >
                            <Button onClick={() => { showFormData() }} variant="outlined" size='large'>Agregar Usuario</Button>
                        </Grid>
                        <Grid container className='table' >
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 800 }} size="medium" aria-label="a dense table" >
                                <TableHead >
                                    <TableRow  >
                                        <TableCell >Posicion</TableCell>
                                        <TableCell align="right">Nombre</TableCell>
                                        <TableCell align="center">Correo</TableCell>
                                        <TableCell align="right">Telefono</TableCell>
                                        <TableCell align="right">Solicitud</TableCell>
                                        <TableCell align="right">Comentario</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.map((row) => (
                                        <TableRow
                                            key={row.idtablaFinal}
                                            onClick={() => { edit(row) }}
                                            sx={{ '&:last-child td, &:last-child th': { borderRadius: 5 } }}
                                            
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.idtablaFinal}
                                            </TableCell>
                                            <TableCell align="right">{row.nombre}</TableCell>
                                            <TableCell align="center" >{row.correo}</TableCell>
                                            <TableCell align="right">{row.telefono}</TableCell>
                                            <TableCell align="right" >{row.solicitud}</TableCell>
                                            <TableCell align="right">{row.comentario}</TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                                
                            </Table>
                        </TableContainer>
                        </Grid>
                    </Grid>
                }
            </div>
        </Box>
    );

}

export default Usuarios