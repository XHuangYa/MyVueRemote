<template>
	<div>
	<footer>
		<h2>{{title}}</h2>
	</footer>
	</div>
</template>

<script>
		export default{
			name:'app-footer',
			data(){
				return{
					title:'You let me hate'
				}
			}
		}
</script>

<style scoped>
	div{
		background: purple;
	}
	footer{
		background: cadetblue;
		padding: 10px;
	}
	h2{
		text-align: center;
		color: green;
	}
</style>