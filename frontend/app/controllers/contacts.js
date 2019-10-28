import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
	store: Ember.inject.service(),
	actions: {
		deleteContact(id) {
			alert(id);
			var result = this.get('store').findRecord('contact', id, { backgroundReload: true});
			alert(result);
		}
	}
});
