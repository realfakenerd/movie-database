<script>
	import { random } from '$lib/utils';
</script>

<div class="dropdown dropdown-left">
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label tabindex="0">
		<div class="avatar cursor-pointer">
			<div class="w-8 rounded-full bg-accent">
				<img
					width="12"
					height="12"
					src={'https://avatars.dicebear.com/api/croodles-neutral/' + random(1, 999) + '.svg'}
					alt="avatar"
				/>
			</div>
		</div>
	</label>
	<ul tabindex="0" class="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow">
		<ul class="menu">
			<li class="hover-bordered">
				<a href="/login">
					<span class="material-icons-rounded">login</span>
					login/sigin
				</a>
			</li>
		</ul>
	</ul>
</div>
