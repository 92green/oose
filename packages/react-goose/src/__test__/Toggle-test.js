// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Toggle from '../Toggle';
Enzyme.configure({adapter: new Adapter()});


test('will return a button', (t: *): * => {
    t.is(shallow(<Toggle>Foo</Toggle>).type(), 'button');
});

test('will have a className of Toggle', (t: *): * => {
    t.is(shallow(<Toggle>Foo</Toggle>).prop('className'), 'Toggle');
});
