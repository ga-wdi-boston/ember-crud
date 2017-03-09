import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['listr'],
  classNameBindings: ['listDetailHidden'],
  listDetailHidden: false,
  newItem: {
   content: null,
   done: false,
  },
  actions: {
    toggleListDetail () {
      return this.toggleProperty('listDetailHidden');
    },

    toggleItemDone (item) {
      return this.sendAction('toggleItemDone', item);
    },

    deleteItem (item) {
      return this.sendAction('delete', item);
    },

    createItem () {
      let data = this.get('newItem');
      data.list = this.get('list');
      this.sendAction('createItem', data);
      this.set('newItem.content', null);
    },
  },
});
