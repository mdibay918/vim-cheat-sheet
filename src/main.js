// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import navtop from './views/Navtop'
import navcontent from './views/Navcontent'
import navpan from './views/Navpan'
import router from './router'
import search from './components/Search'

window.Vue = Vue; 
window.axios = axios;

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { navtop , navcontent, navpan, search},
	template: `
	<div>
		<section class="hero is-dark is-bold is-small">
			<navtop></navtop>
			<navcontent></navcontent>
			<navpan></navpan>
		</section>
		<section class="section">
			<div class="container is-fluid">
				<router-view/>
			</div>
		</section>
	</div>`
})
