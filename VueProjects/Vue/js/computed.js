new Vue({
	el:"#vue_app",
	data:{
		a:0,
		b:0,
		age:30
	},
	methods:{
		addToA:function(){
			return this.a+this.age;
		},
		addToB:function(){
			return this.b+this.age;
		}
	},
	computed:{
		addToa:function(){
			return this.a+this.age;
		},
		addTob:function(){
			return this.b+this.age;
		}
	}
});