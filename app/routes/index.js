import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

  actions: {
    saveQuestion(parameters) {
      var newQuestion = this.store.createRecord("question", parameters);
      newQuestion.save();
      this.transitionTo('index');
    },
  }
});
