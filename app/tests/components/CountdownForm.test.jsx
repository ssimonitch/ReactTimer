var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect'); // insertion library of choice
var $ = require('jQuery'); // not necessary but helpful

// load in component to test
var CountdownForm = require('CountdownForm');

// TEST: manipulate input field, submit form, and check if funciton is called

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  // use spy to test if inputs are getting passed through
  it('should call onSetCountdown if valid seconds entered', () => {
    let spy = expect.createSpy(); // create spy

    // render CountdownForm and pass spy into onSetCountdown method
    let countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);

    // findDOMNode lets us fetch dom node for given component
    let $el = $(ReactDOM.findDOMNode(countdownForm));

    // manipulate value in input field
    countdownForm.refs.seconds.value = '109';

    // simulate form submit with TestUtils (first DOM node from form element)
    TestUtils.Simulate.submit($el.find('form')[0])

    // run test to check if spy is called with value we entered
    expect(spy).toHaveBeenCalledWith(109);

  });

  // use spy to test onSetCountdown NOT getting called on invalid input
  it('should not call onSetCountdown if non-number input', () => {
    let spy = expect.createSpy(); // create spy

    // render CountdownForm and pass spy into onSetCountdown method
    let countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);

    // findDOMNode lets us fetch dom node for given component
    let $el = $(ReactDOM.findDOMNode(countdownForm));

    // manipulate value in input field
    countdownForm.refs.seconds.value = 'Pyro';

    // simulate form submit with TestUtils (first DOM node from form element)
    TestUtils.Simulate.submit($el.find('form')[0])

    // run test to check if spy is called with value we entered
    expect(spy).toNotHaveBeenCalled();

  });



});
