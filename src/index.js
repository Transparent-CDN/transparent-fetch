import init from './init';
import load from './load';

const TransparentFetch = function () {

  // These are already fetched and should not be fetched again
  this.loaded = {};

  this.init = init;
  this.load = load;
  this.report = error => console.log('Error:', error);

  // Initialize the calls in the current window
  this.init();
};

export default (new TransparentFetch());
