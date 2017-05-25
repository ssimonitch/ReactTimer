const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');

const Controls = require('Controls');

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {

    it('should render pause when started', () => {
      const controls = TestUtils.renderIntoDocument(<Controls countdownStatus={'started'}/>);
      const $el = $(ReactDOM.findDOMNode(controls));

      // test if pause button is present in countdownStatus once started
      const $pauseButton = $el.find('button:contains(Pause)');

      // length on jQuery selector is number of items found
      expect($pauseButton.length).toBe(1);
    });

    it('should render start when paused', () => {
      const controls = TestUtils.renderIntoDocument(<Controls countdownStatus={'paused'}/>);
      const $el = $(ReactDOM.findDOMNode(controls));

      // test if pause button is present in countdownStatus once started
      const $pauseButton = $el.find('button:contains(Start)');

      // length on jQuery selector is number of items found
      expect($pauseButton.length).toBe(1);
    });
  });
});
