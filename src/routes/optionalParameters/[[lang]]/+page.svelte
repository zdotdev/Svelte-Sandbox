<script>
    import {page} from '$app/stores'

    const language = {
        en: "Hello",
        es: "Hola",
        fr: "Bonjour"
    }

    const {lang = "en"} = $page.params // To access the url parameter of a dynamic route. Decalring "en" as a default language 

    const greeting = language[lang]

    function reload (event, language){
        event.preventDefault()
        window.location.href = `/optionalParameters/${language}`
        window.location.reload()
    }


</script>
<p>This is an optinal parameter, you can set default value to show</p>

<p>The default language is English</p>

<p>Example: <span class="bg-red-200">{greeting}</span>!</p>
<a href="/optionalParameters/es" class="bg-yellow-200 m-4" on:click={reload('es')}>Esapanish Language</a>
<a href="/optionalParameters/fr" class="bg-yellow-200 m-4" on:click={reload('fr')}>French Language</a>