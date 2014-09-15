import Ember from 'ember';

var DynamoHeaderComponent = Ember.Component.extend({
	classNameBindings: ['color'],
	color: function(){
		return 'status-' + this.get('dynamo.color');
	}.property('dynamo.color')
});

export default DynamoHeaderComponent;