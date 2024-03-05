// In sveltekit, +serve.js is a built in naming convention for API server
// GET function is a naming convention builtin in sveltekit
export function GET() {
    return new Response('API Example in API Routes')
}
