<template>
  <div id="app">
    <div>{{$store.state.countr}}</div>
    <button @click="ann(nnn,ccc)">改变</button>
    <button @click="axx(ccc)">改</button>
  </div>
</template>



<script>
export default {
  name: 'App',
  data(){
	return {
		nnn:2,
		ccc:5
	}  
  },
  methods: {
    ann(n,text){
      this.$store.commit('add',{
		 n,
		 text
	  });
    },
	axx(a){
		this.$store.dispatch('acc',a)
	}
  }
}
</script>

<style lang="less">
</style>
