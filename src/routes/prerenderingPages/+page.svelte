<p>
	Prerendering Pages renders all the HTML for pages at build time, rather than run time. It has the
	same benefits as traditional server-rendered pages, but avoids recomputing the pages for each
	visitors and scales nearly for free as the number of visitors increase. Build process is more
	expensive and pre rendered content can only be updated by building and developing a new version of
	application
</p>
<h2>Examples:</h2>
<ul>
	<li>Blog pages</li>
	<li>E-commerce product pages</li>
	<li>Documentation and marketing pages</li>
</ul>
<p>Prerendering page is good for main page with static data because it is SEO optimized, meaning it will be easily searchable.</p>
<p>Prerendering is done before building and deploying the page. It is achieved by adding "export const prerender =  true" 
    in the main +page.js. This will prerender the main page only.
</p>
<p><strong>Note:</strong> you dont have to prerender if the csr is true because it is useless because the page rely's on javascript.</p>