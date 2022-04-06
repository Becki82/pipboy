import { createGlobalStyle } from "styled-components";
import pipboy from '../../Assets/Pipbackround.png';
import vaultBoy from '../../Assets/Vault_Boy.png';

//look at Oveerseer fonts and use in styled components

export const Globalstyles = createGlobalStyle `

    body {
        margin: 0;
        padding: 0:
        background: ${({theme}) => theme.body};
        color: ${({theme}) => theme.text};
        text-shadow: ${({theme}) => theme.textShadow};
        transition: all .5s linear;
        height: 100vh;
        text-align: center;
        font-size: 0.7rem;

        @media (min-width: 600px){
          font-size: 1.2rem;
        }
      
    }

    h1, p {
      margin: 0;
    }

    

    #root {
        background-image: url(${({theme}) => theme.backgroundImage});
        background-repeat: no-repeat;
        background-position: ${({theme}) => theme.backgroundPosition};
        background-size: ${({theme}) => theme.backgroundSize};
        height: 100%;
        font-family: 'Share Tech Mono', monospace;
                                                
                
    }
      
    .inputStyle {
        text-indent: 20px;
        background-color: ${({theme}) => theme.inputBackground};
        border-radius: 5px;
        width: 50%;
        margin: 2px;
        padding: 2px;
        color: ${({theme}) => theme.formColor};
      }
      
      .inputStyle:focus {
        background-color: ${({theme}) => theme.formInputBackground};
      }

      .icon {
        padding: 5px;
        vertical-align: middle;
        position: absolute;
        color: ${({theme}) => theme.iconColor};
      }

    .btn{
      margin: 2px;
        background-color: ${({theme}) => theme.btnBackground};
        text-shadow: ${({theme}) => theme.textShadow};
        border-radius: 100px;
        box-shadow: ${({theme})=> theme.btnBoxShadow};
        color: ${({theme}) => theme.text};
        cursor: pointer;
        display: inline-block;
        font-family: 'monfonto',sans-serif;
        padding: 7px 20px;
        text-align: center;
        text-decoration: none;
        transition: all 250ms;
        border: 1px solid;
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
    backgroundPosition: 'left center',
    backgroundSize: 'auto',
    body: 'rgb(250, 243, 243)',
    text: '#000',
    quoteContianerColor: '#f5f5f5',
    btnBackground: '#f2f2f2',
    textShadow: '.5px .5px #262626',
    formInputBackground: '#cccccc',
    tabBackground: '#f2f2f2',
    activeTabBackground: '#737373',
    hoverColor: '#cccccc',
    formColor: '#1a1a1a',
    inputBackground: '#f2f2f2',
    iconColor: '#262626',
    btnBoxShadow: '0 3px 3px 3px rgba(0, 0, 0, 0.2)',
    playerBackground: '#ccffdd',

   
};

export const darkTheme = {
    backgroundImage: pipboy,
    backgroundSize: 'cover', 
    body: '#161515',
    text: '#12ac56',
    btnBackground:'#022e12',
    textShadow: '3px 3px 5px #003300',
    formInputBackground: 'rgba(42, 48, 42, 0.54)',
    tabBackground: 'rgba(0, 0, 0, 0.54)',
    activeTabBackground: '#001a09',
    hoverColor: 'rgba(50, 224, 196, 0.15)',
    formColor:'#12ac56',
    inputBackground: 'rgba(3, 179, 3, 0.43)',
    iconColor: '#12ac56',
    btnBoxShadow: 'rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px',
    playerBackground: 'rgba(6, 98, 6, 0.35)',
   
};