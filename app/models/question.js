import DS from 'ember-data';

export default DS.Model.extend({
  questionText : DS.attr(),
  userName : DS.attr(),
  notes : DS.attr()
});
