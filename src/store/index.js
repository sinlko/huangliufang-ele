import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

// 导出一个仓库
export default new Vuex.Store({
    // 放入四大状态
    state: {
        author: '方丈',
        search: {
            value: ''
        }
    },
    mutations: {
        setAuthor(state, data) {
            state.search = data
        }
    },
    getters: {
        getAuthor(state) {
            return state.search
        }
    },
    actions: {
        setAuthor(context, data) {
            context.commit('setAuthor', data)
        }
    }
})