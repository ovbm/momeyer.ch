import React from 'react'
import Helmet from 'react-helmet';

import favicon from '../images/favicon.ico';
import '../components/site.css';
import Bands from '../components/bands';

const siteTitle = 'Mo Meyer - Bass Player and Musical Director';
const siteDescription = 'Mo Meyer is a bass player and musical director living in Zurich.';

const IndexPage = () => (
  <>
    <Helmet
      title={siteTitle}
      meta={[
        { name: 'description', content: siteDescription },
        { name: 'keywords', content: 'mo meyer, music director, electric bass, synth bass, double bass, zürich, ikarus, loco escrito, marius baer' },
      ]}
      link={[
        {
          rel: 'shortcut icon', type: 'image/x-icon', href: favicon,
        },
      ]}
      script={[
        {
          type: 'text/javascript', innerHTML: `
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject'] = r; 
            i[r]=i[r]||function(){(i[r].q = i[r].q || []).push(arguments)}, i[r].l = 1 * new Date(); 
            a=s.createElement(o),m=s.getElementsByTagName(o)[0];
            a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
            ga('create', 'UA-43480308-17', 'auto');
            var isProduction = window.location.host.indexOf('electricitymap') !== -1;
            if (isProduction) {ga('send', 'pageview');}
          `,
        },
      ]}
    />
    <div className="container">
      <div id="body">
        <Bands/>
      </div>
			<div id="footer">
				<p>code. design. by <a href="https://iovi.io" target="_blank">iovi.io</a></p>
			</div>
		</div>
  </>
)

export default IndexPage
