import React, { Component } from 'react';

export class Timer extends Component{
	constructor(props){
		super(props)
		this.state = {
			timeLeft: 100,
		}
	}
	componentWillReceiveProps(nextProps){
		clearInterval(this.state.TickTock);
		this.setState({timeLeft: this.props.passedVal}, function(){
			this.TickTock();
		});
	}

	TickTock(){
		const self = this;
		let TickTock = setInterval(function(){
			self.setState({timeLeft: self.state.timeLeft-1}, ()=>{
				if (self.state.timeLeft <= 0) self.TimerEnd();
			});
		},1000);
		this.setState({TickTock});
	}

	TimerEnd(){
		clearInterval(this.state.TickTock);
		this.props.informTimeEnd();
	}

	componentDidMount(props){
		this.setState({timeLeft: this.props.passedVal},()=>{
			this.TickTock();
		})	
	}
	componentWillUnmount(){
		clearInterval(this.state.TickTock);
	}

	render() {
		return (
			this.state.timeLeft
		);
	}
}

export default Timer;