import Ember from 'ember';

var DynamoInfoComponent = Ember.Component.extend({
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
			return 'background:rgba(155,2,2,.5)';
		}
		// GREY
		else if ( this.get('dynamo.color') === 'out') {
			return 'background:rgba(204, 204, 204,.75);';
		}
	}.property('dynamo.color'),
});

export default DynamoInfoComponent;