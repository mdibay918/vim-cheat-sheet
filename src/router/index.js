import Vue from 'vue'
import Router from 'vue-router'
import Cheat from '@/views/Cheat'
import About from '@/views/About'

Vue.use(Router)

let routes = [
{
	path: '/',
	name: 'CheatSheet',
	component: Cheat
}, 
{
	path: '/about',
	name: 'About',
	component: About
}
]
export default new Router({
	routes: routes
})
