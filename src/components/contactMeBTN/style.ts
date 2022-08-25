import styled from "styled-components";

type Props = {
    theme: string,
    secColor: string
}


export const ContactMeBtnStyle = styled.div<Props>`
    z-index: 10;

    #container {
        width: 12vw;
        height: 5vh;
        position: relative;
        cursor: pointer;

        .Background {
            transform: translateY(-100%);
            top: 2.5vh;
            left: -1vw;
            position: absolute;
            width: 15vw;
            height: 0vh; 
            background: rgba(255, 255, 255, 0.10);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            transition: all 0.5s ease-in-out;
        }

        .BackgroundOpen {
            height: 38vh; 
        }
    }

    hr {
        position: absolute;
        top: 1vh;
        left: 2vw;
        width: 8vw;
        padding: 0.25vh;
        border: none;
        background-color: ${props => props.theme == 'dark' ? 'white' : 'black'};
        -webkit-box-shadow: 11px 13px 24px 2px rgba(0,0,0,0.48); 
        box-shadow: 11px 13px 24px 2px rgba(0,0,0,0.48);
        transition: all 0.5s ease-in-out;
        
    }

    .line02 {
        transform: rotate(90deg);
    }

    .IconLinkedin, .IconGitHub, .IconWhatsApp, .IconTelegram{
        position: absolute;
        transform: scale(0%);
        transition: all 0.5s ease-in-out;
        z-index: +1;

        right: 0vw;
        svg {
            width: 11vw;

        }
    }

    .IconLinkedin {
        top: -8vh;
    }

    .IconGitHub {
        top: -14vh;
    }

    .IconWhatsApp {
        top: -25vh;
    }

    .IconTelegram {
        top: -34vh;
    }

    //After animation

    .Opened01 {
        width: 14vw;
        transform: translateX(-3vw);
    }

    .Opened02 {
        transform: rotate(-12deg);
        opacity: 0;
    }

    .OpenedIconLinkedin , .OpenedIconWhatsApp, .OpenedIconTelegram {
        position: absolute;
        transform: scale(100%);
    }

    .OpenedIconGitHub {
        position: absolute;
        transform: scale(200%);
    }

    .hoverContactMe {
        background-color: ${props => props.secColor};
    }

    @media (min-width: 400px) {
        #container {
            position: relative;
            height: 50px;
            width: 50px;

            .Background {
                width: 64px;
                top: 25px;
                left: -7px;
                height: 0;

                transition: all 0.5s ease-in-out;
            }

            .BackgroundOpen {
                height: 220px;
            }
        }

        hr {
            position: absolute;
            top: 15px;
            left: 5px;
            width: 35px;
            padding: 2px;
        }

        

        //After animation

        

        .Opened01 {
            width: 60px;
            transform: translateX(-12px);
        }

        .IconLinkedin, .IconGitHub, .IconWhatsApp, .IconTelegram{ 
            right: 10px;

            svg {
                width: 30px;
            }
        }

        .OpenedIconGitHub {
            transform: scale(160%);
        }

        .IconLinkedin {
            top: -30px;
        }

        .IconGitHub {
            top: -70px;
        }

        .IconWhatsApp {
            top: -130px;
        }

        .IconTelegram {
            top: -190px;
        }


    }



`