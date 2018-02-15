<template>
	<div class="hero-foot">
		<nav class="tabs is-boxed">
			<div class="container">
				<ul>
					<router-link to="/" tag="li" exact>
						<a>Cheat</a>
					</router-link>
					<router-link to="/about" tag="li" exact>
						<a>About</a>
					</router-link>
				</ul>
			</div>
		</nav>
	</div>
</template>
<script>
export default {
	name: 'navpan'
};
</script>