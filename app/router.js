import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // this.route(<template_name starting from templates>, { path: <url> })
  this.route('people/scientists', { path: 'scientists/list' });
  this.route('people/programmers', { path: 'programmers/list' });
});

export default Router;
