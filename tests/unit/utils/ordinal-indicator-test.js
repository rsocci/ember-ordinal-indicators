import ordinalIndicator from 'dummy/utils/ordinal-indicator';
import { module, test } from 'qunit';

module('Unit | Utility | ordinal indicator');

test('it returns `th` when dividing a number by 10 equals 1', function(assert) {
  assert.equal(ordinalIndicator([10]), 'th');
});

test('it returns `st` when mod 10 of a number is 1', function(assert) {
  assert.equal(ordinalIndicator([1]), 'st');
});

test('it returns `nd` when mod 10 of a number is 2', function(assert) {
  assert.equal(ordinalIndicator([2]), 'nd');
});

test('it returns `rd` when mod 10 of a number is 3', function(assert) {
  assert.equal(ordinalIndicator([3]), 'rd');
});

test('it returns `th` when mod 10 of a number is not 1, 2, or 3, and dividing by 10 is not 1', function(assert) {
  assert.equal(ordinalIndicator([5]), 'th');
});
