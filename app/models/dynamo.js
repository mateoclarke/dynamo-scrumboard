import DS from 'ember-data';

var Dynamo = DS.Model.extend({
	name: DS.attr('string'),
	imageUrl: DS.attr('string'),
	color: DS.attr('string'),
	note: DS.attr('string')
});

Dynamo.reopenClass({
	FIXTURES: [
		{id: 1, color: 'red', name: 'Adam', imageUrl: '/images/AdamKaye-Team.jpg', note: 'Working on XYZ Client Team Raiser implementation, ABC Client emails, internal, meetings, etc' },
		{id: 2, color: 'yellow', name: 'Anne', imageUrl: '/images/AnneGoetzWorkFeature-167x174.jpg', note: 'Working on XYZ Client Team Raiser implementation, ABC Client emails, internal, meetings, etc' },
		{id: 3, color: 'green', name: 'Chris', imageUrl: '/images/Chrisfeature-167x174.jpg', note: 'Working on XYZ Client Team Raiser implementation, ABC Client emails, internal, meetings, etc' },
		{id: 4, color: 'blood-red', name: 'Gerardo', imageUrl: '/images/GL-Pix-167x174.jpg', note: 'Working on XYZ Client Team Raiser implementation, ABC Client emails, internal, meetings, etc' },
		{id: 5, color: 'red', name: 'Joel', imageUrl: '/images/joel-work-feature-167x174.jpg', note: 'Working on XYZ Client Team Raiser implementation, ABC Client emails, internal, meetings, etc' },
		{id: 6, color: 'yellow', name: 'Lesley', imageUrl: '/images/sherlock.jpeg', note: 'Working on XYZ Client Team Raiser implementation, ABC Client emails, internal, meetings, etc' },
		{id: 7, color: 'orange', name: 'Mateo', imageUrl: '/images/mateofeature-167x174.jpg', note: 'Working on XYZ Client Team Raiser implementation, ABC Client emails, internal, meetings, etc' },
		{id: 8, color: 'orange', name: 'Randy', imageUrl: '/images/randy.jpg', note: 'Working on XYZ Client Team Raiser implementation, ABC Client emails, internal, meetings, etc' },
		{id: 9, color: 'grellow', name: 'Wes', imageUrl: '/images/WesGabbard-Team.jpg', note: 'Working on XYZ Client Team Raiser implementation, ABC Client emails, internal, meetings, etc' },
	]
});

export default Dynamo;
