<template>
	<div>
		<div class="tile is-12 is-parent">
			<div class="tile is-child box">
				<p class="control">
					<input class="input is-rounded" 
					type="text" 
					v-model="search" 
					placeholder="Search a command">
				</p>  
			</div>
		</div>
		<div class="tile is-12 is-parent">
			<div class="tile is-child box">
				<transition-group
				name="staggered-fade"
				tag="div"
				v-bind:css="false"
				v-on:before-enter="beforeEnter"
				v-on:enter="enter"
				v-on:leave="leave">
				<div 
					v-for="(cm, index) in filteredCommands" 
					:key="cm.command"
					:data-index="index"
					class="cheat-card">
					<cheatinfo 
							:command="cm.command" 
							:description="cm.desc"></cheatinfo>
				</div>
			</transition-group>
			</div>
		</div>
</div>
</template>

<script>
import data from '@/assets/data.json'
import cheatinfo from './Cheatinfo'
export default {
	components: {
		cheatinfo: cheatinfo
	},
	data() {
		return {
			search: '', 
			data: data
		}
	}, 
	computed: {
		filteredCommands: function() {
			if (this.data["vim"]) {
				return this.data.vim
				.filter(v => 
					(v.command.indexOf(this.search) != -1) || 
					(v.desc.indexOf(this.search) != -1));	
			} 
			return [];
		}
	},
	methods: {
		beforeEnter: function (el) {
			el.style.opacity = 0
			el.style.height = 0
		},
		enter: function (el, done) {
			var delay = el.dataset.index * 10
			setTimeout(function () {
				Velocity(
					el,
					{ opacity: 1, height: '10em' },
					{ complete: done }
					)
			}, delay)
		},
		leave: function (el, done) {
			var delay = el.dataset.index * 10
			setTimeout(function () {
				Velocity(
					el,
					{ opacity: 0, height: 0 },
					{ complete: done }
					)
			}, delay)
		}
	}
}
</script>
<style>
.flip-list-move {
	transition: transform 1s;
}
.search {
	max-width: 500px;
}
.cheat-card {
	padding: 1em;
}
</style>