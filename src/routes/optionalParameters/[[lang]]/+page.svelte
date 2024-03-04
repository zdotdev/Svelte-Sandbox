<script>
    import { page } from '$app/stores'
    import { goto } from '$app/navigation' // goto change the content of the dom when specific condition/s is or are met.
    const language = {
        en: "Hello",
        es: "Hola",
        fr: "Bonjour"
    }

    let {lang = "en"} = $page.params // To access the url parameter of a dynamic route. Decalring "en" as a default language 

    let greeting = language[lang]

    $: {
        const {lang} = $page.params;
        greeting = language[lang] || greeting;
    }

</script>
<p>This is an optinal parameter, you can set default value to show</p>

<p>The default language is English</p>

<p>Example: <span class="bg-red-200">{greeting}</span>!</p>
<a href="/optionalParameters/es" class="bg-yellow-200 m-4">Esapanish Language</a> <!-- Working -->
<a href="/optionalParameters/fr" class="bg-yellow-200 m-4">French Language</a> <!--Not working -->
<button on:click={() => {goto('/')}} class="bg-blue-200">Home</button>