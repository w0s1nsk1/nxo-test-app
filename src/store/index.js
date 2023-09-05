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
        errorMessage: ""
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
            state.current = data;
            state.loadingItem = false;
        },
        raiseError(state,message) {
            state.errorMessage = message;
        }
    },
    actions: {
        async fetchClients({commit}) {
            commit('request');
            const payload = await fetchClients()
            if (payload) {
                commit('success', payload)
            }else{
                commit('raiseError', 'Loading Clients failed')
            }

            return payload;
        },
        async getClient({commit}, {id}) {
            commit('getRequest');
            const payload = await getClient(id)
            if (payload) {
                commit ('getSuccess', payload)
            }else{
                commit('raiseError', "CLIENT_DETAILS_FAIL")
            }
            return payload

        },
        clearError({ commit }){
            commit('raiseError', '')
        },
        raiseError({ commit }, message) {
            commit('raiseError', message)
        }
    },
});

