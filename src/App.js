import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import DenseAppBar from './components/AppBar';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <DenseAppBar />
      </ThemeProvider>
    </div>
  );
}

export default App;