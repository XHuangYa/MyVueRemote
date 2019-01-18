<!--1模板 :htm 结构-->
<template>
	<!--只能有一个根标签-->
  <div id="app">
			<!--<h2>{{title}}</h2>-->
			<app-header></app-header>
			<users></users>
			<app-footer></app-footer>
  </div>
</template>
<!--2行为：逻辑处理-->
<script>

/*
 * 导入组件，局部组件只能在当前组件中使用；
 * 引用的组件需要在export default 进行注册
 */
import Users from './components/Users';
import Header from './components/Header';
import Footer from './components/Footer';
export default {
  name: 'App',
  data(){
  	return{
  		title:"第一个脚手架项目！"
  	}
  },
  components:{
  	/*'users':Users*/     //	第一种注册方式
  	Users ,                     // 	第二种注册方式
  	'app-header':Header,
  	'app-footer':Footer
  }
}
</script>
<!--3样式：解决样式-->
<style scoped>
h2{
	color: purple;
}
</style>
