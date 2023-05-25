import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import './Portafolio.css'
import './styles.css'
import imgsvg from './assets/logo.svg'
import imgithub from './assets/github-logo.png';
import user from './assets/perfil.png';
import backnd from './assets/backnd.png';


import tecFrontimg from './assets/tecnologia-front.png';
import vistas from './assets/vistas-front.png';
import node from './assets/node.png'
import mySqlimg from './assets/mySql.png'

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';


import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';


//import React from 'react';


const Portafolio = () => {


    return (
        <Box sx={{ flexGrow: 1 }} >

            <Grid container spacing={2}>

                <Grid className="left" item xs={12} md={8}>


                    <div >

                        <Typography mt={{ xs: 4, md: 8 }} ml={10} gutterBottom variant="h2" component="div"> Esteban Arguedas Campos</Typography>
                    </div>


                    <div className='img-user'>

                        <img src={user} className='img-user' alt='user' />
                    </div>

                </Grid>

                <Grid item className="right" xs={12} md={4} mt={8} >
                    <Grid >

                        <div >
                            <Grid mt={5} >






                                <Grid>
                                    <h2>contactame</h2>
                                    <Button color="primary" aria-label="upload picture" component="label">

                                        <a className='icons' href='https://www.linkedin.com/in/esteban-arguedas-8715378a/' target="_blank" rel="noreferrer">
                                            <LinkedInIcon style={{ fontSize: '60px' }} />
                                        </a>

                                    </Button>

                                    <Button color="primary" aria-label="upload picture" component="label">

                                        <a className='icons' href='https://wa.me/50683028223?text=Hola me interesa comunicarme contigo.' target="_blank" rel="noreferrer">
                                            <WhatsAppIcon style={{ fontSize: '50px' }} />
                                        </a>

                                    </Button>
                                    <Button color="primary" aria-label="upload picture" component="label">
                                        <a className='icons' href='https://www.facebook.com/profile.php?id=100007807602534' target="_blank" rel="noreferrer">
                                            <FacebookIcon style={{ fontSize: '50px' }} />
                                        </a>
                                    </Button>
                                    <Button color="primary" aria-label="upload picture" component="label" >
                                        <a className='icons' href='https://www.youtube.com/channel/UCMzyzjqz2V71CiG_Yu8mlVA' target="_blank" rel="noreferrer">
                                            <YouTubeIcon style={{ fontSize: '50px' }} />
                                        </a>
                                    </Button>
                                    <Button color="primary" aria-label="upload picture" component="label" >
                                        <a className='icons' href='https://www.mailto:arguedas0099@hotmail.com' target="_blank" rel="noreferrer">
                                            <EmailIcon style={{ fontSize: '50px' }} />
                                        </a>
                                    </Button>
                                </Grid>
                            </Grid>

                        </div>
                    </Grid>
                    <Grid item sx={{ xs: 12, md: 6 }} pl={-2} pt={1} mt={12} textAlign={'justify'} >
                        <h2>Desarrollador Full-Stack en Proceso </h2>
                        <br></br>
                        <p><li>Gracias a la academia Enyoi he logrado adquirir
                            conocimiento en desarrollo de aplicaciones web con ayuda
                            de algunas tecnologias guiadas por el profesor Carlos.
                        </li> </p>
                        <br></br>
                        <p><li> Con esfuerzo y sacrificio he logrado salir adelante
                            en cada uno de los challenges impuestos durante este curso
                        </li> </p>
                    </Grid>



                </Grid>


                <Grid className='experiencie' container xs={12} >
                    <Grid item md={12} paddingLeft={70} mt={-20}  >
                        <div className='tecnos'>
                            <h1>Tecnologias Aprendidas</h1>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} ml={10}>




                        <Grid className='options' container xs={12}>

                            <Grid  >
                                <h1 >Front-End</h1>
                                <div>Es la parte de una aplicación que interactúa con los usuarios,
                                    es conocida como el lado del cliente. Básicamente es todo lo que vemos en la pantalla
                                    cuando accedemos a un sitio web o aplicación: tipos de letra, colores, adaptación para
                                    distintas pantallas(RWD), los efectos del ratón, teclado, movimientos, desplazamientos,
                                    efectos visuales… y otros elementos que permiten
                                    navegar dentro de una página web. Este conjunto crea la experiencia del usuario.
                                </div>

                            </Grid>
                            <div className='vista' >
                                <img src={vistas} className='vista' alt='vista' />
                            </div>


                        </Grid>


                    </Grid>

                </Grid>



                <Grid className='options' container xs={12} >

                    <Grid className='container-backend' item xs={12} md={10}>
                        <Grid>

                            <h1  >Back-End</h1>
                        </Grid>
                        <div>Cuando hablamos de “Back-end” nos referimos al interior de las aplicaciones
                            que viven en el servidor y al que a menudo se le denomina “el lado del servidor”.
                            El back end del sitio web consiste en un servidor, una aplicación y una base de datos.
                            Se toman los datos, se procesa la información y se envía al usuario.

                        </div>
                        <br></br>
                        <div className='backnd'>
                            <img src={backnd} className='backnd' alt='backnd' />
                        </div>

                    </Grid>
                    <Grid item md={4} ml={6} mt={14}>
                        <img className='node' src={node} alt='node' />
                    </Grid>
                    <Grid item md={4} ml={12} mt={-7}>
                        <img className='mySqlimg' src={mySqlimg} alt='mySqlimg' />

                    </Grid>


                    <Grid container spacing={2} xs={12} md={6}>

                        <Grid item className='imgsvg ' md={4} ml={6} mt={8}>
                            <Grid item paddingLeft={10}></Grid>
                            <Button href='https://react.dev' target="_blank" rel="noreferrer" >
                                <img src={imgsvg} className='imgsvg ' alt='imgsvg ' />
                            </Button>

                        </Grid>

                        <Grid item md={6} >
                            <img src={tecFrontimg} className='tecFrontimg' alt='tecFrontimg' />
                        </Grid>


                    </Grid>
                </Grid>




                <Grid className='projects' container spacing={2} >
                    <Grid item pb={8} xs={12} md={5}  >
                        <Grid item>
                            <h1 >Te gusta el metal </h1>

                            <div>
                                <h3> ingresa aqui</h3>
                            </div>
                        </Grid >
                        <Grid mt={3} item>
                            <a className="glow-on-hover button" href='https://open.spotify.com/user/arguedas0099?si=T-9CtoecSXCYuOMQJ9ZnxQ&utm_source=copy-link&dd=1' target="_blank" rel="noreferrer">Spotify profile</a>
                        </Grid>
                    </Grid >
                </Grid>


                <Grid className='projects1' container spacing={2} >

                    <Grid item xs={8} md={4} >

                        <Grid>


                            <h1 >E-Morket  </h1>


                            <div>
                                <p>Mira mis proyectos en GitHub</p>
                            </div>


                        </Grid>
                        <Grid item mt={6} direction="row" sx={{ xs: 6, md: 8 }} spacing={2}  >


                            <Link href="https://github.com/E-morket">
                                <Button className='glow-on-hover' component="button" size='extra-large'  >
                                    <h3>acceder</h3>
                                </Button>
                            </Link>
                            <Grid item md={6} >
                                <img src={imgithub} className='imgithub' alt='imgithub' />
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>



            </Grid>

        </Box>
    )
}

export default Portafolio