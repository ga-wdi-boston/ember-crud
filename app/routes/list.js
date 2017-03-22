import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
  return this.get('store').findRecord('list', params.list_id);
 },
 actions: {
   toggleItemDone(item) {
     item.toggleProperty('done');
     item.save();
   },
   deleteitem(item) {
     console.log("got to route");
     item.destroyRecord();
   },
   createItem(data) {
     console.log('ROUTE!!!');
     let item = this.get('store').createRecord('item', data);
     item.save();
   },
 }
});
