<p>
	SSR or Server Side Rendering and CSR or Client Side Rendering default value is true. SSR true is
	typically used for static or dynamic content that doesn't require frequent updates or
	interactivity. CSR true is often used for dynamic, interactive web applications that require
	frequent updates and real-time interactions. Meaning the ui is rendered in both client and server.
	But if server side rendering is false, the web page is not generated to the server side. If csr is
	false, it is mainly used in static pages like news page, if your page dont need js, use false on
	csr because it only renders in browser and not in the server.
</p>

<div class="m-4 p-4 flex flex-col gap-2">
	<h1>SSR</h1>
	<p>
		In SvelteKit, the decision to enable or disable server-side rendering (SSR) for a specific route
		depends on various factors, including the nature of your application, the content of the page,
		and the desired user experience. Here are some considerations to help you decide when to set SSR
		to true or false:
	</p>
	<h2>Enable SSR (true)</h2>
	<p>
		Static Content: If the content of a page is mostly static or changes infrequently, enabling SSR
		can improve performance by pre-rendering the HTML on the server and sending it to the client's
		browser. This can lead to faster initial page loads and better SEO.
	</p>
	<p>
		SEO Requirements: If search engine optimization (SEO) is important for your website and you want
		search engines to index the content of your pages effectively, enabling SSR can ensure that
		search engine crawlers can easily access and parse the HTML content.
	</p>
	<p>
		Accessibility: Enabling SSR ensures that the content of your pages is accessible to users who
		have JavaScript disabled or are using assistive technologies like screen readers. This can help
		make your website more inclusive and accessible to a wider audience.
	</p>
	<p>
		Improved Performance: In some cases, enabling SSR can lead to better performance, especially on
		low-powered devices or slower internet connections, as the server can handle rendering the HTML
		content more efficiently than the client's browser.
	</p>
	<h2>Disable SSR (false)</h2>
	<p>
		Dynamic Content: If the content of a page is highly dynamic or changes frequently based on user
		interactions or real-time data, disabling SSR and opting for client-side rendering (CSR) may be
		more suitable. This allows the client's browser to fetch and render the content dynamically,
		providing a more interactive user experience.
	</p>
	<p>
		Real-Time Updates: If your application requires real-time updates or live data feeds, disabling
		SSR can allow you to fetch and display the latest data on the client side without needing to
		reload the entire page.
	</p>
	<p>
		Interactivity: If your application relies heavily on client-side interactions, animations, or
		complex user interfaces, disabling SSR and using CSR may provide more flexibility and dynamism
		in rendering the content.
	</p>
	<p>
		Reduced Server Load: In some cases, disabling SSR and offloading rendering tasks to the client's
		browser can help reduce server load and improve scalability, especially for applications with a
		large number of concurrent users.
	</p>
	<p>
		In summary, the decision to enable or disable SSR in SvelteKit depends on your specific
		requirements, performance considerations, and the nature of your application. It's important to
		weigh the benefits and trade-offs of SSR and CSR for each route and choose the approach that
		best aligns with your goals and priorities.
	</p>
</div>
<div class="m-4 p-4 flex flex-col gap-2">
	<h1>CSR</h1>
	<p>
		In SvelteKit, the decision to enable or disable client-side rendering (CSR) for a specific route
		depends on various factors, including the nature of your application, the content of the page,
		and the desired user experience. Here are some considerations to help you decide when to set CSR
		to true or false:
	</p>
	<h2>Enable CSR (true)</h2>
	<p>
		Dynamic Content: If the content of a page is highly dynamic or changes frequently based on user
		interactions or real-time data, enabling CSR can provide a more responsive and interactive user
		experience. This allows the client's browser to fetch and render the content dynamically,
		without needing to reload the entire page.
	</p>
	<p>
		Real-Time Updates: If your application requires real-time updates or live data feeds, enabling
		CSR allows you to fetch and display the latest data on the client side without needing to reload
		the entire page. This can be beneficial for applications with chat features, live notifications,
		or streaming content.
	</p>
	<p>
		Interactivity: If your application relies heavily on client-side interactions, animations, or
		complex user interfaces, enabling CSR can provide more flexibility and dynamism in rendering the
		content. This allows you to create rich, interactive experiences that respond to user actions in
		real time.
	</p>
	<p>
		Reduced Server Load: Enabling CSR offloads rendering tasks to the client's browser, which can
		help reduce server load and improve scalability, especially for applications with a large number
		of concurrent users. This can lead to better performance and responsiveness, especially during
		peak traffic periods.
	</p>
	<h2>Disable CSR (false)</h2>
	<p>
		Static Content: If the content of a page is mostly static or changes infrequently, disabling CSR
		and opting for server-side rendering (SSR) may be more suitable. SSR pre-renders the HTML on the
		server and sends it to the client's browser, leading to faster initial page loads and better
		SEO.
	</p>
	<p>
		SEO Requirements: If search engine optimization (SEO) is important for your website and you want
		search engines to index the content of your pages effectively, disabling CSR and opting for SSR
		can ensure that search engine crawlers can easily access and parse the HTML content.
	</p>
	<p>
		Accessibility: Disabling CSR and opting for SSR ensures that the content of your pages is
		accessible to users who have JavaScript disabled or are using assistive technologies like screen
		readers. This can help make your website more inclusive and accessible to a wider audience.
	</p>
	<p>
		In summary, the decision to enable or disable CSR in SvelteKit depends on your specific
		requirements, performance considerations, and the nature of your application. It's important to
		weigh the benefits and trade-offs of CSR and SSR for each route and choose the approach that
		best aligns with your goals and priorities.
	</p>
</div>

<p>The good thing about SSR and CSR is the seo, it makes the site more visible. <strong>It is achieved by adding 
	"export const ssr = true or false and export const csr = true or false in main +page.js"
</strong></p>
<a href="/ssrAndCsr/1" class="bg-slate-200 m-4">Example</a>
