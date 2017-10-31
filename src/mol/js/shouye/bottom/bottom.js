import React from 'react'
import {Link,to} from 'react-router'

export default class Bottom extends React.Component{
	render(){
		return(
			<div className="sy_dibu">
			<div className="sy_dibox">
				<Link to="/product">
					<div className="sy_dimg"><img src="images/xin.png"/></div>
					<div className="sy_dt">主页</div>
				</Link>
			</div>
			<div className="sy_dibox">
				<Link to="/shoporder">
					<div className="sy_dimg"><img src="images/fenl.png"/></div>
					<div className="sy_dt">分类</div>
				</Link>
			</div>
			<div className="sy_dibox">
				<Link to="/">
					<div className="sy_dimg"><img src="images/gou.png"/></div>
					<div className="sy_dt">购物袋</div>
				</Link>
			</div>
			<div className="sy_dibox">
				<Link to="/">
					<div className="sy_dimg"><img src="images/wod.png"/></div>
					<div className="sy_dt">我的</div>
				</Link>
			</div>
		</div>
			)
	}
}