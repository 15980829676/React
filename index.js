import React,{Component} from 'react' 
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory,IndexRoute  } from 'react-router'
import ShouYe from './src/mol/js/shouye/shouye'
import Product from './src/mol/js/shouye/product/product'

import ShopOrder from './src/mol/js/indent/ShopOrder'
import Quanbu from './src/mol/js/indent/quanbu/quanbu'
import ShopMord from './src/mol/js/indent/navigation/ShopMord'
import navigation from './src/mol/js/indent/navigation/navigation'
import NonPayment from './src/mol/js/indent/NonPayment/NonPayment'
import Shipped from './src/mol/js/indent/shipped/shipped'
import Shouhou from './src/mol/js/indent/shouhou/shouhou'
import DropShipping from './src/mol/js/indent/DropShipping/DropShipping'




ReactDOM.render(
    	<div>
  <Router history={hashHistory}>
   <Route path="/" component={ShouYe}>{/*组件框架*/}
    <IndexRoute component={Product}/>{/*默认显示组件*/}
     <Route path="/product" component={Product}/>
     <Route path="/shoporder" component={ShopOrder}>
       <IndexRoute component={Quanbu}/> 
       <Route path="/shoporder/quanbu:id" component={Quanbu}/>
       <Route path="/shoporder/nonPayment:id" component={NonPayment}/>
       <Route path="/shoporder/DropShipping:id" component={DropShipping}/>
       <Route path="/shoporder/shipped:id" component={Shipped}/>
       <Route path="/shoporder/shopMord:id" component={ShopMord}/> 
       <Route path="/shoporder/shouhou:id" component={Shouhou}/> 
     </Route>
   </Route>
  </Router>
   		</div>
	,document.getElementById('root'))


