import React, { Component } from 'react';
import {Panel, Radio, Button} from 'react-bootstrap';

class QuizQuestion extends Component{
	constructor(props){
		super(props);
		this.state = {
			SeletcedCatorie: '',
			QuestionNumber: 0,
			SeletcedDifficulty: '',
			Working: true,
			Question: [],
			counterQuestion: 0,
			Points: [],
		}
	}
	componentWillReceiveProps(nextProps){
		this.SetNewState(nextProps);
	}
	componentDidMount(){
		this.SetNewState(this.props);
	}

	shouldComponentUpdate(nextProps, nextState){
		// console.log('shouldComponentUpdate()');
		return !this.state.Working;
	}

	 componentDidUpdate(prevProps, prevState) {
	 	console.log('componentDidUpdate()')
	 }

	SetNewState(props){
		this.setState({SeletcedCatorie: props.SeletcedCatorie});
		this.setState({QuestionNumber: props.QuestionNumber});
		this.setState({SeletcedDifficulty: props.SeletcedDifficulty});
	}

	GetQuestion = () => {
		console.log('GetQuestion...');
		const link = "https://opentdb.com/api.php?amount=2&category=10&difficulty=easy&type=multiple";
		fetch(link)
			.then(resp => resp.json())
			.then(resp => {
				this.setState({Working: false});
				this.setState({Question: resp.results});
			});

	}
	changeCounterQuestion = () => {
		console.log('changeCounterQuestion()')
		const maxCounter = this.state.Question.length -1;
		const currentCounter = this.state.counterQuestion;
		if (maxCounter > currentCounter) this.setState({counterQuestion: currentCounter+1});
	}
	CheckAnswer = (event, correct) => {
		const answer = event.target.value;
		const addPoint = (correct === answer) ? 1:0;
		this.setState({Points: [...this.state.Points, addPoint]}, ()=>{
			this.changeCounterQuestion();
		});
	}
	FinishQuiz = () =>{
		console.log('FinishQuiz...')
	}

	render() {
		console.log('render()')
		if(this.state.Working === true){
			return <Button onClick={this.GetQuestion()}>Let's start</Button>
		}
		const currentCounter = this.state.counterQuestion;
		const currentQuestion = this.state.Question[this.state.counterQuestion];
		const button = (this.state.Points.length+1 >= this.state.Question.length) ? <Button onClick={this.FinishQuiz}>End Quiz</Button>:<Button onClick={this.changeCounterQuestion}>Next question</Button>
		if (this.state.Points.length === this.state.Question.length){
			const Points = this.state.Points.reduce((p,n)=>{
				return p+n;
			});
			return `You scored ${Points}!`
		}
		return (
			<Panel>
				<Panel.Heading>{currentQuestion.question}</Panel.Heading>
				<Panel.Body onChange={(event) => this.CheckAnswer(event,currentQuestion.correct_answer)}>
					{
						[...currentQuestion.incorrect_answers, currentQuestion.correct_answer]
						.sort(()=>{
							return .5 - Math.random();
						})
						.map((answer, answerKey) => {
							return <Radio name="answer" key={answerKey} value={answer}>{answer}</Radio>
						})
					}
				</Panel.Body>
				<Panel.Footer>
					{button}
				</Panel.Footer>
			</Panel>
		);
	}
}

export default QuizQuestion;