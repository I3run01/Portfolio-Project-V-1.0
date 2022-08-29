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

        ::after {
            content: '';
            width: 200px;
            height: 4px;
            background-color: currentColor;
            display: block;
            margin: 0 auto;
        }
    }

    h2 {
        font-family: 'Rubik Dirt', cursive;
        color: ${props => props.theme == 'dark' ? '#e6e6e6' : '#1c1c1c'};
        font-weight: lighter;
        font-size: 1.2em;
        text-align: start;
    }

    .MySkill {
        :hover > h2 {
            color: ${props => props.scColor};
        }
    }

    .levelbar {
        width: 0;
        height: 100%;
        background-color: ${props => props.scColor};
        transition: all 2s ease-in-out;
    }


    .levelbarOn1 {
        width: calc(100% * (1 / 5));
    }
    .levelbarOn2 {
        width: calc(100% * (2 / 5));
    }
    .levelbarOn3 {
        width: calc(100% * (3 / 5));
    }
    .levelbarOn4 {
        width: calc(100% * (4 / 5));
    }
    .levelbarOn5 {
        width: calc(100% * (5 / 5));
    }

    .emptybar {
        height: 10px;
        background-color: ${props => props.theme == 'dark' ? '#e6e6e6' : '#1c1c1c'};
        
    }

    

    @media (min-width: 1050px) {
        h1 {
            font-size: 5em;
        }
    }

`