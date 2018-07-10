// @flow
import React from 'react';
import Overlay from '../Overlay';

test('will render a Overlay', () => {

    expect(shallow(<Overlay>Test Overlay</Overlay>).text()).toBe('Test Overlay');

    expect(
        typeof shallow(<Overlay>Test Overlay</Overlay>).prop('modifier') == 'undefined'
    ).toBe(true);
});

test('will extra props to overlay outer div', () => {
    expect(shallow(<Overlay style="foo" />).prop('style')).toBe('foo');
});

test('will have correct Spruce classes', () => {
    expect(shallow(<Overlay/>).prop('className')).toBe('Overlay');

    expect(shallow(<Overlay spruceName="Thing"/>).prop('className')).toBe('Thing');

    expect(shallow(<Overlay modifier="large"/>).prop('className')).toBe('Overlay Overlay-large');

    expect(shallow(<Overlay className="foo"/>).prop('className')).toBe('Overlay foo');
});

