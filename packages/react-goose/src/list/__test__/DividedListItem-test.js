// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import DividedListItem from '../DividedListItem';
Enzyme.configure({adapter: new Adapter()});


test('will return a li', (t: *): * => {
    t.is(shallow(<DividedListItem>Foo</DividedListItem>).type(), 'li');
});

test('will have a className of DividedListItem', (t: *): * => {
    t.is(shallow(<DividedListItem>Foo</DividedListItem>).prop('className'), 'DividedList_item');
});

test('will be a spruce component', (t: *): * => {
    t.is(DividedListItem.name, 'spruceComponent');
});
