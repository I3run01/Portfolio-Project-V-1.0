import styled from "styled-components";

type Props = {
    theme: string,
    scColor: string,
}


export const SkillStyle = styled.div<Props>`

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

    @media (min-width: 1050px) {
        h1 {
            font-size: 5em;
        }
    }

`