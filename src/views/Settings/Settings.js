import React, { Component } from 'react';
import API from '../../API/API';
import PropTypes from "prop-types";
import SnackBar from '../../Components/Snackbar';

import categoriesTypes from './caterogies';
import difficultyTypes from './difficulty';

import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Buttons from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';
import withLoader from '../../Components/Loader'

const Button = withLoader(Buttons)
const styles = theme => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  space: {
    marginTop: '1rem'
  },
  welcomeText: {
    fontFamily: 'Pacifico',
    textAlign: 'center'
  }
});

class Settings extends Component {
  state = {
    questionNumber: '',
    category: '',
    difficulty: '',
    loading: false,
    error: false
  };

  handleQuestionNumber = (e) => {
    this.setState({ questionNumber: e.target.value });
  };
  handleChangeCategorie = (e) => {
    this.setState({ category: e.target.value });
  };
  handleDifficulty = (e) => {
    this.setState({ difficulty: e.target.value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const { handleQuestion } = this.props;
    this.setState({ loading: true });
    const data = await new API.getData(this.state);

    if (data.length) {
      this.setState({ loading: false, error: false });
      handleQuestion(data);
    }
    else {
      this.setState({ error: true, loading: false });
    }
  };


  render() {
    const { classes } = this.props;
    const { questionNumber, category, difficulty, loading, error } = this.state;

    return (
      <>
        <SnackBar
          open={error}
          variant="error"
          message='Error while fetch data 😪'
        />

        <Typography variant="h4" className={classes.welcomeText}>Quiz settings</Typography>
        <div className={classes.space} />
        <form onSubmit={this.handleSubmit} className={classes.form}>
          <FormControl className={classes.formControl} fullWidth={true}>
            <InputLabel htmlFor="questionNumber" className={classes.welcomeText}>Select number of quiz question</InputLabel>
            <Select
              value={questionNumber}
              onChange={this.handleQuestionNumber}
              inputProps={{
                name: 'number',
                id: 'questionNumber',
              }}
            >
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </Select>
          </FormControl>
          <div className={classes.space} />
          <FormControl className={classes.formControl} fullWidth={true}>
            <InputLabel htmlFor="category" className={classes.welcomeText}>Select category</InputLabel>
            <Select
              value={category}
              onChange={this.handleChangeCategorie}
              inputProps={{
                name: 'number',
                id: 'category',
              }}
            >
              {
                categoriesTypes.map((element, index) => (
                  <MenuItem key={index} value={element.value}>{element.text}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
          <div className={classes.space} />
          <FormControl className={classes.formControl} fullWidth={true}>
            <InputLabel htmlFor="category" className={classes.welcomeText}>Select Difficulty</InputLabel>
            <Select
              value={difficulty}
              onChange={this.handleDifficulty}
              inputProps={{
                name: 'number',
                id: 'category',
              }}
            >
              {
                difficultyTypes.map((element, index) => (
                  <MenuItem key={index} value={element.value}>{element.text}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
          <div className={classes.space} />
          <Button
            loading={loading}
            disabled={loading}
            className={classes.button} variant="contained" color="primary" type="submit">Let's play</Button>
        </form>
      </>
    );
  }
}

Settings.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withLoader(withStyles(styles)(Settings));
