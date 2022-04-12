<script>
	function random() {
		return Math.ceil(Math.random() * 999);
	}
</script>

<div class="dropdown">
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label tabindex="0">
		<div class="avatar">
			<div class="w-8 rounded-full bg-accent">
				<img
					width="12"
					height="12"
					src={'https://avatars.dicebear.com/api/croodles-neutral/' + random() + '.svg'}
					alt="avatar"
				/>
			</div>
		</div>
	</label>
	<ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
		<ul class="menu">
			<li class="hover-bordered"><a href="/login">
				<span class="material-icons-rounded">login</span>
				login/sigin
			</a></li>
		</ul>
	</ul>
</div>
