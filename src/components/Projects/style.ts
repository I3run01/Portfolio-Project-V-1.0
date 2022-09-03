import styled from "styled-components";

type Props = {
    theme: string
    scColor:  string
}

const textLightFontColor = "#fffbfb"
const textDarkFontColor = "#171717"

export const ProjectStyle = styled.div<Props>`
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

    #img {
        position: relative;
        min-height: 60vw;

        #NextProjectIcon {
            position: absolute;
            transform:translateY(-50%);
            top: 50%;
            right: 0px;
            z-index: +1;
            width: 40px;
            background: rgba(255, 255, 255, 0.29);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(0px);
            -webkit-backdrop-filter: blur(0px);
            border: 1px solid rgba(255, 255, 255, 1);
            
            :hover {    
                cursor: pointer;
            }

            
        }

        img {
            position: relative;
            width: 100%;
            opacity: 80%;
            -webkit-box-shadow: 25px 26px 17px -15px -2px #ABFF99; 
            box-shadow: 25px 26px 17px -15px ${props => props.scColor};   
            border-radius: 20px;
        }

        #BackProjectIcon {
            position: absolute;
            transform:translateY(-50%);
            top: 50%;
            left: 0px;
            z-index: +1;
            width: 40px;
            background: rgba(255, 255, 255, 0.29);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(0px);
            -webkit-backdrop-filter: blur(0px);
            border: 1px solid rgba(255, 255, 255, 1);
            
            :hover {
                cursor: pointer;
            }
        }
    }

    .nextSlide {
        overflow-x: hidden;
            animation-name: nextProjectAnimation;
            animation-duration: .5s;

            @keyframes nextProjectAnimation {
                0% {
                    transform: scale(100%);

                } 49% {
                    transform: scale(0%);

                } 51% {
                    transform: scale(0%);
                } 100% {
                    transform: scale(100%);
                }
            }
    }

    .backSlide {
        overflow-x: hidden;
        animation-name: backProjectAnimation;
        animation-duration: .5s;

        @keyframes backProjectAnimation {
                 0% {
                    transform: scale(100%);
                } 49% {
                    transform: scale(0%);
                } 51% {
                    transform: scale(0%);
                } 100% {
                    transform: scale(100%);
                }
            }
    }
    
    #text {
        h2 {
            font-size: 2em;
            font-family: 'Open Sans', sans-serif;
            color: ${props => props.theme == 'dark' ? textLightFontColor : textDarkFontColor};
        }

        p {
            font-family: 'Open Sans', sans-serif;
            font-size: 1.5em;
            line-height: 1.5em;
            color: ${props => props.theme == 'dark' ? textLightFontColor : textDarkFontColor};
            margin: 40px 10px auto 10px;
            text-align: justify;

            a {
                color: ${props => props.theme == 'dark' ? textLightFontColor : textDarkFontColor};
                font-weight: bolder;

                :hover {
                    color: ${props => props.scColor}
                }
            }
            
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
            flex-direction: column;
            justify-content: center;
            align-items: center;

            p {
                font-size: 2em;
                width: 70%;
                margin: auto;
                line-height: 1.5em;
            }
        }

        .nextSlide {
            overflow-x: hidden;
            animation-name: nextProjectAnimation;
            animation-duration: .5s;

            @keyframes nextProjectAnimation {
                0% {
                    position: absolute;
                    right: 0px;
                    opacity: 100%;
                } 49% {
                    position: absolute;
                    right: 500px;
                    opacity: 0;
                } 51% {
                    position: absolute;
                    right: -500px;
                    opacity: 0;
                } 100% {
                    position: absolute;
                    right: 0px;
                    opacity: 100%;
                }
            }
        }

        .backSlide {
            overflow-x: hidden;
            animation-name: backProjectAnimation;
            animation-duration: .5s;

            @keyframes backProjectAnimation {
                0% {
                        position: absolute;
                        left: 0px;
                        opacity: 100%;
                    } 49% {
                        position: absolute;
                        left: 500px;
                        opacity: 0;
                    } 51% {
                        position: absolute;
                        left: -500px;
                        opacity: 0;
                    } 100% {
                        position: absolute;
                        left: 0px;
                        opacity: 100%;
                    }
                }
        }

    }
`