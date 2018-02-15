<template>
	<div class="tile is-parent is-vertical is-12">
		<div class="tile is-child">
			<p class="control">
				<input class="input is-rounded" 
				type="text" 
				v-model="search" 
				placeholder="Search a command">
			</p>
		</div>
		<div class="columns is-multiline">
			<div  v-for="cm in filteredCommands" class="column">
				<cheatinfo
				:data="cm"
				:key="cm.command"
				:command="cm.command" 
				:description="cm.desc" ></cheatinfo>
			</div>
		</div>	
	</div>
	<!-- </div> -->
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
	}
}
</script>
<style>
div#infocard {
	max-width: 260px;
	/*padding-left: 10px;*/
}
</style>