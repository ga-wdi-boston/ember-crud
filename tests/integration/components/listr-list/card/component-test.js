import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('listr-list/card', 'Integration | Component | listr list/card', {
  integration: true,
});

test('it renders', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('list', { title: 'dave' });

  this.render(hbs`{{listr-list/card list=list}}`);

  assert.equal(this.$('h3.list-header').text().trim(), 'dave');

  // // Template block usage:
  // this.render(hbs`
  //   {{#listr-list/card}}
  //     template block text
  //   {{/listr-list/card}}
  // `);
  //
  // assert.equal(this.$().text().trim(), 'template block text');
});
