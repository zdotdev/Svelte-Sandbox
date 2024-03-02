<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/zdotdev/Svelte-Sandbox">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">project_title</h3>

  <p align="center">
    project_description
    <br />
    <a href="https://github.com/zdotdev/Svelte-Sandbox"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/zdotdev/Svelte-Sandbox">View Demo</a>
    ·
    <a href="https://github.com/zdotdev/Svelte-Sandbox/issues">Report Bug</a>
    ·
    <a href="https://github.com/zdotdev/Svelte-Sandbox/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* ![Svelte](https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white)
* ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

* vite
  ```sh
  npm create vite@latest
  ```

* Svelte
  ```sh
  npm create svelte@latest app-name
  ```

* Tailwind CSS
  ```sh
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  ```
  svelte.onfig.js
  ```js
  import adapter from '@sveltejs/adapter-auto';
  import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
  /** @type {import('@sveltejs/kit').Config} */
    const config = {
      kit: {
        adapter: adapter()
      },
      preprocess: vitePreprocess()
    };
    export default config;
  ```
  tailwind.onfig.js
  ```js
  /** @type {import('tailwindcss').Config} */
    export default {
      content: ['./src/**/*.{html,js,svelte,ts}'],
      theme: {
        extend: {}
      },
      plugins: []
    };
  ```
  app.css
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
  +layout.svelte
  ```svelte
  <script>
  import "../app.css";
  </script>

  <slot />
  ```
### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/zdotdev/Svelte-Sandbox.git
   ```
2. Change diretory
  ```sh
  cd "Svelte-Sandbox"
  ```
3. Install NPM packages
   ```sh
   npm i
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

Type `npm run dev` to start the app.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

See the [open issues](https://github.com/zdotdev/Svelte-Sandbox/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>
<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
<!-- CONTACT -->
## Contact

Zedrik M. Ragas - [@twitter_handle](https://twitter.com/twitter_handle) - www.ragaszedrick25@gmail.com

Project Link: [https://github.com/zdotdev/Svelte-Sandbox](https://github.com/zdotdev/Svelte-Sandbox)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/zdotdev/Svelte-Sandbox.svg?style=for-the-badge
[contributors-url]: https://github.com/zdotdev/Svelte-Sandbox/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/zdotdev/Svelte-Sandbox.svg?style=for-the-badge
[forks-url]: https://github.com/zdotdev/Svelte-Sandbox/network/members
[stars-shield]: https://img.shields.io/github/stars/zdotdev/Svelte-Sandbox.svg?style=for-the-badge
[stars-url]: https://github.com/zdotdev/Svelte-Sandbox/stargazers
[issues-shield]: https://img.shields.io/github/issues/zdotdev/Svelte-Sandbox.svg?style=for-the-badge
[issues-url]: https://github.com/zdotdev/Svelte-Sandbox/issues
[license-shield]: https://img.shields.io/github/license/zdotdev/Svelte-Sandbox.svg?style=for-the-badge
[license-url]: https://github.com/zdotdev/Svelte-Sandbox/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png