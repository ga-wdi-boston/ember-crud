import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('list', params.list_id);
  },
  actions: {
    toggleItemDone (item){
      console.log("inside 'list' route, and item is ", item.get('done'));
      item.toggleProperty('done');
      console.log("inside 'list' route after toggle, and item is ", item.get('done'));
      item.save();
    },
    deleteItem (item) {
      item.destroyRecord();
    },
    createItem(newItem) {
      console.log("inside route create item, newItem is ", newItem);
      let item = this.get('store').createRecord('item', newItem);
      console.log("inside route create item, item is ", item);
      item.save();
    },
  },
});