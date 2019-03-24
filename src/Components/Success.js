import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

 class Success extends Component {
 continue = e => {
     e.preventDefault();
     this.props.nextStep();
 };
 back = e => {
    e.preventDefault();
    this.props.preStep();
};
 
    render() {
        const styles = {
            root: {
              flexGrow: 1,
            },
            grow: {
              flexGrow: 1,
            },
            menuButton: {
              marginLeft: -12,
              marginRight: 20,
            },
        btn:{
          margin: 15,
        },
        text:{
          width:'auto',
          fontSize: 11,
        }
          };
          
        return (
      <MuiThemeProvider>
        <React.Fragment>
        <div className={styles.root}>
      <AppBar title="Success" position="static">
        <Toolbar>
          <IconButton className={styles.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={styles.grow}>
            Sheikh
          </Typography>
          <Button  color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
       <br/>
       <h1>Thanks For the Form Submission</h1>
       <h3>You will be recieve an email for further details.</h3>
       </div>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default Success;