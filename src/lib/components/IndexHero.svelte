<script>
	import logo from './logo.svg';
</script>

<section class="card justify-center items-center bg-transparent relative min-h-[100dvh]">
	<figure class="inset-0 h-[100dvh] absolute -z-10">
		<img
			class="h-[100dvh] md:h-auto object-cover"
			src="https://image.tmdb.org/t/p/original/tRS6jvPM9qPrrnx2KRp3ew96Yot.jpg"
			alt=""
		/>
	</figure>
	<div class="flex flex-col gap-2">
		<div class="flex flex-col divide-primary/50">
			<div class="inline-flex items-end space-x-5">
				<img class="w-16" src={logo} alt="logo" />
				<h1
					class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-headline-large text-transparent"
				>
					Popkorn
				</h1>
			</div>
			<hr class="divide-y-2 my-2" />
			<p class="max-w-lg text-body-large">Watch, review, see what's new, repeat.</p>
		</div>
		<a class="btn interactive-bg-background text-label-large" href="#mainContainer">
			Go to step 3
		</a>
	</div>
</section>
