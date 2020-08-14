<template>
	<text :class="[`iconfont icon-${icon}`]" :style="{color: color, fontSize: size + 'px'}"></text>
</template>

<script>
	export default {
		name:"icon",
		props:{
			size:{
				type:String,
				default:"13"
			},
			icon:String,
			color:{
				type:String,
				default:"#282828"
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

</style>
