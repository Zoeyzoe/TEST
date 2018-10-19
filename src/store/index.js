import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
Vue.use(Vuex);

const store = new Vuex.Store({

	state:{
		title:"分类"
	},

	mutations:{
		changetitle(state,payload){
			console.log("我被调用了", payload);
			state.title=payload;
		}
	},

	actions:{

	}

})

export default store;