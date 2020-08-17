import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		played:"",
		playing:false,
		play_mode:"sequence", //single, random, sequence
		current_playlist: [], // 当前播放列表, 应该两种模式, 播放历史和歌曲所在清单
		likelist: []
	}
})