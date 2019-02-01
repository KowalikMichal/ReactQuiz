import React from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	root: {
		display: 'flex',
	},
	formControl: {
		margin: theme.spacing.unit * 3,
	},
	group: {
		margin: `${theme.spacing.unit}px 0`,
	},
});

class RadioButtonsGroup extends React.Component {
	state = {
		value: '',
		data: {},
	};

	handleChange = event => {
		event.preventDefault();
		this.setState({ value: event.target.value });
	};

	handleAnswer = () => {
		const { value } = this.state;
		const { next, data } = this.props;

		next(value === data.correct_answer);
	}

	render() {
		const { classes, data } = this.props;
		const { question, answers} = data;
		if (question == null) return '';

		return (
			<div className={classes.root}>
				<FormControl component="fieldset" className={classes.formControl}>
					<FormLabel component="legend">{question}</FormLabel>

					<RadioGroup
						aria-label="question"
						name="question"
						className={classes.group}
						value={this.state.value}
						onChange={this.handleChange}
					>
						{
							answers.map((answer, key) => (
								<FormControlLabel key={key} value={answer} control={<Radio />} label={answer} />
							))
						}

					</RadioGroup>
					<Button variant="contained" color="primary" onClick={() => this.handleAnswer()}> Next </Button>
				</FormControl>

			</div>
		);
	}
}

RadioButtonsGroup.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtonsGroup);