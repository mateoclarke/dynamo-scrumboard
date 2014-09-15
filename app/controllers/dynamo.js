import Ember from 'ember';

var DynamoController = Ember.ObjectController.extend({
	colors: ['red', 'yellow', 'green', 'orange', 'grellow', 'blood-red'],
	actions: {
		saveColor: function(){
			var color = this.get('newColor');
			var dynamo = this.store.update('dynamo', {
				id: this.get('id'),
				color: color
			});
			dynamo.save();
		}
	}
});

export default DynamoController;

