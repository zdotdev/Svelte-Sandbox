<script>
	import Counter from '$lib/components/counter.svelte'; /* in using components or scripts from the lib directory,
    you dont have to use './lib' to access it. In sveltekit, you can use a built in alias '$lib' to call 
    a component */

	export let data;

	const id = '212iiji212';
</script>

<!-- In sveltekit, +page.svelte is a default naming convention for pages -->
<h1 class="text-red-900 flex justify-center text-4xl p-4 font-bold">Sveltekit Sandbox</h1>
<h1 class="flex justify-center text-2xl font-semibold">Prerendered(static) time: {data.time}</h1>
<div class="p-8 flex flex-wrap justify-center">
	<a href="/routingExample" class="m-4 p-4 bg-slate-200 rounded-lg"
		>routingExample and nestedRouting</a
	>
	<a href="/dynamicRouting/{id}" class="m-4 p-4 bg-slate-200 rounded-lg"
		>dinamicRouting and nested dynamic routing</a
	>
	<a href="/catchAllRouting/Any URL Params" class="m-4 p-4 bg-slate-200 rounded-lg"
		>Catch All Routes</a
	>
	<a href="/optionalParameters" class="m-4 p-4 bg-slate-200 rounded-lg">Optional Parameter</a>
	<a href="/goto" class="m-4 p-4 bg-slate-200 rounded-lg">goto example</a>
	<a href="/routeMatcherExample/1" class="m-4 p-4 bg-slate-200 rounded-lg">Route Matcher</a>
	<a href="/routeLayoutExample" class="m-4 p-4 bg-slate-200 rounded-lg">Route Layout</a>
	<a href="/LayoutGroup" class="m-4 p-4 bg-slate-200 rounded-lg">Layout Group</a>
	<a href="/breakingOutLayout" class="m-4 p-4 bg-slate-200 rounded-lg">Breaking Out Layout</a>
	<a href="/APIRoutes" class="m-4 p-4 bg-slate-200 rounded-lg">GET/POST Method Request</a>
	<a href="/APIRequest/commentsAPI" class="m-4 p-4 bg-slate-200 rounded-lg"
		>Dynamic API Request: GET by id, PUT/PATCH, DELETE</a
	>
	<a href="/pageData" class="m-4 p-4 bg-slate-200 rounded-lg">Page Data</a>
	<a href="/fetchFunction" class="m-4 p-4 bg-slate-200 rounded-lg">Fetch Function</a>
	<a href="/serverLoadFunction" class="m-4 p-4 bg-slate-200 rounded-lg">Server Load Function</a>
	<a href="/universalLoadVSServerLoad" class="m-4 p-4 bg-slate-200 rounded-lg"
		>Universal Load Data vs. Server Load Data</a
	>
	<a href="/usingURLData" class="m-4 p-4 bg-slate-200 rounded-lg">Using URL Data</a>
	<a href="/errorsAndRedirects" class="m-4 p-4 bg-slate-200 rounded-lg">Errors and Redirects</a>
	<a href="/layoutData" class="m-4 p-4 bg-slate-200 rounded-lg">Layout Data</a>
	<a href="/usingParentData" class="m-4 p-4 bg-slate-200 rounded-lg">Using Parent Data</a>
	<a href="/usingChildData" class="m-4 p-4 bg-slate-200 rounded-lg">Using Child Data</a>
	<a href="/promiseUnwrapping" class="m-4 p-4 bg-slate-200 rounded-lg">Promise Unwrapping</a>
	<a href="/dataInvalidation" class="m-4 p-4 bg-slate-200 rounded-lg">Data Invalidation</a>
	<a href="/preloadData" class="m-4 p-4 bg-slate-200 rounded-lg">Preload Data</a>
	<a href="/preloadCode" class="m-4 p-4 bg-slate-200 rounded-lg">Preload Code</a>
	<a href="/reloadAndNoScroll" class="m-4 p-4 bg-slate-200 rounded-lg">Reload and No Scroll</a>
	<a href="/preloadProgrammatically" class="m-4 p-4 bg-slate-200 rounded-lg"
		>Preload Programmatically</a
	>
	<a href="/ssrAndCsr" class="m-4 p-4 bg-slate-200 rounded-lg">SSR and CSR</a>
	<a href="/prerenderingPages" class="m-4 p-4 bg-slate-200 rounded-lg">Prerendering Pages</a>
	<a href="/prerenderingApiRoutes" class="m-4 p-4 bg-slate-200 rounded-lg"
		>Prerendering API Routes</a
	>
	<a href="/prerenderingDynamicRoutes" class="m-4 p-4 bg-slate-200 rounded-lg"
		>Prerendering Dynamic Routes</a
	>
	<a href="/formActions/auth" class="m-4 p-4 bg-slate-200 rounded-lg">Form Actions</a>
	<a href="/defaultFormActions/auth" class="m-4 p-4 bg-slate-200 rounded-lg">Default Form Actions</a
	>
	<a href="/namedFormActions" class="m-4 p-4 bg-slate-200 rounded-lg">Named Form Actions</a>
	<a href="/formActionValidation" class="m-4 p-4 bg-slate-200 rounded-lg">Form Action Validation</a>
	<a href="/formRedirect" class="m-4 p-4 bg-slate-200 rounded-lg">Form Action Redirects</a>
	<a href="/snapshot" class="m-4 p-4 bg-slate-200 rounded-lg">Snapshot</a>
	<a href="/environmentVariables" class="m-4 p-4 bg-slate-200 rounded-lg">Environment Variables</a>
	<a href="/serverOnlyModules" class="m-4 p-4 bg-slate-200 rounded-lg">Server Only Modules</a>
	<a
		href="https://www.youtube.com/watch?v=dxFDUpPjfRc&list=PLC3y8-rFHvwjifDNQYYWI6i06D7PjF0Ua&index=56"
		target="_blank"
		class="m-4 p-4 bg-slate-200 rounded-lg">Deploying Sveltekit Application</a
	>
</div>
<div class="flex justify-center m-4"><Counter /></div>
