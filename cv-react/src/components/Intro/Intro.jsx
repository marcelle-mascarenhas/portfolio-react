import "./Intro.css";
import marcelle from "../../assets/marcelle.png";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Intro = () => {
    return (
        <div className='intro'>

            <div className='intro-container'>

                <div className="intro-content">

                    <div className="text">
                        <span className="title-1"><p>Olá, eu sou</p></span>
                        <h1>Marcelle Mascarenhas</h1>
                        <p>Sou estudante do cursos de Sistemas para Internet</p>

                        <div class="social">
                            <IconButton style={{ color: "#000000" }} href="https://github.com/marcelle-mascarenhas" aria-label="github">
                                <GitHubIcon />
                            </IconButton>
                            <IconButton style={{ color: "#000000" }} href="https://www.linkedin.com/in/marcelle-mascarenhas/" aria-label="linkedin">
                                <LinkedInIcon />
                            </IconButton>
                        </div>

                        <div>
                            <Button href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsdLRqhFNJbPdWrzbTdWGrPdBtcglplnkrSSJjdhtqWsfGfCjrJsGQXzjcZLKLrSgKMhNDkq"
                                target="_blank" variant="contained" style={{ background: "#4a00e0" }} endIcon={<SendIcon />}>
                                Contato
                            </Button>
                        </div>

                    </div>
                </div>
                <div className="intro-img">
                    <img src={marcelle} alt="" />
                </div>
            </div>

        </div>
    )
}


export default Intro;