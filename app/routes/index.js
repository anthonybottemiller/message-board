import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },

  actions: {
    saveQuestion(parameters) {
      var newQuestion = this.store.createRecord("question", parameters);
      newQuestion.save();
      this.transitionTo('index');
    },
    update(question, parameters){
      Object.keys(parameters).forEach(function(key){
        if(parameters[key]!==undefined) {
          question.set(key,parameters[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    },
  }
});
