// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import BreadcrumbListItem from '../BreadcrumbListItem';
Enzyme.configure({adapter: new Adapter()});


test('will return a li', (t: *): * => {
    t.is(shallow(<BreadcrumbListItem>Foo</BreadcrumbListItem>).type(), 'li');
});

test('will have a className of BreadcrumbListItem', (t: *): * => {
    t.is(shallow(<BreadcrumbListItem>Foo</BreadcrumbListItem>).prop('className'), 'BreadcrumbList_item');
});

test('will be a spruce component', (t: *): * => {
    t.is(BreadcrumbListItem.name, 'spruceComponent');
});
