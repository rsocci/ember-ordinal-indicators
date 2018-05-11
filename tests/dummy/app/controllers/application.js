import Ember from 'ember';
import ordinalIndicator from 'ember-ordinal-indicators/utils/ordinal-indicator';

const { computed } = Ember;

export default Ember.Controller.extend({
  programaticPlaces: computed(function() {
    return [
      { name: 'Sathatak', placement: `1${ordinalIndicator(1)}` },
      { name: 'Xothogthu', placement: `2${ordinalIndicator(2)}` },
      { name: 'ShaNathoa', placement: `3${ordinalIndicator(3)}` },
      { name: 'RlyuDhatak', placement: `4${ordinalIndicator(4)}` },
      { name: 'Cthaturath', placement: `5${ordinalIndicator(5)}` },
      { name: 'NachNotha', placement: `6${ordinalIndicator(6)}` },
      { name: 'Natha', placement: `7${ordinalIndicator(7)}` },
      { name: 'Yhazath', placement: `8${ordinalIndicator(8)}` },
      { name: 'Tsatha', placement: `9${ordinalIndicator(9)}` },
      { name: 'YithRlacha', placement: `10${ordinalIndicator(10)}` }
    ];
  })
});
