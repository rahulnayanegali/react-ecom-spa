import React from 'react';
import './App.css';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
//Components
import Navbar from './components/Navbar';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
      contrastText: '#000000',
    },
    secondary: {
      main: '#FFFF',
      mainGradient: 'linear-gradient(90.06deg, #181716 0%, #ED4E08 99.97%)',

      contrastText: '#FFFFFF',
    },
    textSecondary: {
      main: '#657786',
    },
  },
});
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className='app'>
        <Navbar />
        <div className='container'>Hello MUI</div>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
