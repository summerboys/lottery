// interface model
import $ from 'jquery';
class Interface{
	// 获取遗漏数据 
	getOmit(issue){
		let self = this;
		return new Promise((resolve,reject)=>{
			// 箭头函数this是定义时指向，不是运行时this的指向
			$.ajax({
				url:'/get/omit',
				data:{
					issue:issue
				},
				dataType:'json',
				success:function(res){
					self.setOmit(res.data)
					resolve.call(self,res)
				},
				error:function(err){
					reject.call(err);
				}
			})
		})
	}
	// 
	getOpenCode(issue){
		let self = this;
		return new Promise((resolve,reject)=>{
			$.ajax({
				url:'/get/opencode',
				data:{
					issue:issue
				},
				dataType:'json',
				success:function(res){
					self.setOpenCode(res.data);
					resolve.call(self,res)
				},
				error:function(err){
					reject.call(err)
				}
			})
		})
	}
	// 
	getState(issue){
		let self = this;
		return new Promise((resolve,reject)=>{
			$.ajax({
				url:'/get/state',
				data:{
					issue:issue
				},
				dataType:'json',
				success:function(res){
					resolve.call(self,res)
				},
				error:function(err){
					reject.call(err)
				}
			})
		})
	}
}

export default Interface
















