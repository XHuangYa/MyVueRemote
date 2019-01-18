var one =new Vue({
	el:"#vue_app_one",
	data:{
		title:"vue_app_one"
	},
	computed:{
		greet:function(){
			return "hello one";
		}
	}
});

var two =new Vue({
	el:"#vue_app_two",
	data:{
		title:"vue_app_two"
	},
	methods:{
		changeTitle:function(){
			 one.title="题目改变了";
		}
	},
	computed:{
		greet:function(){
			return "hello two";
		}
	}
});