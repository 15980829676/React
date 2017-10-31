import React from 'react'

export default class Head extends React.Component{
	render(){
		return(
		<div className="fanh">{this.props.Title}
			<div className="fa_z"><img src="images/z_jt.png"/></div>
			<div className="fa_x"><img src="images/w.png"/></div>
		</div>
			)
	}

}