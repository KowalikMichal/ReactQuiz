import React, { Component } from 'react';
import './App.css';
import {Navbar, Grid, Row, Tabs, Tab, Button} from 'react-bootstrap';
import QuizQuestion from './QuizQuestion.js';

class App extends Component {
	  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      key: 1,
      SeletcedCatorie: 'any',
      QuestionNumber: 5,
      SeletcedDifficulty: 'any',
    };
  }
	 handleSelect(key) {
    console.log(`selected ${key}`);
    this.setState({ key });
  }
  SeletcedCatorie = (event) => {
  	this.setState({ SeletcedCatorie: event.target.value});
  }
  QuestionNumber = (event) => {
  	console.log(event.target.value)
  	this.setState({ QuestionNumber: event.target.value});
  }
  SeletcedDifficulty = (event) => {
  	console.log(event.target.value)
  	this.setState({ SeletcedDifficulty: event.target.value});
  }
  showValue = () => {
  	console.log(this.state);
  }

	render() {
		return (
			<div>
			<Navbar>
			<p className="navbar-text">Quiz home page</p>
			</Navbar>
			<Grid >
				<Row className="wrapper">
					<Tabs defaultActiveKey={1} id="GamesTab">
						<Tab eventKey={1} title="🏠">
							<h1 className="text-center wellcone-text">Wellcome in quiz</h1>
							<p>Quiz questions comes from <a href="https://opentdb.com">Open Trivia DB</a></p>
							<p>To start click below button</p>
						</Tab>
						<Tab eventKey={2} title="⚙️">
						<div className="form-group">
							<p className="text-center info-text">Select number of quiz question</p>
							<select className="form-control" defaultValue="5" onChange={this.QuestionNumber} required>
								<option value="5">5</option>
								<option value="10">10</option>
								<option value="15">15</option>
								<option value="20">20</option>
								<option value="25">25</option>
								<option value="30">30</option>
							</select>
						</div>
						<div className="form-group">
							<p className="text-center info-text">Select category</p>
							<select className="form-control" defaultValue="any" onChange={this.SeletcedCatorie} required>
								<option value="any">Any Category</option>
								<option value="9">General Knowledge</option>
								<option value="10">Entertainment: Books</option>
								<option value="11">Entertainment: Film</option>
								<option value="12">Entertainment: Music</option>
								<option value="13">Entertainment: Musicals &amp; Theatres</option>
								<option value="14">Entertainment: Television</option>
								<option value="15">Entertainment: Video Games</option>
								<option value="16">Entertainment: Board Games</option>
								<option value="17">Science &amp; Nature</option>
								<option value="18">Science: Computers</option>
								<option value="19">Science: Mathematics</option>
								<option value="20">Mythology</option>
								<option value="21">Sports</option>
								<option value="22">Geography</option>
								<option value="23">History</option>
								<option value="24">Politics</option>
								<option value="25">Art</option>
								<option value="26">Celebrities</option>
								<option value="27">Animals</option>
								<option value="28">Vehicles</option>
								<option value="29">Entertainment: Comics</option>
								<option value="30">Science: Gadgets</option>
								<option value="31">Entertainment: Japanese Anime &amp; Manga</option>
								<option value="32">Entertainment: Cartoon &amp; Animations</option>
							</select>
						</div>
						<div className="form-group">
							<p className="text-center info-text">Select Difficulty</p>
							<select className="form-control" defaultValue="any" onChange={this.SeletcedDifficulty}>
								<option value="any">Any Difficulty</option>
								<option value="easy">Easy</option>
								<option value="medium">Medium</option>
								<option value="hard">Hard</option>
							</select>
						</div>
						<Button bsStyle="success" onClick={this.showValue}>Let's play</Button>
						</Tab>
						<Tab eventKey={3} title="🕹️">
							<QuizQuestion passedVal={this.state}/>
						</Tab>
					</Tabs>
				</Row>
			</Grid>
			</div>
		);
	}
}

export default App;