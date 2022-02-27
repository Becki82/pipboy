import RandomQuote from './QuoteGenerator/QuoteGenerator';
import SelectMusic from './MusicPlayer/MusicApp';
import Navigation from './NavBar/NavBar';
import styled, { ThemeProvider } from 'styled-components';
import { Toggle } from './Toggle/Toggle';
import {useDarkMode} from './Styles/UseDarkMode';
import { Globalstyles, lightTheme, darkTheme } from './Styles/GlobalStyles';



const Container = styled.div`
        margin: 0;
        padding:0;
        font-family: 'Monofonto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        height: 100vh;  
`;


  function Home () {
    
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

 //make to do list and p.i.p element
 
 return (
      <div className='container'>
        <ThemeProvider theme={themeMode}>
          <Container>
            <Globalstyles />
            <Toggle theme={theme} toggleTheme={toggleTheme} />
            <Navigation />
             <h1>Greetings Vault Dweller.</h1>
            <RandomQuote />
            <SelectMusic />
          </Container>
        </ThemeProvider>
      </div>
  );
}
 
export default Home;