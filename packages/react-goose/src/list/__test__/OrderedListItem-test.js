// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import OrderedListItem from '../OrderedListItem';
Enzyme.configure({adapter: new Adapter()});


test('will return a li', (t: *): * => {
    t.is(shallow(<OrderedListItem>Foo</OrderedListItem>).type(), 'li');
});

test('will have a className of OrderedListItem', (t: *): * => {
    t.is(shallow(<OrderedListItem>Foo</OrderedListItem>).prop('className'), 'OrderedList_item');
});

test('will be a spruce component', (t: *): * => {
    t.is(OrderedListItem.name, 'spruceComponent');
});
