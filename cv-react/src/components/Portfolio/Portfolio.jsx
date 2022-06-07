import "./Portfolio.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';



const Portfolio = () => {
    return (

        <Grid container style={{ display: "flex", justifyContent: "center", alignItens: "center", gap: "2em" }} >

            <Grid>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt=""
                        height="140"
                        image={require('../../assets/formTrack.png')}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" color="#4a00e0" component="div">
                            Form Tracker
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Projeto desenvolvido para Residência de Software 2021.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" style={{ background: "#4a00e0" }} size="small" href="https://github.com/marcelle-mascarenhas/residencia-squad-cesar" target="_blank" >+ Details</Button>
                    </CardActions>
                </Card>
      </Grid>

            <Grid>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={require('../../assets/elaResolve.png')}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" color="#4a00e0" component="div">
                            Ela Resolve
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Projeto idealizado por mim e desenvolvido para Residência de Software 2021.1 - Porto Digital.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" style={{ background: "#4a00e0" }} size="small" href="https://github.com/marcelle-mascarenhas/site-ela-resolve" target="_blank">+ Details</Button>
                    </CardActions>
                </Card>
            </Grid>

            <Grid>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={require('../../assets/monalisa.png')}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" color="#4a00e0" component="div">
                            Rede Monalisa
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Meu primeiro site desenvolvido para disciplina de Introdução a Programação Web.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" style={{ background: "#4a00e0" }} size="small" target="_blank" href="https://github.com/marcelle-mascarenhas/site-monalisa">+ Details</Button>
                    </CardActions>
                </Card>
            </Grid>

        </Grid>

    )
}

export default Portfolio;