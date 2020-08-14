<template>
	<view>
		<feiyu-swiper></feiyu-swiper>
		<view class="container flex-row row-around font-color-active">
			<view class="" v-for="item in tabs" :key="item.name">
				<view class="flex-col">
					<feiyu-icon :icon="item.icon" size="30" color="#FFC706"></feiyu-icon>
					<text class="font-size-26">{{ item.name }}</text>
				</view>
			</view>
		</view>
		<view class="padding-top-24">
			<view class="padding-top-24 container flex-row row-between">
				<view class="flex-row row-between font-weight-300 font-size-30 text-center" style="width: 80px;">
					<block v-for="(item, index) in typeList" :key="item.id">
						<text :class="{ color: type === index }" @tap="select(item.id)">{{ item.name }}</text>
					</block>
				</view>
				<view class="flex-row row-center font-size-26 font-weight-300">
					<text>更多{{ typeList[type].name }}</text>
					<feiyu-icon icon="gengduo"></feiyu-icon>
				</view>
			</view>
			<view class="padding-top-8">
				<swiper next-margin="60rpx" class="swiper" circular disable-programmatic-animation>
					<block v-if="type === 0">
						<swiper-item v-for="(newSongs, index) in newSongList" :key="index">
							<block v-for="(newSong, i) in newSongs" :key="i">
								<view class="flex-row  row-center padding-top-16 padding-left-20">
									<image style="width: 100rpx;height: 100rpx; border-radius: 20rpx;" :src="newSong.album.blurPicUrl" mode="aspectFill"></image>
									<view class=" flex-1 padding-left-30">
										<view class="font-size-30 font-weight-400">{{ newSong.name }}</view>
										<view class="font-size-26 font-weight-200">{{ newSong.artists[0].name }}</view>
									</view>
								</view>
							</block>
						</swiper-item>
					</block>
					<block v-else>
						<swiper-item v-for="(newAlbums, index) in newAlbumList" :key="index">
							<block v-for="(newAlbum, i) in newAlbums" :key="i">
								<view class="flex-row  row-center padding-top-16 padding-left-20">
									<image style="width: 100rpx;height: 100rpx; border-radius: 20rpx;" :src="newAlbum.blurPicUrl" mode="aspectFill"></image>
									<view class=" flex-1 padding-left-30">
										<view class="font-size-26 font-weight-400">{{ newAlbum.name }}</view>
										<view class="font-size-26 font-weight-200">{{ newAlbum.artists[0].name }}</view>
									</view>
								</view>
							</block>
						</swiper-item>
					</block>
				</swiper>
			</view>
		</view>
	</view>
</template>

<script>
import { get_newsong, get_newalbum } from '../../config/api.js';
export default {
	data() {
		return {
			tabs: [
				{
					name: '歌手',
					icon: 'singger'
				},
				{
					name: '排行',
					icon: 'paixing'
				},
				{
					name: '歌单',
					icon: 'gedan'
				}
			],
			type: 0,
			typeList: [
				{
					id: 0,
					name: '新歌'
				},
				{
					id: 1,
					name: '新碟'
				}
			],
			newSongList: [],
			newAlbumList: []
		};
	},
	created() {
		this.getData();
	},
	methods: {
		select(id) {
			this.type = id;
		},
		getData() {
			get_newsong({}, res => {
				let data = res.data.slice(0, 15);
				for (let i = 0; i < data.length; i += 5) {
					this.newSongList.push(data.slice(i, i + 5));
				}
			});
			get_newalbum({}, res => {
				let data = res.albums.slice(0, 15);
				for (let i = 0; i < data.length; i += 5) {
					this.newAlbumList.push(data.slice(i, i + 5));
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.color {
	font-weight: 600;
	border-bottom: 4rpx #ffc706 solid;
	color: #ffc706;
}
.swiper {
	height: 600rpx;
	&swiper-item {
		height: 100rpx;
		width: 550rpx;
	}
}
</style>
