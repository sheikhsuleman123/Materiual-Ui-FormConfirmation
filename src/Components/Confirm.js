import React, { Component } from 'react'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

 class FormUserDetail extends Component {
 continue = e => {
     e.preventDefault();
     this.props.nextStep();
 };
 back = e => {
    e.preventDefault();
    this.props.preStep();
};
 
    render() {
        const {values:{firstName,lastName,email,occupation,city,bio}} = this.props;
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
      <AppBar title="Confirm" position="static">
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
      <List>

           <ListItem >
          <ListItemText primary="Your First name is" secondary={firstName} />
        </ListItem>
        <ListItem >
          <ListItemText primary="Your Last name is" secondary={lastName} />
        </ListItem>
        <ListItem >
          <ListItemText primary="Your Email is" secondary={email} />
        </ListItem>
        <ListItem >
          <ListItemText primary="Your Occupasion is" secondary={occupation} />
        </ListItem>
        <ListItem >
          <ListItemText primary="Your City is" secondary={city} />
        </ListItem>
        <ListItem >
          <ListItemText primary="Your Bio is" secondary={bio} />
        </ListItem>
      
      
      </List>
       <Button variant="contained" onClick={this.continue} width="200px"  size="medium" color="primary" className={styles.btn}>
        Continue
      </Button>
      <Button variant="contained" onClick={this.back}   size="medium"  className={styles.btn2}>
        Back
      </Button>
    </div>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default FormUserDetail;