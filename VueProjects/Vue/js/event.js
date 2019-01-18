new Vue({
	el:"#vue_app", //根容器元素
	//本质是对象，用来数据的存储
	data:{
		age:30,
		x:0,
		y:0
		
	},
	//用来存储各种方法
	methods:{
		add:function(num){
			this.age+=num;
		},
		subtract:function(num){
			this.age-=num;
		},
		updateLocation:function(event){
			this.x=event.offsetX;
			this.y=event.offsetY;
		}
	}
});