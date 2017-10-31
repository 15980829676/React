import React from 'react'
const data =[{"d":"12589635785621","y":"2016/11/06 12:20:30","s":"二哈","w":"89562748633"},]
export default class Shipped extends React.Component{
	render(){
		const Nopi =data.map((data,index)=>{ return <div key={index} className="lfk_bac lfk_mart">			
		<div className="lfk_qwe lqbdd_1">		
		<div className="lfk_tj lqbdd_2">
		<div className="lfk_tj_1 lfk_tj_3">单号：<span>{data.d}</span></div>
		<div className="lfk_tj_2 lfk_tj_3">{data.y}</div>
		</div>
		<div className="lfk_tj lqbdd_2">
		<div className="lfk_tj_1">派送商家：<span>{data.s}</span></div>
		 <div className="lfk_tj_2">物流号：<span>{data.w}</span></div>		
		</div>
		<div className="lfk_z_hon ">
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
		  <div className="lfk_c_x"> <div className="lfk_w_t1">总计<span className="lfk_sever">  ￥78.00</span></div> </div>
		</div>
		</div>
		</div>			
		</div>
			    })
		return (
			<view>{Nopi}</view>
		)
	}
}