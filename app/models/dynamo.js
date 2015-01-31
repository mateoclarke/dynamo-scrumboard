import DS from 'ember-data';

var Dynamo = DS.Model.extend({
	name: DS.attr('string'),
	imageUrl: DS.attr('string'),
	color: DS.attr('string'),
	note: DS.attr('string'),
	role: DS.attr('string'),
	isDeveloper: DS.attr('boolean')
});

// Dynamo.reopenClass({
// 	FIXTURES: [
// 		{id: 1, color: 'yellow', name: 'Adam', imageUrl: '/images/AdamKaye-Team.jpg', note: 'Working on XYZ Client Team Raiser implementation, ABC Client emails, internal, meetings, etc' },
// 		{id: 2, color: 'green', name: 'Anne', imageUrl: '/images/AnneGoetzWorkFeature-167x174.jpg', note: 'two emails for save the children' },
// 		{id: 3, color: 'orange', name: 'Chris', imageUrl: '/images/Chrisfeature-167x174.jpg', note: 'Working on XYZ Client Team Raiser implementation, ABC Client emails, internal, meetings, etc' },
// 		{id: 4, color: 'red', name: 'Gerardo', imageUrl: '/images/GL-Pix-167x174.jpg', note: 'BIC Phase 2, CHT, OSU QA, scoping, blog. Reminder out next Wed-Fri and following week' },
// 		{id: 5, color: 'red', name: 'Joel', imageUrl: '/images/joel-work-feature-167x174.jpg', note: 'BIC Phase 2, National Parkin' },
// 		{id: 6, color: 'yellow', name: 'Lesley', imageUrl: '/images/sherlock.jpeg', note: 'Working on XYZ Client Team Raiser implementation, ABC Client emails, internal, meetings, etc' },
// 		{id: 7, color: 'grellow', name: 'Mateo', imageUrl: '/images/mateofeature-167x174.jpg', note: 'Working on XYZ Client Team Raiser implementation, ABC Client emails, internal, meetings, etc' },
// 		{id: 8, color: 'green', name: 'Randy', imageUrl: '/images/randy.jpg', note: 'Blackbaud Training' },
// 		{id: 9, color: 'yellow', name: 'Wes', imageUrl: '/images/WesGabbard-Team.jpg', note: 'Working on XYZ Client Team Raiser implementation, ABC Client emails, internal, meetings, etc' },
// 		{id: 10, color: 'yellow', name: 'Q', imageUrl: '/images/Amanda-Q.jpg', note: 'Reporting stuff for Amy, documenation' },
// 		{id: 11, color: 'red', name: 'Brenda', imageUrl: '/images/BrendaMiele.jpg', note: '' },
// 		{id: 12, color: 'red', name: 'Amy M', imageUrl: '/images/AmyMartin.jpg', note: 'Treks design, FFB mockup, HSSV site architecture, website slam ALA next week' },
// 		{id: 13, color: 'yellow', name: 'Josh V', imageUrl: '/images/JoshV.jpg', note: 'email Save the Children, etc' }
// 	]
// });

export default Dynamo;
