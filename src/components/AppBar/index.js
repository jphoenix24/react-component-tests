import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <Grid 
          container
          justify="center"
          alignItems="center"
          spacing={6}
          >
            <Grid item>
              <Button variant="contained" color="primary">
                Press Start
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" className={classes.buttonStyleTwo}>
                Player 1
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">
                Player 2
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    buttonStyleTwo: {
        backgroundColor: "#aaaaaa"
    }
  }));