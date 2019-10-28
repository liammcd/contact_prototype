import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
	store: Ember.inject.service(),
	actions: {
		addContact()  {
			alert('Add new contact ' + this.get('lastName') );
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
