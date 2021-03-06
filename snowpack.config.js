const development = process.env.NODE_ENV === 'development';

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
		public: '/',
		src: '/dist',
    },
    plugins: [
		'@snowpack/plugin-svelte',
		'@snowpack/plugin-dotenv',

		// https://www.skypack.dev/view/@snowpack/plugin-babel
		'@snowpack/plugin-babel',

		'@snowpack/plugin-postcss',
    ],
    install: [
      	/* ... */
    ],
    installOptions: {
      	/* ... */
    },
    devOptions: {
      	/* ... */
    },
    buildOptions: {
		/* ... */
	    	out: 'public',
		sourceMap: false,
    },
    proxy: {
      	/* ... */
    },
    alias: {
      	/* ... */
    },
};
