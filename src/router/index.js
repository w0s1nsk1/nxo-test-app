import Vue from 'vue';
import Router from 'vue-router';
import ClientsList from '../components/list.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/clients',
            name: 'ClientsList',
            component: ClientsList
        },
    ]
});
