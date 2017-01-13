import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(question, parameters) {
      this.sendAction('update', question, parameters);
    }
  }
});
