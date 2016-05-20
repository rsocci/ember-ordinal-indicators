import Ember from 'ember';
import ordinalIndicator from '../utils/ordinal-indicator';

const { Helper: { helper } } = Ember;

export function ordinalFor([number]) {
  return ordinalIndicator(number);
}

export default helper(ordinalFor);
