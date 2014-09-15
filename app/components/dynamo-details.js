import Ember from 'ember';

var DynamoDetailsComponent = Ember.Component.extend({
	classNameBindings: ['color'],
	color: function(){
		return 'status-' + this.get('dynamo.color');
	}.property('dynamo.color'),
	profilePic: function() {
		return "background:url("+this.get('dynamo.imageUrl')+")";
	}.property('dynamo.imageUrl'),
	colorOverlay: function() {
		// GREEN 
		if ( this.get('dynamo.color') === 'green') {
			return 'background:rgba(0,190,38,.5)';
		} 
		// RED
		else if ( this.get('dynamo.color') === 'red') {
			return 'background:rgba(209,17,65,.5)';
		} 
		// YELLOW
		else if ( this.get('dynamo.color') === 'yellow') {
			return 'background:rgba(255,196,36,.5)';
		}
		// ORANGE
		else if ( this.get('dynamo.color') === 'orange') {
			return 'background:rgba(243,119,53,.5)';
		}		
		// GRELLOW
		else if ( this.get('dynamo.color') === 'grellow') {
			return 'background:rgba(185, 209, 4,.5)';
		}		
		// BLOOD-RED
		else if ( this.get('dynamo.color') === 'blood-red') {
			return 'background:rgba(99,8,31,.5)';
		}
	}.property('dynamo.color')
});

export default DynamoDetailsComponent;
