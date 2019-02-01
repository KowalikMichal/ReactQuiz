import React, { Component } from 'react';
import PropTypes from "prop-types";
import SelectionControl from '../../Components/SelectionControls';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import withLoader from '../../Components/Loader'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  space: {
    marginTop: '1rem'
  },
  textCenter: {
    textAlign: 'center'
  },
});

class Settings extends Component {
  state = {
    counter: 0,
    points: 0,
  };

  shuffleQuestion = (data) => {
    if (data == null) return null;
    const { incorrect_answers, correct_answer, question, } = data;
    const { counter, points } = this.state;
    if (counter === points && counter !== 0) return '';
    const answers = [...incorrect_answers, correct_answer]
      .sort(() => {
        return .5 - Math.random();
      });

    return { question, answers, correct_answer }
  }

  handleNext = (point) => {
    let { points, counter } = this.state;
    this.setState({ points: points + point, counter: counter + 1 });
  }

  renderQuesion = () => {
    const { counter } = this.state;
    const { data } = this.props;
    const selectionData = this.shuffleQuestion(data[counter]);

    return <SelectionControl data={selectionData} next={this.handleNext} />;
  }

  playAgain = () => {
    this.props.handleSelect('settings');
  }

  renderPoints = () => {
    const { points } = this.state;

    return (
      <>
        <Typography variant="h4">Your score</Typography>
        <div>{points}</div>
        <Button variant="contained" color="primary" onClick={() => this.playAgain()}>Play again</Button>
      </>
    )
  }

  render() {
    const { counter } = this.state;
    const { classes, data } = this.props;
    const render = (data[counter] === undefined);

    return (
      <div className={classes.textCenter} >
        <div>{render ? this.renderPoints() : this.renderQuesion()}</div>
      </div>
    );
  }
}

Settings.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withLoader(withStyles(styles)(Settings));
