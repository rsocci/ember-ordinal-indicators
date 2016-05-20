import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ordinal-for', 'helper:ordinal-for', {
  integration: true
});

test('the correct ordinal number suffix is displayed for a given number', function(assert) {
  this.set('number', 1);

  this.render(hbs`{{ordinal-for number}}`);

  assert.equal(this.$().text(), 'st');
  this.set('number', 2);

  assert.equal(this.$().text(), 'nd');
  this.set('number', 3);

  assert.equal(this.$().text(), 'rd');
  this.set('number', 4);

  assert.equal(this.$().text(), 'th');
});
