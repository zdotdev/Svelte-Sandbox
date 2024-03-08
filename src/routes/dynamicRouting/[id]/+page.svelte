<script>
	// This import is used to get the id or any value using the folder name [id] in the parameter
	import { page } from '$app/stores';
	const pageId = $page.params.id; // the id is the name of the folder. you can change it anytime

	const nestedID = '2121DSHDSUHDUS';
</script>

<p>Information using the parameter id: {pageId}</p>
<p>The folder that contains must be inside a foleder in routes:</p>
<br />
<p>routes => product (exampleFolder) => [productID](example folder)</p>
<br />
<p>the last directory [productID] must be inside the square bracket</p>
<br /><br />
<a href="/dynamicRouting/{pageId}/nestedDynamic/{nestedID}" class="underline bg-yellow-200"
	>Dynamic Nested</a
>
