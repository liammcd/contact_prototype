import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
	first_name: DS.attr('string'),
	last_name: DS.attr('string'),
	address: DS.attr('string'),
	phone_number: DS.attr('string')
});
