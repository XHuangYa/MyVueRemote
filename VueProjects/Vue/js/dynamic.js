new Vue({
	el:"#vue_app",
	data:{
		changeColor:false,
		changeLength:false
	},
	computed:{
		comClasss:function(){
			return{
				changeColor:this.changeColor,
			    changeLength:this.changeLength
			} 
		}
	}
});