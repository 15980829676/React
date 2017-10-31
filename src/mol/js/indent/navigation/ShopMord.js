import React from 'react'
 const data =[{"d":"12589635785621","y":"2016/11/06 12:20:30","s":"张五","w":"89562748633"},{"d":"12589635785621","y":"2016/11/06 12:20:30","s":"张五","w":"89562748633"},{'d':'12589635785621',y:'2016/11/06 12:20:30',s:'李四',w:'89562748633'}]
 
 const style={


 }
/*没有订单时*/
class Without extends React.Component{
    
	render(){
		return(  
			   <viewr>
			   <h2 style={{textAlign:'center'}}>{this.props.widthout}</h2>
               </viewr>   
			)
	}
} 
/*订单*/
class Item extends React.Component{

 	render(){
 		const {handClick,data} = this.props;

 		return(
 				<div className="lfk_bac lfk_mart">			
		<div className="lfk_qwe lqbdd_1">		
		<div className="lfk_tj lqbdd_2">
		<div className="lfk_tj_1 lfk_tj_3">单号：<span>{data.d}</span></div>
		<div className="lfk_tj_2 lfk_tj_3">{data.y}</div>
		</div>
		<div className="lfk_tj lqbdd_2">
		<div className="lfk_tj_1">派送商家：<span>{data.s}</span></div>
        <div className="lfk_tj_2">物流号：<span>{data.w}</span></div>				
		</div>
		<div className="lfk_z_hon">
		   <div className="lfk_z_k">
		                
		                <div className="lfk_w_lo ">
						   <div className="lfk_w_op"><a href="#"><img src="images/tjdd_3.png"/></a></div>
						   <div className="lfk_w_ou">
						      <div className="lfk_t1"><div className="lfk_w_n1">HAFEISI  / 韩菲诗深海胶原精粹保湿乳139…</div></div>
						      <div className="lfk_t1"><div className="lfk_w_n1 lfk_sever">数量<span>X1</span></div></div>
						      <div className="lfk_t1"><div className="lfk_w_n2">￥78.00</div></div>
						   
						   </div>
						
						</div>
		             
		   </div>
	

		<div className="lfk_z_k lfk_padding">
		  <div className="lfk_c_x"> <div className="lfk_w_t1">总计<span className="lfk_sever">￥78.00</span></div> </div>
		</div>
		</div>
		<div className="lqbdd_3">
		<button id={data.id} className="lqbdd_4" onClick={handClick}>删除订单</button>
		<button className="lqbdd_5">已完成</button>
		</div>
	    
		</div>			
		</div>
 			)
 	}
 }

/*删除订单弹窗*/
class Shanchu extends React.Component{
	render(){
		return(
	<div className={this.props.visible ? 'w_tan sever' : 'w_tan'} >
    <div className="zhong_w">
      <div className="w_wei"><h2>确认删除该订单？</h2>
        </div>
      <div className="lfk_d_dbl"><button className="lfk_crz"  onClick={this.props.onEnter}>确认</button><button className="lfk_crz lfk_azy" onClick={this.props.onLeave}>取消</button></div>
     
      <div className="ca" onClick={this.props.onLeave}><a href="#"><img src="images/qxdd_1.png"/></a></div>
    </div>
  </div>
			)
	}
}

export default class ShopMord extends React.Component{
	  constructor(...args){
	  	    super(...args);
	  	    this.state={
	  	    	push:'',
	  	    	visible:false,
	  	    	enr:''	
	  	    }
	  	    this.Mount = this.Mount.bind(this);
	  }

	  onEnter(e){
        let enrO = this.state.enr;
        console.log(enrO);
	 e.preventDefault();
	  	data.splice(enrO,1)
	  
	  	this.setState({
	  		visible:false,
	  		push:data
	  	})
	  }

	   Shclick(index,e){
	   	let dre = index;
	   	this.setState({
	  		visible:!false,
	  		enr:dre
	  	})
       e.preventDefault();
	  }
	  onLeave(e){
		this.setState({
	  		visible:false
	  	})
		 e.preventDefault();
	  }
	  Mount(){
	  	this.setState({
	  		push:data
	  	})
	  	
	  }
	  handPush(){
	  	this.state
	  }
 componentDidMount(){
	    	this.Mount();
	    	this.Intd = setInterval(this.Mount,2000)
         
        }
    componentWillUnmount(){

    	clearInterval(this.Intd)
       
    }
      render(){


     const serviceShows=data.map((data,index)=>{
       return <Item key={index} data={data} handClick={(e)=>this.Shclick(index,e)} />
		})
            return <div>
          <Shanchu visible={this.state.visible} onEnter={(e)=>this.onEnter(e)} onLeave={this.onLeave.bind(this)} />
          {this.state.push == '' ? <Without widthout='您尚未下单'/> : ''}
            <view>{serviceShows}</view>
              
   </div>
		 }
		}

