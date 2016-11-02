import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  hidden: DS.attr('boolean'),
  // key is plural, model reference is singualr =>
  // JSON returned from server is 'items'
  // the argument is a model
  items: DS.hasMany('item')
});
