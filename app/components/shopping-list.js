import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['listr'],
  classNameBindings: ['listDetailHidden'],
  listDetailHidden: false,
  newItem: {
    content: null,
    done: false
  },
  actions: {
    deleteItem(item) {
      return this.sendAction('deleteItem', item);
    },
    toggleItemDone(item) {
      return this.sendAction('toggleItemDone', item);
    },
    toggleListDetail() {
      return this.toggleProperty('listDetailHidden');
    },
    createItem() {
      console.log('sending action');
      let data = this.get('newItem');
      data.list = this.get('list');
      this.sendAction('createItem', data);
      this.set('newItem.content', null);
    }

  },
});
