// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import TabListItem from '../TabListItem';
Enzyme.configure({adapter: new Adapter()});


test('will return a li', (t: *): * => {
    t.is(shallow(<TabListItem>Foo</TabListItem>).type(), 'li');
});

test('will have a className of TabListItem', (t: *): * => {
    t.is(shallow(<TabListItem>Foo</TabListItem>).prop('className'), 'TabList_item');
});

test('will be a spruce component', (t: *): * => {
    t.is(TabListItem.name, 'spruceComponent');
});
