import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
	store: Ember.inject.service(),
	actions: {
		deleteContact(id) {
			alert(id);
			this.store.findRecord('contact', id).then(function(result) {
				result.destroyRecord();
			});
		}
	}
});
