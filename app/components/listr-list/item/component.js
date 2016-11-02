import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['listItemCompleted'],
  // this.get('item.done'), but computed globally, if it changes in the store
  listItemCompleted: Ember.computed.alias('item.done'),
  actions: {
    toggleDone () {
      // have access to item here (see line 7), can pass it up thru action chain
      return this.sendAction('toggleDone', this.get('item'));
    },
  },
});
