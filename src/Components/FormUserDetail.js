import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { TextField } from '@material-ui/core';


 class FormUserDetail extends Component {
 continue = e => {
     e.preventDefault();
     this.props.nextStep();
 }
 
    render() {
        const {values, handleChange} = this.props;
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
      <AppBar position="static">
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
      <TextField
       label="First Name"
       margin="normal"
       borderWidth = "1"
       variant="outlined"
       defaultValue={values.firstName}
       onChange={handleChange('firstName')}
       />
       <br/>
       <TextField 
       label="LastName"
       margin="normal"
       borderWidth = "1"
       variant="outlined"
       defaultValue={values.lastName}
       onChange={handleChange('lastName')}
       />
       <br/>
       <TextField 
       className={styles.text}
       label="Email"
       type="email"
       margin="normal"
       width="auto"
       borderWidth = "1"
       variant="outlined"
       defaultValue={values.firstName}
       onChange={handleChange('email')}
       />
       <br/>
       <Button variant="contained" onClick={this.continue} width="200px"  size="medium" color="primary" className={styles.btn}>
        Continue
      </Button>
    </div>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default FormUserDetail;