<template>
	<view class=" play" v-show="played.cover_image">
		<view class="container flex-row">
			<view class="img flex-1">
				<image :src="played.cover_image" mode="" style="width: 80rpx;height: 80rpx;" ></image>
			</view>
			<view class="flex-3">
				
			</view>
			<view class="flex-1 flex-row row-around">
				<view @click="play">
					<feiyu-icon  :icon="icon" size=24></feiyu-icon>
				</view>
				<view class="">
					<feiyu-icon icon="liebiao" size=26></feiyu-icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Play from "../../common/js/play.js"
export default {
	data() {
		return {};
	},
	computed: {
		played() {
			return this.$store.state.played;
		},
		playing() {
			return this.$store.state.playing
		},
		icon() {
			if(this.playing) {
				return "Player"
			}
			return "Pause"
		}
	},
	methods:{
		play() {
			Play.play()
			this.$store.commit("SET_PLAYING")
		}
	}
};
</script>

<style lang="scss" scoped>
.play {
	position: fixed;
	bottom: 0rpx;
	left: 0;
	width: 100%;
	height: 100rpx;
	border-top-left-radius: 20rpx;
	border-top-right-radius: 20rpx;
	.img {
		image {
			border-radius: 50%;
			animation: xuanzhuan 3s linear infinite;
		}
	}
}
@keyframes xuanzhuan {
	0% {
		transform: rotate(0deg);
	}
	50% {
		transform: rotate(180deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
