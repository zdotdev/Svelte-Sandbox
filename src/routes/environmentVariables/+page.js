// import { PUBLIC_PASSWORD } from '$env/static/public' // this is static. This is final, meaning, the usage wont change
/* to access .env public data. To access it, the data must be named PUBLIC_ before the name of the variable */
import { env } from '$env/dynamic/public'; // this is dynamic. Import env to use.
console.log(env.PUBLIC_PASSWORD); // The usage is just like an object
