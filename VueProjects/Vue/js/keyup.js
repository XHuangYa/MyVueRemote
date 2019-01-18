new Vue({
	el:"#vue_app",
	methods:{
		printName:function(){
			document.getElementById("name").innerHTML="你正在填写名字";
		},
		printAge:function(){
			document.getElementById("age").innerHTML="你正在填写年龄";
		}
	}
});