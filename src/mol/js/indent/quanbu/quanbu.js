import React from 'react'
import NonPayment from '../NonPayment/NonPayment'
import DropShipping from '../DropShipping/DropShipping'
import Shipped from '../shipped/shipped'
import Navigation from '../navigation/ShopMord'
import Shouhou from '../shouhou/shouhou'
export default class Quanbu extends React.Component{
     
      constructor(...args){
            super(...args);
            this.state={
                  leng:''
            }
      }
      
	render(){
		return (
                  <view>
                  		<NonPayment/>
                  		<DropShipping/>
                  		<DropShipping/>
                  	      <Navigation/>
                  		<Shouhou/>
                  </view>

			)
	}
}