import styled from "styled-components";

type Props = {
    theme: string
    hoverColor: string
}

export const NavSS = styled.nav<Props>`
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Rubik+Dirt&display=swap');
    margin-left: 2vw;
    z-index: 2;

    .MenuScroll {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 0vh;
        width: 60vw;
        background: rgba(255, 255, 255, 0.10);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 0px solid ${props => props.hoverColor};
        overflow-y: hidden;
        transition: all 0.5s ease-out;
        text-align: center;
    }

    
    a {
        font-family: 'Rubik Dirt', cursive;
        color: ${props => props.theme == 'light' ? 'black' : 'white'};
        text-decoration: none;
        line-height: 3.5vh;
        font-size: 1.2em;
        font-weight: 500;
        :hover {
            color: ${props => props.hoverColor};
            cursor: pointer;
        }
        span {
            font-size: 0.6em;
        }
    }

    .opened {
        box-shadow: 8px 9px 30px 0px rgba(0,0,0,0.67);
        border: 2px solid ${props => props.hoverColor};
        height: 60vh;
    }

    @media (min-width: 400px) {
        
        .MenuScroll {
            width: 300px;
            font-size: 2em;
        }
    }


`