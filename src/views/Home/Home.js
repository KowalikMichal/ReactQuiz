import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const styles = {
  textCenter: {
    textAlign: 'center',
  },
  welcomeText:{
    fontFamily: 'Pacifico'
  }
};

function Welcome(props) {
  const {classes, handleSelect} = props;

  return(
    <div className={classes.textCenter}>
      <Typography variant="h4" className={classes.welcomeText}>Wellcome in quiz</Typography>
    	<p>Quiz questions comes from <a href="https://opentdb.com">Open Trivia DB</a></p>
    	<p>To start click below button <span role="img" aria-label=" ">👇</span></p>
    	<Button variant="contained" color="primary" onClick={()=>{handleSelect('settings')}}>Game settings</Button>
    </div>
  )
}

export default withStyles(styles)(Welcome);
