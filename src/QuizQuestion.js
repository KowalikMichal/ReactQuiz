import React, { Component } from 'react';
import {Panel, Radio, Button, ButtonGroup} from 'react-bootstrap';

class QuizQuestion extends Component{
	constructor(props){
		super(props);
		this.state = this.getInitialState();
	}
	getInitialState(){
		console.log('getInitialState()')
		const initialState = {
			SeletcedCatorie: 'any',
			QuestionNumber: 5,
			SeletcedDifficulty: 'any',
			Working: true,
			Question: [],
			counterQuestion: 0,
			Points: [],
		}
		return initialState;
	}
	resetState = () => {
		this.setState(this.getInitialState());
	}
	componentWillReceiveProps(nextProps){
		this.setState(this.props.passedVal)

	}
	componentDidMount(){
		this.SetNewState(this.props);
	}
	shouldComponentUpdate(nextProps, nextState){
		return !this.state.Working || !this.getInitialState().SeletcedCatorie === nextState.SeletcedCatorie;
	}
	componentDidUpdate(prevProps, prevState) {
	}

	SetNewState(props){
		this.setState({SeletcedCatorie: props.SeletcedCatorie});
		this.setState({QuestionNumber: props.QuestionNumber});
		this.setState({SeletcedDifficulty: props.SeletcedDifficulty});
	}

	GetQuestion = () => {
		let link = `https://opentdb.com/api.php?amount=${this.state.QuestionNumber}`;
		if (this.state.SeletcedCatorie !== 'any') link += `&category=${this.state.SeletcedCatorie}`;
		if (this.state.SeletcedDifficulty !== 'any') link += `&difficulty=${this.state.SeletcedDifficulty}`;
		link += `&type=multiple&encode=base64`;

		fetch(link)
			.then(resp => resp.json())
			.then(resp => {
				this.setState({Working: false});
				console.log(resp.results);
				this.setState({Question: resp.results});
			});
	}
	changeCounterQuestion = () => {
		const maxCounter = this.state.Question.length -1;
		const currentCounter = this.state.counterQuestion;
		if (maxCounter > currentCounter) this.setState({counterQuestion: currentCounter+1});
	}
	CheckAnswer = (event, correct) => {
		const answer = event.target.value;
		event.target.checked = false;
		const addPoint = (correct === answer) ? 1:0;
		this.setState({Points: [...this.state.Points, addPoint]}, ()=>{
			this.changeCounterQuestion();
		});
	}
	FinishQuiz = () =>{
		console.log('FinishQuiz...')
	}
	ChangeSettings = () =>{
		this.resetState();
		this.props.handleSelect(2);
	}

	render() {
		if(this.state.Working === true) 
			return <Button onClick={this.GetQuestion}>Let's start</Button>
		const currentQuestion = this.state.Question[this.state.counterQuestion];
		const button = (this.state.Points.length+1 >= this.state.Question.length) ? <Button onClick={this.FinishQuiz}>End Quiz</Button>:<Button onClick={this.changeCounterQuestion}>Next question</Button>;

		if (this.state.Points.length === this.state.Question.length){
			const Points = this.state.Points.reduce((p,n)=>{
				return p+n;
			});
			return(
				<div>
					<p>Your score {Points}!</p>
					<Button onClick={this.ChangeSettings}>Change quiz settings</Button>
					<Button onClick={this.resetState}>Play again</Button>
				</div>
			);
		}
		return (
			<Panel>
				<Panel.Heading>{atob(currentQuestion.question)}</Panel.Heading>
				<Panel.Body>
					<ButtonGroup onChange={(event) => this.CheckAnswer(event,currentQuestion.correct_answer)}>
						{
							[...currentQuestion.incorrect_answers, currentQuestion.correct_answer]
							.sort(()=>{
								return .5 - Math.random();
							})
							.map((answer, answerKey) => {
								return <Radio name="answer" key={answerKey} value={answer}>{atob(answer)}</Radio>
							})
						}
					</ButtonGroup>
				</Panel.Body>
				<Panel.Footer>
					{button}
				</Panel.Footer>
			</Panel>
		);
	}
}

export default QuizQuestion;