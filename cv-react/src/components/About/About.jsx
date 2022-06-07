import "./About.css";
import img1 from "../../assets/img1.png";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import cv from "./cv.pdf";



const About = () => {
    
        return (
            <div className="about-container">
                <div className="about-left">
                    <div className="about-img">
                        <img src={img1} alt="" />
                    </div>
                </div>
                <div className="about-right">
                    <p className="about-desc">
                        Meu nome é <b>Marcelle Mascarenhas</b>, sou de Recife - PE. Atualmente sou estudante do curso de Sistemas para Internet - 3º período - da UNICAP (Universidade Católica de Pernambuco), mas curiosamente, essa não é minha primeira faculdade, também cursei Bacharelado em Química na UFPE.<br />
                        Se você veio aqui conhecer meu trabalho, saiba que sou apaixonada pelo que faço e estou sempre tentando fazer melhor, porque sempre dá.
                    </p>

                    <div class="info">

                        <div class="info-box">
                            <PhoneIcon sx={{ fontSize: 25 }} />
                            <span className="info">(81) 99744-5493</span>
                        </div>

                        <div className="info-box">
                            <EmailIcon sx={{ fontSize: 25 }} />
                            <span className="info">marcellebts@gmail.com</span>
                        </div>
                    </div>
                    <div className="btn-cv">
                        
                        <a href={cv} download="cv.pdf"><Button variant="contained" style={{ background: "#4a00e0" }} endIcon={<DownloadIcon />}>
                            Download CV
                        </Button></a>

                    </div>


                </div>
            </div>
        );
    };

    export default About;