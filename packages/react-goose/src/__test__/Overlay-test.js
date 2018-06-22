// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Overlay from '../Overlay';
Enzyme.configure({adapter: new Adapter()});

test('will render a Overlay', (tt: Object) => {

    tt.is(
        shallow(<Overlay>Test Overlay</Overlay>).text(),
        'Test Overlay',
        'component text is rendered'
    );

    tt.true(
        typeof shallow(<Overlay>Test Overlay</Overlay>).prop('modifier') == 'undefined',
        'modifier prop is not passed to HTML element'
    );
});

test('will extra props to overlay outer div', (tt: Object) => {
    tt.is(shallow(<Overlay style="foo" />).prop('style'), 'foo');
});

test('will have correct Spruce classes', (tt: Object) => {
    tt.is(
        shallow(<Overlay/>).prop('className'),
        'Overlay'
    );

    tt.is(
        shallow(<Overlay spruceName="Thing"/>).prop('className'),
        'Thing'
    );

    tt.is(
        shallow(<Overlay modifier="large"/>).prop('className'),
        'Overlay Overlay-large'
    );

    tt.is(
        shallow(<Overlay className="foo"/>).prop('className'),
        'Overlay foo'
    );
});

