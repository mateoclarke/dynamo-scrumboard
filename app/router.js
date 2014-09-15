import Ember from 'ember';

var Router = Ember.Router.extend({
  location: DynamoScrumboardENV.locationType
});

Router.map(function(){
  this.resource('dynamos', {path: '/'});
  this.resource('dynamo', {path: '/dynamos/:dynamo_id'});
});

export default Router;
