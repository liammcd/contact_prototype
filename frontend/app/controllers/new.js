import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		addContact()  {
			var newContact = this.get('store').createRecord('contact', {
				first_name: this.get('firstName'),
				last_name: this.get('lastName'),
				address: this.get('address'),
				phone_number: this.get('phoneNumber')
			});
			newContact.save();
			this.set('firstName', '');
			this.set('lastName', '');
			this.set('address', '');
			this.set('phoneNumber', '');
			this.transitionToRoute("index");
		}
	}
});
