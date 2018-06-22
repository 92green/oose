// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import HeirachyListItem from '../HeirachyListItem';
Enzyme.configure({adapter: new Adapter()});


test('will return a li', (t: *): * => {
    t.is(shallow(<HeirachyListItem>Foo</HeirachyListItem>).type(), 'li');
});

test('will have a className of HeirachyListItem', (t: *): * => {
    t.is(shallow(<HeirachyListItem>Foo</HeirachyListItem>).prop('className'), 'HeirachyList_item');
});

test('will be a spruce component', (t: *): * => {
    t.is(HeirachyListItem.name, 'spruceComponent');
});
