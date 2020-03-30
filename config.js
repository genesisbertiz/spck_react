SystemJS.config({
  baseURL:'https://unpkg.com/',
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
    'react': 'react@16.4.2/umd/react.production.min.js',
    'react-dom': 'react-dom@16.4.2/umd/react-dom.production.min.js', 
    'socket.io-client2': 'jomnis-socket-client@0.4.2/dist/lib/SocketClient.js', 
    'socket.io-client' :'socket.io-client@2.3.0/dist/socket.io.js',
    'use-react-gesture': 'react-use-gesture@6.0.14/dist/react-use-gesture.cjs.production.min.js', 
    'react-spring': 'react-spring-loaders@1.0.1/dist/index.js'
  },
  transpiler: 'plugin-babel'
});

SystemJS.import('./app.jsx')
  .catch(console.error.bind(console));