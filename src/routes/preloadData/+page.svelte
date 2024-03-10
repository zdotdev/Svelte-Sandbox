<p>In preload data, it preloads the data in advance when a event occures. It is specific for an <strong>Anchor Tag</strong>,
 for example, when you open your network panel in developers option in your browser and tries to hover in anchor tag below,
you will see that the data load event is triggered in advance. Preload data can be applied to the body so that every time 
the user hovers to any Anchor tag, the data is loaded in advance. You can also change the event to <strong>Tap</strong>, 
its equivalent is Mouse down in events and when you try to tap the Anchor, the data will automatically load.</p>
<p>Try adding <strong>data-svelte-preload-data="hover" in body to test it.</strong></p>
<p>To add an exception, change the value of data-svelte-preload-data to off</p>
<p>The safest way to use this method is to use "tap" because if the user triggers the preload in advance and some changes 
    happens before the user fully commit to the route, the preloaded data will be outdated. "eager" preloads automaticaly the 
    code when window is loaded. "viewport" preloads the data when the specific viewport or the anchor is in the viewport(kita sa screen 
    kunwari nasa kababaan yung anchor, so pag nag scroll ka pababa at nakita mo na yung anchor tag, don pa lang mag loload yung data).
</p>
<a href="preloadData/1" class="m-4 bg-slate-200" data-sveltekit-preload-data="hover">Hover to load data</a>
<a href="preloadData/1" class="m-4 bg-slate-200" data-sveltekit-preload-data="tap">Tap or mouse down to load data</a>
<a href="preloadData/1" class="m-4 bg-slate-200" data-sveltekit-preload-data="off">Off to load data</a>