import styled from "styled-components";

type Props = {
    scColor: string
    theme: string
}

export const FooterStyle = styled.div<Props>`
    background-color: ${props => props.scColor};
    border-top: 1px solid ;

    p {
        margin: 0;
        text-align: center;
        color: ${props => props.theme == 'dark' ? 'white' : 'black'};
    }
`