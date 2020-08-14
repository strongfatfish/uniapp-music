<template>
	<swiper class="image-container" previous-margin="45rpx" next-margin="45rpx" circular autoplay @change="swiperChange">
		<swiper-item :class="currentIndex == index ? 'swiper-item' : 'swiper-item-side'" v-for="(item, index) in banners" :key="item.pic">
			<image
				@click="clickImg(item)"
				:class="currentIndex == index ? 'item-img' : 'item-img-side'"
				:src="item.pic"
				lazy-load
				:style="dontFirstAnimation ? 'animation: none;' : ''"
				mode="aspectFill"
			></image>
		</swiper-item>
	</swiper>
</template>

<script>
	import { banner } from '../../config/api.js';
	export default {
		data() {
			return {
				banners: {},
				currentIndex: 0,
				dontFirstAnimation: true
			};
		},
		created() {
			var that = this;
			banner(res => (that.banners = res.banners));
		},
		methods: {
			swiperChange(e) {
				this.dontFirstAnimation = false;
				this.currentIndex = e.detail.current;
			},
			clickImg(item) {
				console.log(item);
			},
			banner() {
				console.log(this.banners);
			}
		}
	};
</script>

<style lang="scss">
.image-container {
	width: 750rpx;
	height: 300rpx;
	.item-img {
		width: 650rpx;
		height: 260rpx;
		border-radius: 30rpx;
		animation: to-big .3ms ease-in;
	}
	.swiper-item {
		width: 650rpx;
		height: 260rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.item-img-side {
		width: 650rpx;
		height: 220rpx;
		border-radius: 30rpx;
		animation: to-mini .3ms ease-in;
	}
	.swiper-item-side {
		width: 650rpx;
		height: 220rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}

@keyframes to-mini {
	from {
		height: 300rpx;
	}
	to {
		height: 260rpx;
	}
}
@keyframes to-big {
	from {
		height: 260rpx;
	}
	to {
		height: 300rpx;
	}
}
</style>
