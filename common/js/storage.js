let Storage = {}

const LATEST_PLAYED = 'latest_played'; //最后一个播放记录
const CURRENT_PLAYLIST = 'current_playlist'; // 当前播放列表
const PLAY_MODE = 'play_mode';

Storage.get_played = () => get(LATEST_PLAYED);
Storage.set_played = v => set(LATEST_PLAYED, v);
Storage.get_current_playlist = () => get(CURRENT_PLAYLIST);
Storage.set_current_playlist = v => set(CURRENT_PLAYLIST, v);
Storage.get_play_mode =() => get(PLAY_MODE);
Storage.set_play_mode = v => set(PLAY_MODE, v);
const set =(k, v) =>{
	try {
	    uni.setStorageSync(k, v);
	} catch (e) {
	   console.log(e);
	}
	return;
}

const get =(k, v) =>{
	try {
	    return uni.getStorageSync(k);
	} catch (e) {
	    console.log(e);
	}
}

export default Storage