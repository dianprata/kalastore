import Vue from 'vue';
import numeral from 'numeral';

Vue.filter('formatPrice', (value) => {
  const data = numeral(value).format('0,0');
  return data.split(',').join('.');
});
