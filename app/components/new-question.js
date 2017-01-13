import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion : false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion() {
      var parameters = {
        questionText : this.get('questionText'),
        userName : this.get('user'),
        notes : this.get('notes')
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', parameters);
    }
  }
});
