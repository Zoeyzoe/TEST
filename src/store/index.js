import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		shanghailist:[],
		beijinglist:[],
		nanjinglist:[],
		tianjinlist:[],
		guangzhoulist:[],
		chengdulist:[]
	},
	mutations:{
		shanghailistMutation(state,payload){
			console.log("我被调用了",payload);
			state.shanghailist = payload
		},
		beijinglistMutation(state,payload){
			state.beijinglist = payload
		},
		nanjinglistMutation(state,payload){
			state.nanjinglist = payload
		},
		tianjinlistMutation(state,payload){
			state.tianjinlist = payload
		},
		guangzhoulistMutation(state,payload){
			state.guangzhoulist = payload
		},
		chengdulistMutation(state,payload){
			state.chengdulist = payload
		}

	},
	actions:{
		getshanghailist(store,payload){
			console.log("shanghailist")

			axios.get("/hub/home/v1/web/week_choice.json?city_id=104&page=0").then(res=>{
				console.log(res.data);
				store.commit("shanghailistMutation",res.data);
			})
		},
		getbeijinglist(store,payload){
			axios.get("/hub/home/v1/web/week_choice.json?city_id=140&page=0").then(res=>{
				console.log(res.data);
				store.commit("beijinglistMutation",res.data);
			})
		},
		getnanjinglist(store,payload){
			axios.get("/hub/home/v1/web/week_choice.json?city_id=144&page=0").then(res=>{
				console.log(res.data);
				store.commit("nanjinglistMutation",res.data);
			})
		},
		gettianjinlist(store,payload){
			axios.get("/hub/home/v1/web/week_choice.json?city_id=185&page=0").then(res=>{
				console.log(res.data);
				store.commit("tianjinlistMutation",res.data);
			})
		},
		getguangzhoulist(store,payload){
			axios.get("/hub/home/v1/web/week_choice.json?city_id=216&page=0").then(res=>{
				console.log(res.data);
				store.commit("guangzhoulistMutation",res.data);
			})
		},
		getchengdulist(store,payload){
			axios.get("/hub/home/v1/web/week_choice.json?city_id=235&page=0").then(res=>{
				console.log(res.data);
				store.commit("chengdulistMutation",res.data);
			})
		}

	}
})

export default store;