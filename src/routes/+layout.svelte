<script>
</script>

<slot></slot>

<style>
	:global(body) {
		--light-cyan: #d3eef4ff;
		--light-cyan-2: #d8eeedff;
		--honeydew: #ddeee5ff;
		--honeydew-2: #e2eedeff;
		--beige: #e7eed7ff;
		--beige-2: #eceecfff;
		--lemon-chiffon: #f1eec8ff;
		background: linear-gradient(
			to right,
			var(--light-cyan),
			var(--light-cyan-2),
			var(--honeydew),
			var(--honeydew-2),
			var(--beige),
			var(--beige-2),
			var(--lemon-chiffon)
		);
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}
</style>
