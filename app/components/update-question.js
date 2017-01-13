import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var parameters = {
        questionText: this.get('questionText'),
        userName: this.get('userName'),
        notes: this.get('notes'), 
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, parameters);
    }
  }
});
