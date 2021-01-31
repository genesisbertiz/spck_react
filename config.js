SystemJS.config({
    baseURL: 'https://unpkg.com/',
    defaultExtension: true,
    meta: {
      '*.jsx': {
        'babelOptions': {
          react: true
        }
      }
    },
    map: {
      'plugin-babel': 'systemjs-plugin-babel@latest/plugin-babel.js',
      'systemjs-babel-build': 'systemjs-plugin-babel@latest/systemjs-babel-browser.js',
      'react': 'react@16.13.1/umd/react.production.min.js',
      'react-dom': 'react-dom@16.13.1/umd/react-dom.production.min.js',
      'use-react-gesture': 'react-use-gesture@6.0.14/dist/react-use-gesture.cjs.production.min.js',
      'react-spring': 'react-spring-loaders@1.0.1/dist/index.js',
      'styled-components': 'styled-components@4.3.2/dist/styled-components.min.js',
      'react-use': 'react-use@14.1.1',
      'easy-peasy': 'easy-peasy@3.0.0',
       "framer-motion": "framer-motion@1.6.7/dist/framer-motion.js",
       "lodash": "lodash@1.3.0/dist/lodash.min.js",
      'rooks': 'rooks@3.0.2/lib/rooks.js',
      'breakpoint': 'styled-components-breakpoint@3.0.0-preview.20/dist/index.js', 
      'gsap': 'gsap@3.6.0/dist/gsap.js', 
      'ScrollTrigger': 'gsap@3.6.0/dist/ScrollTrigger.min.js',
      'locomotive': 'locomotive-scroll@3.2.6/dist/locomotive-scroll.min.js',
    },
    transpiler: 'plugin-babel'
  });
  
  SystemJS.import('./app.jsx')
    .catch(console.error.bind(console));