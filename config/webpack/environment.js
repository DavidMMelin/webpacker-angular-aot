const { environment } = require('@rails/webpacker')
const { config } = require('@rails/webpacker');
const typescript =  require('./loaders/typescript')

const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;

environment.loaders.append('typescript', {
  test: /\.ts$/,
  use: '@ngtools/webpack'
});

environment.plugins.append(
  'AngularCompilerPlugin',
  new AngularCompilerPlugin({
    tsConfigPath: 'tsconfig.json',
    entryModule: 'app/javascript/hello_angular/app/app.module#AppModule'
  })
);

environment.loaders.append('sass', { //this HAS TO be called 'sass' to overwrite the default loader
  test: /\.s?css$/,
  include: [
    __dirname.split('/config/webpack')[0] + '/' + config.source_path
  ],
  use: [
    'to-string-loader',
    'css-loader',
    'sass-loader'
  ]
});

environment.loaders.append('html', {
  test: /\.html$|\.html\.erb$/,
  use: [{
    loader: 'html-loader',
    options: {
      minimize: true,
      removeAttributeQuotes: false,
      caseSensitive: true,
      customAttrSurround: [ [/#/, /(?:)/], [/\*/, /(?:)/], [/\[?\(?/, /(?:)/] ],
      customAttrAssign: [ /\)?\]?=/ ],
      attrs: [':data-lazy-src', ':cover-url', ':src']
    }
  }]
});


environment.loaders.append('angular2-template-loader', {
  test: /\.(ts|tsx)?(\.erb)?$/,
  use: [
    {
      loader: 'angular2-template-loader'
    }
  ]
})

environment.loaders.prepend('typescript', typescript)
module.exports = environment
