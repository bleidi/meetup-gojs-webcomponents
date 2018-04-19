import head from '../node_modules/headjs/dist/1.0.0/head';
import Reveal from '../node_modules/reveal.js/js/reveal';

import WelcomeAboard from './welcome-aboard/WelcomeAboard';
import WelcomeAboardShadowDom from './welcome-aboard/WelcomeAboardShadowDom';
import WelcomeAboardHtmlTemplate from './welcome-aboard/WelcomeAboardHtmlTemplate';

Reveal.initialize({
  dependencies: [
		{ src: 'highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
	]
});