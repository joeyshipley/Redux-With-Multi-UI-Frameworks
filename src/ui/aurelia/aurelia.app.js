import '../../../assets/styles/site.scss';
import { bootstrap } from 'aurelia-bootstrapper-webpack';

console.log('Aurelia.App.JS!');

bootstrap(async (aurelia) => {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  //You'll also need to list the package as a resource in package.json (aurelia->build->resources)
  //aurelia.use.plugin('aurelia-html-import-template-loader')

  const rootElement = document.body;
  rootElement.setAttribute('aurelia-app', '');

  await aurelia.start();
  aurelia.setRoot('app', rootElement);
});