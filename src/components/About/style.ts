import styled from "styled-components";

type Props = {
    theme: string
    scColor:  string
}

export const AboutStyle = styled.div<Props>`
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Rubik+Dirt&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Open+Sans:wght@300&family=Rubik+Dirt&display=swap');
     
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    
    h1 {
        font-family: 'Rubik Dirt', cursive;
        color: ${props => props.theme == 'dark' ? '#e6e6e6' : '#1c1c1c'};
        font-weight: lighter;
        font-size: 3em;
        filter: drop-shadow(1px 1px 1px ${props => props.scColor});
    }
   

    #container {
        display: flex;
        flex-direction: column;

    }

    img {
        width: 100%;
        opacity: 80%;
        z-index: -1;
        -webkit-box-shadow: 25px 26px 17px -15px -2px #ABFF99; 
        box-shadow: 25px 26px 17px -15px ${props => props.scColor};   
        border-radius: 20px;
    }   

    p {
        font-family: 'Open Sans', sans-serif;
        font-size: 1.5em;
        line-height: 1.5em;
        color: ${props => props.theme == 'dark' ? '#e6e6e6' : '#1c1c1c'};
        margin: 40px 10px auto 10px;
        text-align: justify;
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