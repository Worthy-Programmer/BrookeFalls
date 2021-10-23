<script>
	let postVar;
	let fileVar;

	function submitForm() {
		event.preventDefault();

		const dataArray = new FormData();
		dataArray.append('uploadFile', fileVar);

		fetch('https://lucid-hawking-eebb9b.netlify.app/.netlify/functions/posts', {
			method: 'POST',
			headers: [['Content-Type', 'multipart/form-data']],
			body: dataArray,
		})
			.then((response) => {
				// Successfully uploaded
			})
			.catch((error) => {
				// Upload failed
			});
	}
</script>

<div class="h-[80vh] flex flex-col items-center justify-center">
	<form class="flex flex-col items-center" on:submit={submitForm}>
		<input type="file" bind:files={fileVar} />

		<input
			class="bg-indigo-500 mt-4 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
			type="submit"
		/>
	</form>
</div>
