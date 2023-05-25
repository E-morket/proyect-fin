import axios from 'axios';
import {useState, useEffect} from 'react';
import { Grid, IconButton, tableCellClasses, TableCell, Table, TableBody, TableContainer, TableHead, TableRow, Paper, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, styled, Alert, TextField, Button, Typography} from '@mui/material';
import {Edit, Delete, Password} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Requests = () => {

  const [data, setData] = useState([]);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showSuccessAlert2, setShowSuccessAlert2] = useState(false);
  const [showWarningAlert, setShowWarningAlert] = useState(false);
  const [showWarningAlert2, setShowWarningAlert2] = useState(false);
  const [idform, setIdform] = useState("");
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("")
  const [telefono, setTelefono] = useState("");
  const [solicitud, setSolicitud] = useState("")
  const [comentario, setComentario] =useState("")
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const navigate = useNavigate()
  
  const onNameChange = e => setNombre(e.target.value)
  const onEmailChange = e => setCorreo(e.target.value)
  const onCelphoneChange = e => setTelefono(e.target.value)
  const onRequestChange = e => setSolicitud(e.target.value)
  const onCommentChange = e => setComentario(e.target.value)
  const onUserChange = e => setUser(e.target.value)
  const onPasswordChange = e => setPassword(e.target.value)
  const handleClose = () => {setOpen(false);};
  const handleClose2 = () => {setOpen2(false);};
  const handleClose3 = () => {setOpen3(false);};
  const redirectToHome = () => {navigate('/')}

  useEffect(()=>{
    getData()
  },[])

  const getData = async () => {
    try{
      const {data: response} = await axios.get('https://proyecto-integrador-back-production.up.railway.app/form')
      setData(response)
    } catch (error) {
      console.log(error.message)
    }
  }

  const tableEdit = ((getTableData) => {
    setIdform(getTableData.idform)
    setNombre(getTableData.nombre)
    setCorreo(getTableData.correo)
    setTelefono(getTableData.telefono)
    setSolicitud(getTableData.solicitud)
    setComentario(getTableData.comentario)
    setOpen(true)
  })

  const tableDelete = ((getTableData) => {
    setIdform(getTableData.idform)
    setNombre(getTableData.nombre)
    setCorreo(getTableData.correo)
    setTelefono(getTableData.telefono)
    setSolicitud(getTableData.solicitud)
    setComentario(getTableData.comentario)
    setOpen2(true)
  })

  const modalAddUser = () => {
    setOpen3(true)
  }
  const confirmedDelete = () => {
    axios.delete(`https://proyecto-integrador-back-production.up.railway.app/delete-row/${idform}`).then(() =>{
    setOpen2(false)
    getData()
    setShowSuccessAlert2(true)
    showSuccessAlert2TimeOut()  
    })
  }

  const buttonUpdate = (() => {
    axios.put(`https://proyecto-integrador-back-production.up.railway.app/update-row/${idform}`, {idform, nombre, correo, telefono, solicitud, comentario})
    .then(()=>{
      getData()
      setNombre("")
      setCorreo("")
      setTelefono("")
      setSolicitud("")
      setComentario("")
      setIdform("")
      setShowSuccessAlert(true)
      showSuccessAlertTimeOut()
      setOpen(false)
    })
  
  })

  const buttonAddUser = () =>{
    if (user === "" || password === ""){
     setShowWarningAlert(true)
     showWarningAlertTimeOut()
    }else{
 
     axios.post('https://proyecto-integrador-back-production.up.railway.app/add-user', {user, password})
     .then((response) => {
       setUser("")
       setPassword("")
       setShowSuccessAlert(true)
       showSuccessAlertTimeOut()
     }).catch((error) => {
       console.log(error)
       setShowWarningAlert2(true)
       showWarningAlert2TimeOut()
     })
   }
  }

  const showSuccessAlertTimeOut = () => {
    setTimeout(() => {
      setShowSuccessAlert(false);
    }, 6000);
  }

  const showSuccessAlert2TimeOut = () => {
    setTimeout(() => {
      setShowSuccessAlert2(false);
    }, 6000);
  }
  
  const showWarningAlertTimeOut = () => {
    setTimeout(() => {
      setShowWarningAlert(false);
    }, 3000);
  }

  const showWarningAlert2TimeOut = () => {
    setTimeout(() => {
      setShowWarningAlert2(false);
    }, 3000);
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Editar fila</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Termina de editar la fila y presiona actualizar
          </DialogContentText>

      <TextField sx={{m:1}} variant="filled" id="outlined-basic" label="Nombre" value={nombre} onChange={onNameChange}/>
      <TextField sx={{m:.7}} variant="filled" id="outlined-basic" label="Correo" value={correo} onChange={onEmailChange}/>
      <TextField sx={{m:.7}} variant="filled" id="outlined-basic" label="telefono" value={telefono} onChange={onCelphoneChange} type='number'/>
      <TextField sx={{m:.7}} variant="filled" id="outlined-basic" label="solicitud" value={solicitud} onChange={onRequestChange}/>
      <TextField sx={{m:.7}} variant="filled" id="outlined-basic" label="comentario" value={comentario} onChange={onCommentChange}/>
        
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
      <Button onClick={buttonUpdate}>actualizar</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={open2} onClose={handleClose2}>
        <DialogTitle>¿Estas seguro que deseas eliminar la fila?</DialogTitle>
        <DialogContent>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="center">Nombre</StyledTableCell>
            <StyledTableCell align="center">Correo</StyledTableCell>
            <StyledTableCell align="center">Telefono</StyledTableCell>
            <StyledTableCell align="center">Solicitud</StyledTableCell>
            <StyledTableCell align="center">Comentario</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow key={idform}>
              <StyledTableCell component="th" scope="row">{idform}</StyledTableCell>
              <StyledTableCell align="center">{nombre}</StyledTableCell>
              <StyledTableCell align="center">{correo}</StyledTableCell>
              <StyledTableCell align="center">{telefono}</StyledTableCell>
              <StyledTableCell align="center">{solicitud}</StyledTableCell>
              <StyledTableCell align="center">{comentario}</StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
          <Button sx={{m:1}}  variant='outlined' onClick={handleClose2}>Cancelar</Button>
          <Button sx={{m:1}} variant='outlined' onClick={() => {confirmedDelete()}} startIcon={<Delete />}>Eliminar</Button>
        </DialogContent>
      </Dialog>

      <Dialog open={open3} onClose={handleClose3}>
        <DialogTitle>Agregar Usuario</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Termina de editar los campos y presiona agregar usuario
          </DialogContentText>
      {showWarningAlert &&  <Alert severity="warning">Debes de llenar todos los campos</Alert>}
      {showWarningAlert2 && <Alert severity="warning">Ha ocurrido un error, revisa la consola para saber mas</Alert>}

      <TextField sx={{m:.7}} variant="filled" id="outlined-basic" label="Usuario" value={user} onChange={onUserChange}/>
      <TextField sx={{m:.7}} variant="filled" id="outlined-basic" label="Contraseña" value={password} onChange={onPasswordChange}/>
        
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose3}>Cancelar</Button>
      <Button onClick={buttonAddUser}>agregar usuario</Button>
        </DialogActions>
      </Dialog>

        {showSuccessAlert && <Alert severity="success">Actualizado correctamente</Alert>}
        {showSuccessAlert2 && <Alert severity="success">Eliminado correctamente</Alert>}

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography fontFamily={'century'} variant='h4' sx={{textAlign:'left', justifyContent:'center', m:1}}>Solicitudes</Typography>
          </Grid>
          <Grid item sx={{display:'flex', m: 'auto'}}  xs={6}>
              <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={redirectToHome}>
                  regresar
              </Button>
                
              <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{marginLeft: 1}}
              onClick={modalAddUser}>
                  agregar usuario
              </Button>
          </Grid>
        </Grid>
 

          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="center">Nombre</StyledTableCell>
            <StyledTableCell align="center">Correo</StyledTableCell>
            <StyledTableCell align="center">Telefono</StyledTableCell>
            <StyledTableCell align="center">Solicitud</StyledTableCell>
            <StyledTableCell align="center">Comentario</StyledTableCell>
            <StyledTableCell align="center">Editar</StyledTableCell>
            <StyledTableCell align="center">Eliminar</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.idform}>
              <StyledTableCell component="th" scope="row">{row.idform}</StyledTableCell>
              <StyledTableCell align="center">{row.nombre}</StyledTableCell>
              <StyledTableCell align="center">{row.correo}</StyledTableCell>
              <StyledTableCell align="center">{row.telefono}</StyledTableCell>
              <StyledTableCell align="center">{row.solicitud}</StyledTableCell>
              <StyledTableCell align="center">{row.comentario}</StyledTableCell>
              <StyledTableCell align="center"><IconButton onClick={() => {tableEdit(row)}}><Edit/></IconButton></StyledTableCell>
              <StyledTableCell align="center"><IconButton onClick={() => {tableDelete(row)}}><Delete/></IconButton></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}
export default Requests;