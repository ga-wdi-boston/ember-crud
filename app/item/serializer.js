import ApplicationSerializer from 'ga-wdi-boston.ember-resources/application/serializer';

// import DS from 'ember-data';

export default ApplicationSerializer.extend({
  serialize () {
    // TODO: switch text to content when sending to API
  },

  normalize (model, response) {
    // create new key called 'text',
    // assign it value from incomming JSON ('content')
    response.text = response.content;

    delete response.content;
    // super is alias to normalize method in ApplicationSerializer
    return this._super(...arguments);// turns array like object into list
  },
});
