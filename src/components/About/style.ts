import styled from "styled-components";

type Props = {
    theme: string
    scColor:  string
}

const textLightFontColor = "#fffbfb"
const textDarkFontColor = "#171717"

export const AboutStyle = styled.div<Props>`

    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Open+Sans:wght@300&family=Rubik+Dirt&display=swap');
     
    
    

    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    
    h1 {
        font-family: 'Rubik Dirt', cursive;
        color: ${props => props.theme == 'dark' ? textLightFontColor : textDarkFontColor};
        font-weight: lighter;
        font-size: 3em;
        filter: drop-shadow(1px 1px 1px ${props => props.scColor});

        ::after {
            content: '';
            width: 200px;
            height: 4px;
            background-color: currentColor;
            display: block;
            margin: 0 auto;
        }

    }
   

    #container {
        display: flex;
        flex-direction: column;

    }

    img {
        width: 100%;
        -webkit-box-shadow: 25px 26px 17px -15px -2px #ABFF99; 
        box-shadow: 25px 26px 17px -15px ${props => props.scColor};   
        border-radius: 20px;
    }   

    p {
        font-family: 'Open Sans', sans-serif;
        font-size: 1.5em;
        line-height: 1.5em;
        color: ${props => props.theme == 'dark' ? textLightFontColor : textDarkFontColor};
        margin: 40px 10px auto 10px;
        text-align: justify;
    }

    #curriculum {
        margin-top: 80px;
    }

    a {
        font-family: 'Open Sans', sans-serif;
        text-decoration: none;
        font-size: 1.5em;
        border: ${props => props.theme == 'dark' ? 'white' : 'black'} solid 2px;
        border-radius: 20px;
        padding: 5px 20px 5px 20px;
        color: ${props => props.theme == 'dark' ? textLightFontColor : textDarkFontColor};
        
        :hover {
            background-color: ${props => props.scColor};
        }

    }

    @media(min-width: 1050px) {
        h1 {
            font-size: 5em;
        }

        #container {
            flex-direction: row;
            justify-content: center;
        }

        #img {
            width: 50%;
            display: flex;
            align-items: center;

        }
        
        #text {
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;

            p {
                font-size: 2em;
                width: 70%;
                margin: auto;
                line-height: 1.5em;
            }
        }
    }
`