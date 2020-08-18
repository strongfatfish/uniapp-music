<script>
	export default {
		globalData:{
				play:{}
		},
		onLaunch: function() {
			console.log('App Launch')
			this.init_play()
		},
		onShow: function() {
			console.log('App Show')
			
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
			init_play() {
				const player = uni.createInnerAudioContext();
				player.autoplay = false;
				player.src = this.$store.state.played.url
				this.globalData.play = player;
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("https://at.alicdn.com/t/font_1853914_qyj5nax2khk.css");
	@import url("./common/css/feiyu-css.css");
</style>
