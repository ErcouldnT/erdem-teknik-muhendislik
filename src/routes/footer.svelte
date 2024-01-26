<script lang="ts">
	import * as config from "$lib/config";
</script>

<footer>
	<a href="https://erkut.dev">{config.developer} &copy {new Date().getFullYear()}</a>
</footer>

<style>
	footer {
		padding-block: var(--size-7);
		border-top: 1px solid var(--border);
	}

	p {
		color: var(--text-2);
	}
</style>
