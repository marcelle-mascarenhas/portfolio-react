import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


const Education = () => {
    return (
        <div className="education-container">
            <Grid container spacing={5} direction="column">
                <Grid item xl={6} md={6} sm={12} xs={12}>
                    <Paper elevation={6} style={{ background: "#0000", border: "1px solid #4a00e0" }} sx={{
                        p: 2,
                        margin: 'auto',
                        maxWidth: 400,
                        flexGrow: 1,
                    }}>

                        <Typography gutterBottom variant="subtitle1" style={{ color: "rgb(0, 0, 0)" }} component="div">
                            2013-2018
                        </Typography>
                        <Typography variant="subtitle1" style={{ color: "#4a00e0" }} gutterBottom>
                            <b>Bacharelado em Química</b>
                        </Typography>
                        <Typography variant="body2" style={{ color: "rgb(0, 0, 0)" }} gutterBottom>
                            Universidade Federal de Pernambuco
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xl={6} md={6} sm={12} xs={12}>
                    <Paper elevation={6} style={{ background: "#0000", border: "1px solid #4a00e0" }} sx={{
                        p: 2,
                        margin: 'auto',
                        maxWidth: 400,
                        flexGrow: 1,
                    }}>

                        <Typography gutterBottom variant="subtitle1" style={{ color: "rgb(0, 0, 0)" }} component="div">
                            2017
                        </Typography>
                        <Typography variant="subtitle1" style={{ color: "#4a00e0" }} gutterBottom>
                            <b>1º Lugar da Área de ciências exatas e da terra</b>
                        </Typography>
                        <Typography variant="body2" style={{ color: "rgb(0, 0, 0)" }} gutterBottom>
                            23º Congresso de Iniciação Científica da Universidade Federal de Pernambuco (CONIC).
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xl={6} md={6} sm={12} xs={12}>
                    <Paper elevation={6} style={{ background: "#0000", border: "1px solid #4a00e0" }} sx={{
                        p: 2,
                        margin: 'auto',
                        maxWidth: 400,
                        flexGrow: 1,
                    }}>

                        <Typography gutterBottom variant="subtitle1" style={{ color: "rgb(0, 0, 0)" }} component="div">
                            2021-Atual
                        </Typography>
                        <Typography variant="subtitle1" style={{ color: "#4a00e0" }} gutterBottom>
                            <b>Sistemas para Internet</b>
                        </Typography>
                        <Typography variant="body2" style={{ color: "rgb(0, 0, 0)" }} gutterBottom>
                            Universidade Católica de Pernambuco
                        </Typography>
                    </Paper>
                </Grid>


            </Grid>

        </div>

    )
}


export default Education;