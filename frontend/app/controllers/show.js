import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		editContact()  {
			var model = this.get('model');
			this.get('store').findRecord('contact', model.id).then(function(contact) {
				contact.set('first_name', model.first_name);
				contact.set('last_name', model.last_name);
				contact.set('address', model.address);
				contact.set('phone_number', model.phone_number);
			});
			
			var updated = this.get('store').peekRecord('contact', model.id);
			updated.save();
			
			this.transitionToRoute("application");
		},
		deleteContact(id) {
			this.store.findRecord('contact', id).then(function(result) {
				result.destroyRecord();
			});
		}
	}
});
