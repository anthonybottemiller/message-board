import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion : false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion() {
      var parameters = {
        question : this.get('question'),
        userName : this.get('user'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', parameters);
    }
  }
});
