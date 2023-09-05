import Vue from 'vue';

const fetchClients = () => {
    return Vue.prototype.$http.get(`users`).then((res) => res.data).catch(() => null)
};

const getClient = (id) => {
    return Vue.prototype.$http.get(`users/${id}`).then((res) => res.data).catch(() => null);
};

export {fetchClients, getClient};
