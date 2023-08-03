import Vue from 'vue';

const fetchClients = () => {
    return Vue.prototype.$http.get(`users`).then((res) => res.data);
};

const getClient = (id) => {
    return Vue.prototype.$http.get(`users/${id}`).then((res) => res.data);
};

export {fetchClients, getClient};
