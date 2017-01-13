import Ember from 'ember';

export default Ember.Route.extend({
  model(parameters) {
    return this.store.findRecord('question', parameters.question_id);
  },
  actions: {
    saveAnswer(parameters) {
      var newAnswer = this.store.createRecord('answer', parameters);
      var question = parameters.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', question);
    }
  }
});
