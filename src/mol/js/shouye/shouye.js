import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Bottom from './bottom/bottom'
import $ from 'jquery'
import './transition.css'
export default class ShouYe extends React.Component{
     constructor(...args) {
        super(...args);
    }
    componentWillMount(){
    
    document.body.style.margin = "0px";
        // 这是防止页面被拖拽
        document.body.addEventListener('touchmove', (ev) => {
            ev.preventDefault();
        });
    }
    componentWillReceiveProps(nextProps){

        //当路由切换时  当参数发生改变 返回顶部 
        if(this.props.location !== nextProps.location){
            window.scrollTo(0,0)
        }
    }
   render(){
   	   return(
   	 <div className="sy_page">
	   <div className="sy_cont">
	   <ReactCSSTransitionGroup
	
       component="div"
       className='transitionWrapper'
	   	transitionEnterTimeout={300}
	   	transitionLeaveTimeout={300}
	   	transitionName="transitionWrapper"
	   >
	   <div key={this.props.location.pathname} style={{position:'relative',width:'100%'}}>
	   {this.props.children}
	   </div>
	   </ReactCSSTransitionGroup>
	</div>
	
	<Bottom/>
		
		
	</div>	
   	   	)
   }


}