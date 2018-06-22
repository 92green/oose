// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import NavigationListItem from '../NavigationListItem';
Enzyme.configure({adapter: new Adapter()});


test('will return a li', (t: *): * => {
    t.is(shallow(<NavigationListItem>Foo</NavigationListItem>).type(), 'li');
});

test('will have a className of NavigationListItem', (t: *): * => {
    t.is(shallow(<NavigationListItem>Foo</NavigationListItem>).prop('className'), 'NavigationList_item');
});

test('will be a spruce component', (t: *): * => {
    t.is(NavigationListItem.name, 'spruceComponent');
});
