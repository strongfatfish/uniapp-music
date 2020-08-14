<template>
	<view class="flex-row font-color font-size-36 bg-color head">
		<view class="padding-left-20">
			<feiyu-icon icon="liebiao" size="25"></feiyu-icon>
		</view>
		<view class="flex-3 padding-top-16 text-center padding-bottom-8">
			<scroll-view scroll-y="true" class="scroll-view" scroll-with-animation :current="current">
				<view class="tabs-scorll-flex">
					<view v-for="(tab,index) in tabs" :key="index" class="tabs-items" :class="{active:current===index}" @tap="emit(index)">
						<text>{{tab.title}}</text>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="padding-right-20">
			<feiyu-icon icon="Search" size="25"></feiyu-icon>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			current:Number
		},
		data() {
			return {
				tabs:[
					{
						title:"音乐"
					},
					{
						title:"我的"
					}
				]
			};
		},
		methods:{
			emit(index) {
				this.$emit("currentId",index)
			}
		}
	}
</script>

<style lang="scss">
.head {
	height: 80rpx;
	width: 100%;
	border-bottom-left-radius: 40rpx;
	border-bottom-right-radius: 40rpx;
	.scroll-view {
		width: 100%;
				white-space: nowrap;
				position: relative;
	}
	.tabs-scorll-flex {
			display: flex;
			justify-content: center;
			.tabs-items {
				width: 150rpx;
			}
		}
}
view,scroll-view {
		box-sizing: border-box;
}
</style>
