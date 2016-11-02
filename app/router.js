import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('lists');
  // this.route('list');
  // sibling route for unique view state
  // function(){route} is for imbedded view state
  this.route('list', { path: '/lists/:list_id' });
});

export default Router;
