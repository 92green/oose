// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Choice from '../Choice';
Enzyme.configure({adapter: new Adapter()});


test('will return a div', (t: *): * => {
    t.is(shallow(<Choice>Foo</Choice>).type(), 'div');
});

test('will have a className of Choice', (t: *): * => {
    t.is(shallow(<Choice>Foo</Choice>).prop('className'), 'Choice');
});

test('will be a spruce component', (t: *): * => {
    t.is(Choice.name, 'spruceComponent');
});
