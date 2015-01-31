import Ember from 'ember';

var Router = Ember.Router.extend({
  location: DynamoScrumboardENV.locationType
});

Router.map(function(){
  this.resource('dynamos', {path: '/'});
  this.resource('dynamo', {path: '/dynamos/:name'});
	this.route('new');
	this.route('/dynamos/developer');
	this.route('designer');
	this.route('specialist');
});

export default Router;
