import '../App.css'
import RandomQuote from './quotegenerator/quotegenerator';
import SelectMusic from './musicplayer/musicapp';
import Navigation from './nav bar/navbar';
import styled, { ThemeProvider } from 'styled-components';
import { Toggle } from './toggle/Toggle';
import {useDarkMode} from './styles/useDarkMode';
import { Globalstyles, lightTheme, darkTheme } from './styles/globalstyles';


const Container = styled.div`
        margin: 0;
        font-family: 'Monofonto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        
        
`;




  function Home () {
    
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

 //make to do list and p.i.p element
 return (
      <div className='container'>
        <ThemeProvider theme={themeMode}>
          <Container className='cover'>
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