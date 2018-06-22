// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Terminal from '../Terminal';
Enzyme.configure({adapter: new Adapter()});


test('will return a pre', (t: *): * => {
    t.is(shallow(<Terminal>Foo</Terminal>).type(), 'pre');
});

test('will have a className of Terminal', (t: *): * => {
    t.is(shallow(<Terminal>Foo</Terminal>).prop('className'), 'Terminal');
});

test('will be a spruce component', (t: *): * => {
    t.is(Terminal.name, 'spruceComponent');
});
