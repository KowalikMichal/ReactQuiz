import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Home from '@material-ui/icons/Home';
import Settings from '@material-ui/icons/Settings';
import Games from '@material-ui/icons/Games';

const styles = {
  root: {
    margin: 0,
    padding: 0,
    width: '100%',
    position: 'fixed',
    top: 0
  }
};

class SimpleBottomNavigation extends React.Component {

  handleChange = (event, value) => {
    this.setState({ value }, () => {
      const { value } = this.state;
      const { handleSelect } = this.props;
      handleSelect(value); //inform parent about active tab
    });
  };

  render() {
    const { classes, changeTab } = this.props;

    return (
      <BottomNavigation value={changeTab} onChange={this.handleChange} showLabels className={classes.root}>
        <BottomNavigationAction disabled value='home' label="Home" icon={<Home />} />
        <BottomNavigationAction disabled value='settings' label="Settings" icon={<Settings />} />
        <BottomNavigationAction disabled value='game' label="Game" icon={<Games />} />
      </BottomNavigation>);
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleBottomNavigation);
