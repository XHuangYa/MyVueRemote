<template>
  <header>
		<h2>{{title}}</h2>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  data () {
    return {
		title:'Vue.Js.Demo'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h2{
		text-align: center;
	}
	header{
		background: gray;
		padding: 10px;
	}
</style>
