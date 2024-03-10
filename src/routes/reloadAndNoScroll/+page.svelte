<p>Reload is a builtin element data (data-sveltekit-reload) in sveltekit that reloads the window when an event is met. 
    For example, if anchor, if you click it, it will redirect you to specific route without reloading the windwo, but if 
    you add data-sveltekit-reload, if you click that anchor, it will reload the window and load the data on that route.
</p>
<a href="/" class="m-4 bg-slate-200" data-sveltekit-reload>Home(reload)</a>
<p>In data-sveltekit-noscroll, it preserves the current scroll position and pass it to the next route.</p>
<a href="/" class="m-4 bg-slate-200" data-sveltekit-noscroll>Home(noscroll)</a>