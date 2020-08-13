import Vue from 'vue';

const fetchClients = () => {
    return Vue.prototype.$http.get(`clients`).then((res) => res.data);
};

const getClient = (id) => {
    return Vue.prototype.$http.get(`clients/${id}`).then((res) => res.data);
};

export {fetchClients, getClient};
