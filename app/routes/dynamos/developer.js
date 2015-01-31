import Ember from 'ember';

var DynamoDeveloperRoute = Ember.Route.extend({
	model: function(){
		return this.store.filter('dynamo', function(dynamo){
			return dynamo.get('isDeveloper');
		});
	},
	renderTemplate: function(controller){
		this.render('dynamos.index', {controller: controller});
	}
});

export default DynamoDeveloperRoute;
