// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import NavigationList from '../NavigationList';
Enzyme.configure({adapter: new Adapter()});


test('will return a ul', (t: *): * => {
    t.is(shallow(<NavigationList>Foo</NavigationList>).type(), 'ul');
});

test('will have a className of NavigationList', (t: *): * => {
    t.is(shallow(<NavigationList>Foo</NavigationList>).prop('className'), 'NavigationList');
});

test('will be a spruce component', (t: *): * => {
    t.is(NavigationList.name, 'spruceComponent');
});
