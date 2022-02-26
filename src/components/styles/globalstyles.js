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
    .Tabs {
        width: 30%;
        height: auto;
        min-height: 50%;
        background: ${({theme}) => theme.tabBackground};
        margin: 3.5rem auto 1.5rem;
        padding: 2rem 1rem;
        color: ${({theme}) => theme.formColor};
        border-radius: 2rem;
        border: 2px solid #0d0d0d;
        @media (max-width: 769px) {
          padding: 2rem 0;
        }
      }
      
      /* Tab Navigation */
      ul.nav {
        width: 60%;
        margin: 0 auto 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid #003300;
        border-radius: 2rem;
        padding-left: 0px;
        @media (max-width: 768px) {
          width: 90%;
        }
      }
      ul.nav li {
        width: 50%;
        padding: 1rem;
        list-style: none;
        text-align: center;
        cursor: pointer;
        transition: all 0.7s;
        border-bottom-left-radius: 2rem;
        border-top-left-radius: 2rem;
      }
      ul.nav li:nth-child(2) {
        border-radius: 0;
        border-bottom-right-radius: 2rem;
        border-top-right-radius: 2rem;
      }
      ul.nav li:hover {
        background: ${({theme}) => theme.hoverColor};
      }
      ul.nav li.active {
        background: ${({theme}) => theme.activeTabBackground};
      }
      
       
    .input1 {
        text-indent: 20px;
        background-color: ${({theme}) => theme.inputBackground};
        border-radius: 5px;
        width: 50%;
        margin: 2px;
        padding: 2px;
        color: ${({theme}) => theme.formColor};
      }
      
      .input1:focus {
        background-color: ${({theme}) => theme.formInputBackground};
      }

      .icon {
        padding: 5px;
        vertical-align: middle;
        position: absolute;
        color: ${({theme}) => theme.iconColor};
      }

    btn-primary {
        background: ${({theme}) => theme.primary};
        color: ${({theme}) => theme.text};
        transition: all .5s linear;
        padding: 0.5rem 1.5rem;
        border-radius: 1rem;
        
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

  .playerContainer {
    background-color: ${({theme})=> theme.playerBackground};
      display: flex;
      flex-direction: column-reverse;
      border: 2px solid black;
      border-style: inset;
      border-radius: 40px;
      padding: 2px;
      justify-content: center;
      margin: 2px;
    }
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