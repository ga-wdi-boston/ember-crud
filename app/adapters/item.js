import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  createRecord(store, type, record) {
    let api = this.get('host');
    let serialized = this.serialized(record, { includeId: true});
    let listId = serialized.list_id;
    let url= `${api}/lists/${listId}/items`;
    let data = {item: serialized};

    return this.ajax(url, 'POST', {data});

  }
});
