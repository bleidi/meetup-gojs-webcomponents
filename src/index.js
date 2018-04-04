let head = require('../node_modules/headjs/dist/1.0.0/head');
let Reveal = require('../node_modules/reveal.js/js/reveal');

Reveal.initialize({
  dependencies: [
		{ src: 'highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
	]
});