// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Badge from '../Badge';
Enzyme.configure({adapter: new Adapter()});


test('will return a div', (t: *): * => {
    t.is(shallow(<Badge>Foo</Badge>).type(), 'div');
});

test('will have a className of Badge', (t: *): * => {
    t.is(shallow(<Badge>Foo</Badge>).prop('className'), 'Badge');
});

test('will be a spruce component', (t: *): * => {
    t.is(Badge.name, 'spruceComponent');
});
