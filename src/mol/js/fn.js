import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'
import Head from './head/head'
import Row from './row/row'
import Button from './button/button'




export default class Fn extends React.Component{
	render(){
		return(
		<div className="sy_page wcw_ba1">

	<div className="sy_cont wcw_ba">
		<Head Title="选择店铺分类" />

		<Row url="http://120.76.31.111/app/XhlGetSubjectTypeList" />
		
		

		<div className="wcw_hon wow_ba">
	
	       <Button value="下一步" />	
		
		</div>
		</div>


		
	</div>
			)
	}
}