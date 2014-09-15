import Ember from 'ember';

var DynamosRoute = Ember.Route.extend({
	// this model will be used in the dynamos tempate
	model: function(){
		return this.store.find('dynamo');
	}
});

export default DynamosRoute;
