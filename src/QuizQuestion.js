import React, { Component } from 'react';
import {Panel, Button, ButtonGroup} from 'react-bootstrap';
import './Loading.css';
// import errorImage from './Error.jpeg';
import './Error.css';
import './Option.css';
import Timer from './Timer.js';


class QuizQuestion extends Component{
	constructor(props){
		super(props);
		this.state = this.getInitialState();
		this.gameObj = {
			CorrectAnswer: null,
			checkAnswer: function(userAnswer){
				return (userAnswer === this.CorrectAnswer) ? 1:0;
			},
			init: function(correctAnswer){
				this.CorrectAnswer = correctAnswer;
			}
		}
	}

	getInitialState(){
		const initialState = {
			SeletcedCatorie: 'any',
			QuestionNumber: 5,
			SeletcedDifficulty: 'any',
			counterQuestion: 0,
			Question: [],
			Points: 0,
			ResponseCode: 0,
			ShowLoader: false,
			Finished: false,
		}
		return initialState;
	}
	resetState = () => {
		this.setState(this.getInitialState());
	}

	componentWillReceiveProps(nextProps){
		this.setState(this.props.passedVal);
	}
	componentDidMount(){
		this.SetNewState(this.props.passedVal);
	}

	SetNewState(props){
		this.setState({
			SeletcedCatorie: props.SeletcedCatorie,
			QuestionNumber: props.QuestionNumber,
			SeletcedDifficulty: props.SeletcedDifficulty,
		});
	}

//game function

	StartQuiz = () =>{
		this.setState({ShowLoader: true});
		this.GetQuestion();
	}
	GetQuestion(){
		let url = `https://opentdb.com/api.php?amount=${this.state.QuestionNumber}`;
		if (this.state.SeletcedCatorie !== 'any') url += `&category=${this.state.SeletcedCatorie}`;
		if (this.state.SeletcedDifficulty !== 'any') url += `&difficulty=${this.state.SeletcedDifficulty}`;
		url += `&type=multiple&encode=base64`;

		fetch(url)
			.then(resp => resp.json())
			.then(resp => {
				this.setState({
					ShowLoader: false,
					Question: resp.results,
					ResponseCode: resp.response_code
				});
			})
			.catch(error => {
				this.setState({
					ShowLoader: false,
					ResponseCode: 500
				});
			});
	}

	NextQuestion = (buttonAction) =>{
		const userAnswer = document.querySelector('input[type="radio"]:checked');
		let answerPoint;
		if (userAnswer){
			userAnswer.checked = false;
			answerPoint = this.gameObj.checkAnswer(userAnswer.value);
		}
		else{
			answerPoint = 0;
		}
		if (buttonAction === 'next'){
			this.setState({
				Points: this.state.Points + answerPoint,
				counterQuestion: this.state.counterQuestion + 1,
			});
		}
		else{
			this.setState({
				Points: this.state.Points + answerPoint,
				Finished: true,
			});
		}
	}

	informTimeEnd= ()=>{
		const buttonAction = (this.state.counterQuestion +1 >= this.state.Question.length) ? 'end':'next';
		this.NextQuestion(buttonAction);
	}

	ChangeSettings = () =>{
		this.resetState();
		this.props.handleSelect(2);
	}

	render() {
		if(this.state.ResponseCode === 500){
			return this.DisplayError();
		}
		if(this.state.ShowLoader){
			return this.Loader();
		}
		if (this.state.Finished){
			return this.FinishedQuiz(this.state.Points);
		}
		if (this.state.Question.length === 0){
			return <Button onClick={this.StartQuiz}>Play game</Button>;		
		}
		else{
			const currentQuestion = this.state.Question[this.state.counterQuestion];
			return this.DisplayGameQuestion(currentQuestion);
		}
	}

	DisplayGameQuestion(currentQuestion){
		this.gameObj.init(currentQuestion.correct_answer);

		const buttonAction = (this.state.counterQuestion +1 >= this.state.Question.length) ? 'end':'next';
		const buttonTextContetnt = (buttonAction === 'end') ? 'Finish quiz':'Next question';

		return(
			<Panel>
				<Panel.Heading>{atob(currentQuestion.question)}</Panel.Heading>
				<Panel.Body>
					<ButtonGroup>
						{
							[...currentQuestion.incorrect_answers, currentQuestion.correct_answer]
							.sort(()=>{
								return .5 - Math.random();
							})
							.map((answer, answerKey) => {
								return(
								<div className="radioButton" key={answerKey}>
									<input type="radio" name="answer" value={answer} id={answerKey} className="radio" />
									<label htmlFor={answerKey} className="radioOption">{atob(answer)}</label>
								</div>
								);
							})
						}
					</ButtonGroup>
				</Panel.Body>
				<Panel.Footer className="text-center">
						Time left: <Timer passedVal={20} informTimeEnd={this.informTimeEnd}/>
						<Button onClick={() => this.NextQuestion(buttonAction)}>{buttonTextContetnt}</Button>
				</Panel.Footer>
			</Panel>
		);
	}
	Loader(){
		return(
			<div id="loading">
				<ul className="bokeh">
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		);
	}
	DisplayError(){
		return(
		<div className="errorDiv">
			<p>Oh no! Something has gone wrong <span role="img" aria-label=":(">😟</span></p>
			<Button onClick={this.resetState}>Try again</Button>
		</div>
		);
	}

	FinishedQuiz(Points){
		return(
			<div>
				<p>Your score {Points}!</p>
				<Button onClick={this.ChangeSettings}>Change quiz settings</Button>
				<Button onClick={this.resetState}>Play again</Button>
			</div>
		);
	}
}

export default QuizQuestion;



					