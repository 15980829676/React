import React from 'react'

export default class Button extends React.Component{
	render(){
		return(
             <input className="wzsg_an" type="submit" value={this.props.value}/>
			)
	}
}