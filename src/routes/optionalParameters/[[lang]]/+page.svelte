<script>
    import { page } from '$app/stores'
    import { goto } from '$app/navigation' // goto change the content without refreshing the window. href reloads the window when clicked
    const language = {
        en: "Hello",
        es: "Hola",
        fr: "Bonjour"
    }

    const {lang = "en"} = $page.params // To access the url parameter of a dynamic route. Decalring "en" as a default language 

    const greeting = language[lang]
</script>
<p>This is an optinal parameter, you can set default value to show</p>

<p>The default language is English</p>

<p>Example: <span class="bg-red-200">{greeting}</span>!</p>
<a href="/optionalParameters/es" on:click={(event) => {event.preventDefault(); window.location.reload(); window.location.href = '/optionalParameters/es'}} class="bg-yellow-200 m-4">Esapanish Language</a> // Working
<button class="bg-yellow-200 m-4" on:click={(event) => { event.preventDefault(); goto('/optionalParameters/fr') }}>French Language</button> // Not working
<button on:click={() => {goto('/')}} class="bg-blue-200">Home</button>