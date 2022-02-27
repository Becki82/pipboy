import  DateTime from './Components/DateTime/DateTime';
import styled, { ThemeProvider } from 'styled-components';
import { Toggle } from './Components/Toggle/Toggle';
import {useDarkMode} from './Components/Styles/UseDarkMode';
import { Globalstyles, lightTheme, darkTheme } from './Components/Styles/GlobalStyles';
import Tabs from './Components/TabComponents/Tab';



const Container = styled.div`
        margin: 0;
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


