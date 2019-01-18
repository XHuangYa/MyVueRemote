<template>
	<div class="users">
		<h2>hello users</h2>
		<ul >
			<li v-for="user in users"  v-on:click="user.show=!user.show">
					<h2>{{user.name}}</h2>
					<h3 v-show="user.show">{{user.position}}</h3>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'users',
		data(){
			return {
				users:[
				{name:'herry',position:'java开发 ',show:false},
				{name:'herry',position:'java开发 ',show:false},
				{name:'herry',position:'java开发 ',show:false},
				{name:'herry',position:'java开发 ',show:false},
				{name:'herry',position:'java开发 ',show:false},
				{name:'herry',position:'java开发 ',show:false},
				{name:'herry',position:'java开发 ',show:false},
				{name:'herry',position:'java开发 ',show:false},
				{name:'herry',position:'java开发 ',show:false}
			]
			}
		}
	}
</script>
	
<style scoped>
h2{
text-align: center;		
}
.users{
	    background: deepskyblue;
		width:100%;
		max-width: 1200px;
		margin: 40px auto;
		padding: 0 20px;
		box-sizing: border-box;
}
ul{
	display: flex;
	flex-wrap: wrap;
	list-style: none;
	padding: 20px;
}
li{
	flex-grow: 1;         /*如果有剩余空间进行放大  ，类似于colspan*/
	flex-basis: 200px;/*每一个li占据多少空间 ，类似于width*/
	text-align: center;
	padding: 20px;
	border: 1px solid;
}
</style>