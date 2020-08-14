<template>
	<view class="music">
		<view class="bg-color position nav-bar"><feiyu-head :current="current" @currentId="currentId" style="marginTop:var(--status-bar-height);"></feiyu-head></view>
		<swiper  :current="current" @change="change" :style="{ paddingTop: navHeight, height: height}">
			<swiper-item >
				<scroll-view scroll-y>
					<view><feiyu-music></feiyu-music></view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y="true">
					<view><feiyu-my></feiyu-my></view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
import { info } from '../../common/js/utils.js';
export default {
	data() {
		return {
			height: '',
			current: 0,
			navHeight: ''
		};
	},
	onLoad() {
		info().then(res => {
			this.navHeight = res.statusBarHeight + 40 + 'px';
			this.height = res.windowHeight -(res.statusBarHeight + 40 ) + 'px';
			console.log(this.height);
		});
	},
	methods: {
		//改变swiper的current
		change(e) {
			this.current = e.detail.current;
		},

		//监听feiyu-head的current
		currentId(index) {
			this.current = index;
		}
	}
};
</script>

<style lang="scss">
.music {
	width: 100%;
	height: 100%;
	.nav-bar {
		border-bottom-left-radius: 40rpx;
		border-bottom-right-radius: 40rpx;
	}
}
</style>
