Vue.component("show",{
	/*data必须是一个函数*/
	data:function(){
		return {
			name:"Herry"
		}
	},
	methods:{
		changeName:function(){
			this.name="Jack";
		}
	},
	template:`<p>
								我的名字:{{name}} 
								<button v-on:click="changeName">changeName</button>
					</p>`
})
/*通过 Prop 向子组件传递数据*/
Vue.component("blog-post",{
	/*props:['title'],*/
	props:['id','title','age'],
	template:"<h2>{{id}}-{{title}}-{{age}}</h2>"
})
/*单个根元素*/
Vue.component("blog-info",{
	props:['info'],
	template:`<div>
							<h2>{{info.title}}</h2>
							<div  v-html="info.content"></div>
					</div>`
})
new Vue({
	el:"#vue_app",
	 data: {
	    infos:[ 
	      {id: 1, title: 'My journey with Vue' ,age:18,content:"<p>journey </p>"},
	      { id: 2, title: 'Blogging with Vue' ,age:18,content:"<p>Blogging </p>"},
	      { id: 3, title: 'Why Vue is so fun' ,age:18,content:"<p>Why </p>"}
	      ],
	      posts: [
	      { id: 1, title: 'My journey with Vue' ,age:18},
	      { id: 2, title: 'Blogging with Vue' ,age:18},
	      { id: 3, title: 'Why Vue is so fun' ,age:18}
	    ]
	  }
})
