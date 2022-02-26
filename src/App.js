import './App.css';
import  DateTime from './components/datetime/datetime';
import styled, { ThemeProvider } from 'styled-components';
import { Toggle } from './components/toggle/Toggle';
import {useDarkMode} from './components/styles/useDarkMode';
import { Globalstyles, lightTheme, darkTheme } from './components/styles/globalstyles';
import Tabs from './components/tabcomponents/tab';






const Container = styled.div`
        margin: 0;
        font-family: 'Monofonto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        
        
`;




  function App () {
    
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

 
 return (
      <div className='container'>
        <ThemeProvider theme={themeMode}>
          <Container className='cover'>
            <Globalstyles />
            <Toggle theme={theme} toggleTheme={toggleTheme} />
             <h1>Greetings Vault Dweller.</h1>
            <DateTime />
            <Tabs />
          </Container>
        </ThemeProvider>
      </div>
  );
}
 
export default App;


