import React, { Component } from 'react';

//material-ui components
import BottomNavigation from './Components/BottomNavigation';
import Paper from '@material-ui/core/Paper';

//game components
import HomeTab from './views/Home/Home';
import Settings from './views/Settings/Settings'
import Game from './views/Game/Game'

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2,
    minHeight: '60vh'
  },
  space: {
    marginTop: '5rem'
  }
});

class App extends Component {
  state = {
    activeTab: 'home',
    quizData: [],
  }

  handleSelect = (key) => {
    this.setState({ activeTab: key })
  };

  handleQuestion = (data) => {
    this.setState({ quizData: data, activeTab: 'game' });
  }

  render() {
    const { classes } = this.props;
    const { activeTab, quizData } = this.state;

    return (
      <>
        <BottomNavigation
          changeTab={activeTab}
          handleSelect={this.handleSelect} />
        <div className={classes.space} />
        <Paper className={classes.root} >
          {{
            home: <HomeTab handleSelect={this.handleSelect} />,
            settings: <Settings handleQuestion={this.handleQuestion} />,
            game: <Game data={quizData} handleSelect={this.handleSelect} />
          }[activeTab]}
        </Paper>
      </>
    );
  }
}

export default withStyles(styles)(App);
