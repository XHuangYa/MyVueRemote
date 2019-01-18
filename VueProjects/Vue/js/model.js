new Vue({
	el:"#vue_app",
	data:{
		name:"",
		age:""
	},
	methods:{
		printName:function(){
			this.name=this.$refs.name.value;
		},
		printAge:function(){
			this.age=this.$refs.age.value;
		}
	}
	
});