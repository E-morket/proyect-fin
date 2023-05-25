import { Grid, Typography } from "@mui/material";
import './Mensaje.css';

const Mensaje = () => {
    return (
        <div className='modal'>

            <Grid className='message'>
                <Grid container spacing={2} >
                    <Grid item xs={12} md={12} >
                        <Grid item md={12}>
                            <Typography mt={{ xs: 4, md: 8 }} ml={10} gutterBottom variant="h4" component="div"> Esteban Arguedas Campos</Typography>
                            <Typography mt={{ xs: 4, md: 8 }} ml={10} gutterBottom variant="h6" component="div">
                                <div>
                                    
                                        
                                            <ol>Soy de Costa Rica</ol>
                                            <ol>Tengo 35 años</ol>
                                            <ol>mi nivel de ingles es b2</ol>
                                            <p>En cuanto a lo laboral soy una persona que me gustan los retos y trabajo en equipo y trato de que las cosas salgan lo mas correcto posible.</p>
                                            <p>me considero una persona tranquila y apasionada de la naturaleza. Entusiasta y me gusta viajar. </p>
                                        
                                </div>
                            </Typography>
                        </Grid >

                    </Grid>

                    <Grid mt={4} item ml={60}>
                        <a className="button button3" href='/proyecto-compa/#/'>cerrar</a>
                    </Grid>
                </Grid>

            </Grid>

     
        </div >

    )
}
export default Mensaje;