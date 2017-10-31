import React,{Component} from 'react'
import {Link,to} from 'react-router'

export default class Dhead extends React.Component{

  


	render(){
		return(
		<div className="lxzsj_bac">			
		<div className="lxzsj_dhl">
			<ul style={{width:600+'px'}}>	
				  <li><Link to="/shoporder/quanbu:id" activeStyle={{ color: 'black' }}>全部</Link></li>
				  <li className="lxzsj_ccc"><Link to="/shoporder/nonPayment:id" activeStyle={{ color: 'black' }}>待付款</Link></li>
				  <li className="lxzsj_ccc"><Link to="/shoporder/DropShipping:id" activeStyle={{ color: 'black' }}>待发货</Link></li>
				  <li className="lxzsj_ccc"><Link to="/shoporder/shipped:id" activeStyle={{ color: 'black' }}>已发货</Link></li>
				  <li className="lxzsj_ccc"><Link to="/shoporder/shopMord:id" activeStyle={{ color: 'black' }}>已完成</Link></li>
				  <li className="lxzsj_ccc"><Link to="/shoporder/shouhou:id" activeStyle={{ color: 'black' }}>售后</Link></li>
			</ul>	
		</div>			
		</div>
			)
	}
}
