import React,{Component} from 'react';  
import ReactDOM from 'react-dom'; 
import Map from './helloworld';


class HelloMess extends React.Component{
	render(){
		return <div>
		 Hello {this.props.name}
		</div>
	}
}
 
/*时间*/
class Tick extends React.Component{
	constructor(props){
		super(props);
		this.state = {sent:new Date().toLocaleTimeString()}
	}
	tick(){
		this.setState(()=>({
		sent:new Date().toLocaleTimeString()
		}));
	}
  componentDidMount(){
  	this.intime = setInterval(() => this.tick(),1000);
  } 
  componentWillUnmount(){
  	cleatInterval(this.intime);
	}

	render(){
		return(
				<div>
		<h2>time:{this.state.sent}</h2>
		</div>
		)
	}
	
}
/*时间*/
class Time extends React.Component{
	constructor(props){
		super(props);
		this.state = {secondsElapsed:0};
	}
	tick(){
		this.setState((prevState)=>({
			secondsElapsed:prevState.secondsElapsed+1
		}));
	}
	
	componentDidMount(){
		this.interval = setInterval(()=>this.tick(),1000);
	
	}
	componentWillUnmount(){
  	cleatInterval(this.interval);
	}
	render(){
		return(
			<div>
			 Time:{this.state.secondsElapsed}
			</div>
		)
	}
}
/*判断*/
class Judge extends React.Component{
	constructor(props){
		super(props);
		this.state = {IsOn:true};
	  this.handChick = this.handChick.bind(this);//这个绑定是必要的，使‘this’在回调中起作用
	}
	handChick(){
		this.setState(prevent=>({
			IsOn:!prevent.IsOn
		}))
	}
	render(){
		return(
			<button onClick={(e)=>this.handChick(e)}>
        {this.state.IsOn ? 'ON' : 'OFF'}
      </button>
		)
	}
}
/*if*/
function Mailbox(props) {

  const dad = props.dad;
  return (
    <div>
      <h1>Hello!</h1>
          You have {dad} unread messages.
    </div>
  );
}
const messages = ['React', 'Re: React', 'Re:Re: React'];
const list =messages.map((mess,index)=>
	<div key={'mess'+index}>{mess}</div>
)
/*表单*/
class Form extends React.Component{
	constructor(props){
		super(props);
		this.state = {value:''};
	this.handSubmit = this.handSubmit.bind(this);
	this.handChange = this.handChange.bind(this);
	}
	handSubmit(event){
		alert(this.state.value);
		event.preventDefault();
	}
	handChange(event){
		this.setState({value:event.target.value});
	}
	render(){
		return(
			<form onSubmit={this.handSubmit}>
			<label>
			<input type="text" value={this.state.value} onChange={this.handChange}/>
			</label>
			<input type='submit' value="submit"/>
			</form>
		)
	}
}
/*多个元素*/
class Infrom extends React.Component{
	constructor(props){
		super(props);
		this.state={
			isGoing:true,
			megss:'1'
		}
		this.handbox = this.handbox.bind(this);
	}
	handbox(event){
		event.preventDefault();
		const target = event.target;
		const name = target.name;
		const value = target.type ==='checkbox'? target.checked : target.value;
		this.setState({
			[name] : value
		})
	}
	render(){
		return(
			<form >
			<label>
			<input  name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handbox}/>
			</label>
			<label>
			<input type="text" name="megss" value={this.state.megss} onChange={this.handbox}/>
			</label>
			<input type='submit' value="submit"/>
			</form>
		)
	}
}

/*ReactDOM.render(
	
	<div>
    <Map />
	{{<Mailbox dad={list}/>
	<Tick/>
	<HelloMess/>
	<Time/>
	<Judge/>
	<Form/>
	<Infrom/>}}
  </div>,document.getElementById('root'))*/
