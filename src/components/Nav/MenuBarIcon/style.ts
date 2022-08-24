import styled from "styled-components";

type Props = {
  theme: string
  secColor: string
}

export const MenuBarStyle = styled.div<Props>`

  border: 2px solid transparent;
  width: 40px;
  background: rgba(255, 255, 255, 0.0);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  :hover {
    cursor: pointer;
  }
  
  margin-bottom: 0;
  padding-bottom: 0;

  .line01 {
    margin-top: 0;
  }

  hr {
    height: 3px;
    width: 38px;
    background-color: ${props => props.theme == 'dark' ? 'white' : 'black'};
    margin-left: 0;
    transition: all 0.5s ease-in-out;
    border: 1px solid rgba(255, 255, 255, 1);
    margin-bottom: 0;
    border-radius: 80px;
    -webkit-box-shadow: 4px 0px 18px 3px rgba(0,0,0,0.21); 
    box-shadow: 4px 0px 18px 3px rgba(0,0,0,0.21)
    
  }

  .opened02 {
    opacity: 0;
    transform: translateX(-15px);
  }

  .opened01 {
    width: 40px;
    transform: rotate(45deg) translateY(10px) translateX(8px);
    border: 1px solid rgba(255, 255, 255, 1);
  }

  .opened03 {
    width: 40px;
    transform: rotate(-45deg) translateY(-10px) translateX(8px);
    border: 1px solid rgba(255, 255, 255, 1);
  }

  .In {
    background-color: ${props => props.secColor};
  }

  @media (min-width: 400px) {

    hr {
      width: 40px;
    }

    .opened02 {
      transform:  translateX(-10px);
    }

    .opened01 {
      transform: rotate(45deg) translateY(12px) translateX(5px);
    }

    .opened03 {
      transform: rotate(-45deg) translateY(-12px) translateX(5px);
    }

  }


`