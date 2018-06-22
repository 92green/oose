// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import BreadcrumbList from '../BreadcrumbList';
Enzyme.configure({adapter: new Adapter()});


test('will return a ul', (t: *): * => {
    t.is(shallow(<BreadcrumbList>Foo</BreadcrumbList>).type(), 'ul');
});

test('will have a className of BreadcrumbList', (t: *): * => {
    t.is(shallow(<BreadcrumbList>Foo</BreadcrumbList>).prop('className'), 'BreadcrumbList');
});

test('will be a spruce component', (t: *): * => {
    t.is(BreadcrumbList.name, 'spruceComponent');
});
