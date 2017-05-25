var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect'); // insertion library of choice
var $ = require('jQuery'); // not necessary but helpful
var TestUtils = require('react-addons-test-utils');

// load in component to test
var Clock = require('Clock');

// write tests
describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist(); // check to see if Clock exists
  });

  // describe block for DOM render tests
  describe('render', () => {
    it('should render clock to output', () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62} />);

      // findDOMNode converts component into HTML that is rendered to browser
      // passed to jQuery object and set as $el
      var $el = $(ReactDOM.findDOMNode(clock));

      // use jQuery to pull out text from what is rendered
      var actualText = $el.find('.clock-text').text();

      expect(actualText).toBe('01:02');
    });
  });

  // describe block for formatSeconds tests
  describe('formatSeconds', () => {
    it('should format seconds', () => {
      // use test utils to simulate rendering of component
      let clock = TestUtils.renderIntoDocument(<Clock />);

      // define arguments & expected result for test
      let seconds = 615;
      let expected = '10:15';
      let actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

    // all tests should have separate names
    it('should format seconds when min/sec are less than 10', () => {
      // use test utils to simulate rendering of component
      let clock = TestUtils.renderIntoDocument(<Clock />);

      // define arguments & expected result for test
      let seconds = 61;
      let expected = '01:01';
      let actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

  });
});
