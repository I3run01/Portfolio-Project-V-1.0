import styled from "styled-components";

type Props = {
    theme: string
    scColor: string
}

export const IntroductionStyle = styled.div<Props>`
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Rubik+Dirt&display=swap');


    position: relative;
    height: 100vh;
    background-image: url(${props => props.theme == 'dark' ? 'images/bgDark.svg' : 'images/bgLight.svg'});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    backface-visibility: 80%;
    

    h1 {
        position: absolute;
        text-align: center;
        font-family: 'Rubik Dirt', cursive;
        color: ${props => props.theme == 'dark' ? 'white' : 'black'};
        font-size: 2em;
        top: 20%;
        right: 10%;
        filter: drop-shadow(1px 1px 4px ${props => props.scColor});
        font-weight: lighter;

        :hover {
            cursor: pointer;
        }
        
        span {
            font-size: 1.5em;
            color: ${props => props.scColor};
            text-shadow: 2px 2px 4px black;
        }

        #subtitle {
            font-size: 0.5em;
            color: ${props => props.theme == 'dark' ? 'white' : 'black'};
            font-weight: lighter;
        }
    }

    h1:hover + img, h1:active + img {
        filter: drop-shadow(1px 1px 4px ${props => props.scColor});
    }

    img {
        position: absolute;
        width: 90%;
        bottom: 0vh;
        filter: saturate(3)
    }

    @media (min-width: 390px) {
        img {
            width: 400px;
            font-size: 40px;
        }
    }

    @media (min-width: 900px) {
        img {
            width: 600px;
        }

        h1 {
            font-size: 80px;
            right: 5%;
        }
    }

    @media (min-width: 1200px) {
        h1 {
            right: 20%;
        }
    }

    

` 