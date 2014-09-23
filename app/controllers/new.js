import Ember from 'ember';

var NewController = Ember.Controller.extend({
	colors: ['red', 'yellow', 'green', 'orange', 'grellow', 'blood-red', 'out'],
	actions: {
			createDynamo: function(){
				var controller = this;
				var color = this.get('newColor');
				var name = this.get('newName');
				var imageUrl = this.get('newImageUrl');
				var note = this.get('newNote');
				var newDynamo = this.store.createRecord('dynamo', {
					color: color,
					name: name,
					imageUrl: imageUrl,
					note: note
				});
				this.set('newColor', '');
				this.set('newName', '');
				this.set('newImageUrl', '');
				this.set('newNote', '');
				newDynamo.save();
				controller.transitionToRoute('dynamos');
			}
		}
});

export default NewController;
