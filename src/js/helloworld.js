import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import AjaxGet from './ajaxGet.js';
import $ from 'jquery';
import { Link } from 'react-router';



/*heand*/
class Home extends React.Component{
	render(){
		return(
			<h1>Home</h1>
		)
	}
}

class Type extends React.Component{
	render(){
		return(
			<h1>Type</h1>
		)
	}
}

class Search extends React.Component{
	render(){
		return(
			<h1>Search</h1>
		)
	}
}

class Header extends React.Component{
	render(){
		return(
			<h1>Header</h1>
		)
	}
}

class App extends React.Component{
	render(){
		return(
			<div>
			<Header/>

			{this.props.children}
			</div>	
		)
	}
}
class ComponentBos extends React.Component{
	render(){
		return(
		<Router history={history}>
	  <Route path="/" component={App}>
	  <IndexRoute component={Home} />
	     <Route path="type/:id" component={Type}/>
	     <Route path="search/:id" component={Search}/>
	 </Route>
    </Router>
		)
	}
}

/**/
class InputDom extends React.Component{
	constructor(props){
         super(props);
         this.state={value:''}

	}
	handSubmit(e){
          e.preventDefault();
          alert(this.state.value)
	}
	handAlert(e){
	   this.setState({value:e.target.value})
	}
	render(){
		return(
               <form onSubmit={e=>{this.handSubmit(e)}}>
 					<label>
                       <input type="text" value={this.state.value} onChange={e=>{this.handAlert(e)}}/>
 					</label>
                    <input type="submit"/>
               </form>
			)
	}
}
const Manp=[
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$199.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"},
  {category: "Electronics", price: "$129.99", stocked: true, name: "Nexus 7"},
  {category: "Electronics", price: "$500.99", stocked: true, name: "Nexus 8"}
];
 
/**/



class Map extends React.Component{
	constructor(...args){
		super(...args);
		this.state={
			data:[],
			
		}

        this.getAjax = this.getAjax.bind(this);
	}
   getAjax(){

         /*$.ajax({
         	type:'GET',
         	async:false,
         	dataType:'jsonp',
         	url:'http://api.hiro.net.cn/hanfeishi/top',
         	crossDomain:true,
         success(res){
         	console.log('1')
          let html=JSON.stringify(res.responseText);

         }, 
         error(){ console.log("error"); } 


         })*/
         $.get(this.props.url).then((res)=>{
         	console.log(res)
                this.setState({data:res})
         })
        
 
    }

    componentDidMount(){
           this.getAjax();
           this.ints=setInterval(this.getAjax,this.props.setTime)
    }
    componentWillUnmount(){
          clearInterval(this.ints)
    }
/*const data = [
  {Id: "Pete Hunt", name: "This is one comment"},
  {Id: "Jordan Walke", name: "This is *another* comment"}
];*/

	render(){
		const serviceShows=this.state.data.map((data,index)=>{
				return <div key={index}>{data.Name},{data.Id}</div>
		})
		
		return ( 
                <view>
                      {serviceShows}
                </view>
			)
		
	}
}
class Jt extends React.Component{
	render(){
		return (
			<views>
			<Map url='http://120.76.31.111/app/XhlGetSubjectTypeList' setTime="20000"/>
			
			
			</views>

			)
	}
}


class Lint extends React.Component{
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><Link to="/ComponentForm">About</Link></li>
          <li><Link to="/ComponentList">Repos</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default Lint

