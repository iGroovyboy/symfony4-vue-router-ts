import Router from 'vue-router'

// components
import home from '@components/home.vue'
import hello from '@components/hello.vue'
import notfound from '@components/notfound.vue'

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: home
        },
        {
            path: '/hello',
            name: 'Hello',
            component: hello
        },
        {
            path: '*',
            name: 'notfound',
            component: notfound
        }
    ]
})