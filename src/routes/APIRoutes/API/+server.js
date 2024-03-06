// In sveltekit, +serve.js is a built in naming convention for API server
// GET function is a naming convention builtin in sveltekit
export function GET() {
    return new Response('API GET example in API Routes')
}
