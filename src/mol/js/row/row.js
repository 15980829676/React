import React from 'react'
import $ from 'jquery'

export default class Row extends React.Component{

	constructor(...args){
		super(...args);
		this.state={
			data:[],
			cla : ''
		

		}
		this.getAjax = this.getAjax.bind(this);
		this.handClick = this.handClick.bind(this);
	
	}
	getAjax(){
		$.get(this.props.url).then((res)=>{
			this.setState({
				data:res,
			})
		},()=>{
			console.log('2')
		})
      

	}

	

	handClick(e){
           let chia = e.currentTarget;
           let id =chia.id;
           this.setState({
           	 cla:id
           })     
	}
    componentDidMount(){
           this.getAjax();    
    }
    componentWillUnmount(){
    	clearInterval(this.ints)
    }
	render(){
       
		return(
		<div className="wcw_hon padding_bottom20 mar wow_ba">
	    <div className="wuzhi_lp">
		<ul>
		{
			this.state.data.map((data,index)=>{
				return <div key={index} className={index%2? 'sever' : ""}><li id={index} className={index == this.state.cla ? 'back2' : ''} onClick={this.handClick}>
				<div className={index == this.state.cla ? 'wuzhi_tu sever':'wuzhi_tu'}><img src="images/w_kai_12.png"/></div>
				<div className="wuzhi_shi " >{data.Name}</div>
				<div className={index == this.state.cla ? 'wuzhi_bao sever':'wuzhi_bao'}>
				<span className="wuzhi_jing">保证金</span>
				<div className="doule_bao ">
				<span className={index == this.state.cla ? 'doule sever': 'doule'}></span>
				<h3>{data.Id}</h3>
				</div></div>
				</li>
				</div>

			})
		}
		     {/*<li className="back2"><div className="wuzhi_tu sever"><img src="images/w_kai_12.png"/></div><div className="wuzhi_shi sever">示 范 店</div><div className="wuzhi_bao sever"><span className="wuzhi_jing">保证金</span><div className="doule_bao "><span className="doule sever"></span><h3>500</h3></div></div></li>
		 <li className="sever"><div className="wuzhi_tu "><img src="images/w_kai_12.png"/></div><div className="wuzhi_shi">示 范 店</div><div className="wuzhi_bao"><span className="wuzhi_jing">保证金</span><div className="doule_bao"><span className="doule"></span><h3>1500</h3></div></div></li>
		    <li className=""><div className="wuzhi_tu "><img src="images/w_kai_12.png"/></div><div className="wuzhi_shi">示 范 店</div><div className="wuzhi_bao"><span className="wuzhi_jing">保证金</span><div className="doule_bao"><span className="doule"></span><h3>3000</h3></div></div></li>
		 <li className="sever"><div className="wuzhi_tu "><img src="images/w_kai_12.png"/></div><div className="wuzhi_shi">示 范 店</div><div className="wuzhi_bao"><span className="wuzhi_jing">保证金</span><div className="doule_bao"><span className="doule"></span><h3>5000</h3></div></div></li>
		*/}
		</ul>
		</div>
</div>
			)
	}
}


