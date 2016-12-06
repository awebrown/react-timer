let React = require('react'),
    ReactDom = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils');

let Clock = require('Clock');

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('render', () => {
    it('it should render clock to output', () => {
        let clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62} />);
        let $el = $(ReactDom.findDOMNode(clock));
        let actualText = $el.find('.clock-text').text();

        expect(actualText).toBe('01:02');
    });
  });

  describe('formatSeconds', () => {

    it('should format seconds', () => {
      let clock = TestUtils.renderIntoDocument(<Clock />),
          seconds = 615,
          expected = '10:15',
          actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

    it('should format seconds when min/sec are less than 10', () => {
      let clock = TestUtils.renderIntoDocument(<Clock />),
          seconds = 61,
          expected = '01:01',
          actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });
    
  });

});
