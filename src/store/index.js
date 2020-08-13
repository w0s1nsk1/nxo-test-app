import Vue from 'vue'
import Vuex from 'vuex'
import {fetchClients} from '../services';

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
    },
    actions: {
        async fetchClients({commit}) {
            commit('request');
            const payload = await fetchClients()
            if (payload) {
                commit('success', payload)
            }

            return payload;
        },
    },
});

