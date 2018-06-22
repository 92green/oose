// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import OrderedList from '../OrderedList';
Enzyme.configure({adapter: new Adapter()});


test('will return a ul', (t: *): * => {
    t.is(shallow(<OrderedList>Foo</OrderedList>).type(), 'ul');
});

test('will have a className of OrderedList', (t: *): * => {
    t.is(shallow(<OrderedList>Foo</OrderedList>).prop('className'), 'OrderedList');
});

test('will be a spruce component', (t: *): * => {
    t.is(OrderedList.name, 'spruceComponent');
});
