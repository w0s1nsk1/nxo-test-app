import Vue from 'vue'
import Vuex from 'vuex'
import {fetchClients, getClient} from '../services';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data: [],
        loading: false,
        current: null,
        loadingItem: false,
    },
    mutations: {
        request(state) {
            state.loading = true;
            state.data = [];
        },
        success(state, data) {
            state.loading = false;
            state.data = data;
        },
        getRequest(state) {
            state.loadingItem = true;
            state.current = null;
        },
        getSuccess(state, data) {
            state.loadingItem = false;
            state.current = data;
        }
    },
    actions: {
        async fetchClients({commit}) {
            commit('request');
            const payload = await fetchClients()
            if (payload) {
                commit('success', payload.users)
            }

            return payload;
        },
        async getClient({commit}, id) {
            commit('getRequest');
            const payload = await getClient(id);
            console.log(payload);
            if (payload) {
                commit('getSuccess', payload);
            }

            return payload;
        },
    },
});

