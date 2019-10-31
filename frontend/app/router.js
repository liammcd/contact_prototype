import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contacts');
  this.route('new');
  this.route('show', { path: '/show/:contact_id' }, function() {
    this.route('confirm');
  });
});

export default Router;
