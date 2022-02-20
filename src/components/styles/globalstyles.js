import { createGlobalStyle } from "styled-components";
import pipboy from '../../assets/Pipbackround.png';
import vaultBoy from '../../assets/Vault_Boy.png';


export const Globalstyles = createGlobalStyle `

    body {
        margin: 0;
        padding: 0:
        background: ${({theme}) => theme.body};
        color: ${({theme}) => theme.text};
        text-shadow: ${({theme}) => theme.textShadow};
        transition: all .5s linear;
        height: 100vh;

    #root {
        background-image: url(${({theme}) => theme.backgroundImage});
        background-repeat: no-repeat;
        background-position: ${({theme}) => theme.backgroundPosition};
        background-size: ${({theme}) => theme.backgroundSize};
        height: 100%;
        
    }
     
    quoteContainer {
        background-color: ${({theme}) => theme.quoteContianerColor};
    }
    

    btn-primary {
        background: ${({theme}) => theme.primary};
        color: ${({theme}) => theme.text};
        transition: all .5s linear;
        padding: 0.5rem 1.5rem;
        border-radius: 1rem;
        
    }
    .btn{
        background-color: ${({theme}) => theme.btnBackground};
        text-shadow: ${({theme}) => theme.textShadow};
        border-radius: 100px;
        box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px;
        color: ${({theme}) => theme.text};
        cursor: pointer;
        display: inline-block;
        font-family: 'monfonto',sans-serif;
        padding: 7px 20px;
        text-align: center;
        text-decoration: none;
        transition: all 250ms;
        border: 0;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
      }
      
      .btn:hover {
        box-shadow: rgba(71, 226, 130, 0.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px;
        transform: scale(1.05) rotate(-1deg);
      }
`

export const lightTheme = {
    backgroundImage: vaultBoy,
    backgroundPosition: 'center',
    backgroundSize: 'auto',
    body: 'rgb(250, 243, 243)',
    text: '#000',
    primary: 'red',
    quoteContianerColor: '#f5f5f5',
    btnBackground: '#f2f2f2',
    textShadow: '3px 3px 5px #cccccc'
   
};

export const darkTheme = {
    backgroundImage: pipboy,
    backgroundSize: 'cover', 
    body: '#161515',
    text: '#12ac56',
    primary: 'blue',
    btnBackground:'#022e12',
    textShadow: '3px 3px 5px #003300'

};