import React from 'react'
import Head from '../head/head'
import Dhead from './navigation/Dhead'
export default class ShopOrder extends React.Component{
	    constructor(...args){
	    	super(...args);
	    	this.state={
	    		data:[],
	    		

	    	}
	    }
        
		render(){
			return(
		<view>

		<Head Title="店铺订单" />
		<Dhead/>
		{this.props.children}
	
	</view>
				)
		}

}