//初始化view对象
new Vue({
	el:"#vue_app",
	data:{
		name:"litng",
		job:"Java开发",
		website:"https://www.baidu.com",
		websiteTag:"<a href='https://www.baidu.com'>百度</a>"
	},
	methods:{
		greet:function(time){
			//方法中调用属性   this.属性名
			return "Good "+time+"!"+"  "+this.name;
		}
	}
	
});
/*
 *1.el:element 需要获取的元素，一定是html中的根容器元素 
 *2.data本质是对象，用于数据的存储
 *3.method对象，用于存储各种方法
 * 4.data-binding 给属性绑定对应的值
 */