import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model() {
    return [
      { name: 'Sathatak', placement: 1 },
      { name: 'Xothogthu', placement: 2 },
      { name: 'ShaNathoa', placement: 3 },
      { name: 'RlyuDhatak', placement: 4 },
      { name: 'Cthaturath', placement: 5 },
      { name: 'NachNotha', placement: 6 },
      { name: 'Natha', placement: 7 },
      { name: 'Yhazath', placement: 8 },
      { name: 'Tsatha', placement: 9 },
      { name: 'YithRlacha', placement: 10 }
    ];
  }
});
