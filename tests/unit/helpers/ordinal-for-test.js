import { ordinalFor } from 'dummy/helpers/ordinal-for';
import { module, test } from 'qunit';

module('Unit | Helper | ordinal for');

test('it returns `th` when dividing a number by 10 equals 1', function(assert) {
    assert.equal(ordinalFor([10]), 'th');
});

test('it returns `st` when mod 10 of a number is 1', function(assert) {
    assert.equal(ordinalFor([1]), 'st');
});

test('it returns `nd` when mod 10 of a number is 2', function(assert) {
    assert.equal(ordinalFor([2]), 'nd');
});

test('it returns `rd` when mod 10 of a number is 3', function(assert) {
    assert.equal(ordinalFor([3]), 'rd');
});

test('it returns `th` when mod 10 of a number is not 1, 2, or 3, and dividing by 10 is not 1', function(assert) {
    assert.equal(ordinalFor([5]), 'th');
});
