<template>
	<div class="level">
		<div class="level-item has-text-centered">
			<div class="content">
				<p class="title">Vue.js One Day Project</p>
				<blockquote>{{quote}}</blockquote>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'About', 
	data() {
		return {
			quote: ''
		}
	},
	created: function(){
		window
		.axios
		.get('https://talaikis.com/api/quotes/random/')
		.then(response =>  this.quote = response.data.quote);
	}
}
</script>
