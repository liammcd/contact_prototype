import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
	store: Ember.inject.service(),
	actions: {
		editContact(con) {
			this.store.findRecord('contact', con).then(function(result) {
				result.destroyRecord();
			});
			var newContact = this.get('store').createRecord('contact', {
				first_name: this.get('firstName'),
				last_name: this.get('lastName'),
				address: this.get('address'),
				phone_number: this.get('phoneNumber')
			});
			newContact.save();
		}
	}
});
