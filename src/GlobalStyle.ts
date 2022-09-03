import styled from "styled-components";

type Props = {
    theme: string
}

export const MainDiv = styled.main<Props>`
    background-color: ${props => props.theme == 'dark' ? '#141414' : '#fffef9'};
    min-height: 100vh;

    position: relative;


    scroll-behavior: smooth;


    #menubar {
        position: fixed;
        top: 3vh;
    }

    #ContactMeBTN {
        position: fixed;
        bottom: 2vh;
        right: 5vw;
    }
`

export const ParagraphDiv = styled.div`
    padding: 2vh;
    margin: auto;

    @media (min-width: 1000px) {
        padding: 50px;
    }
`
