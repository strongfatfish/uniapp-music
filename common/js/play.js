import Storage from "./storage.js"
import {
	get_song_url,
	get_song_detail
} from "../../config/api.js"
import {
	toast
} from "./utils.js"
let Play = {}

const get_player = () => getApp().globalData.play;
Play.play = function() {
	let player =get_player()
	player.play(()=>{
		console.log('当前音乐播放完毕');
	},(e)=> {
		console.log(e);
	})
}
Play.start = function(song_id, cb) {
	get_song_detail(song_id, (data) => {
		console.log(data);
		let song = data.songs[0];
		let song_name = song.name;
		let cover_image = song.al.picUrl;
		let creators = song.ar;
		let creator_str = '';
		for (let creator of creators) {
			creator_str = creator_str + creator.name;
		}
		get_song_url(song_id, (data) => {
			let url = data.data[0].url;
			if (!url) {
				setTimeout(function() {
					toast('none', '亲爱的, 不能播放这首歌哟~', 3000, false, 'bottom');
				}, 10);
				return;
			}
			let played = {
				id: song_id,
				url: url,
				name: song_name,
				creator: creator_str,
				cover_image: cover_image,
			}
			get_player().src = url
			get_player().play()
			cb && cb(played)
		});
	})
}

export default Play;
