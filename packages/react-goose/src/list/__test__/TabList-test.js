// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import TabList from '../TabList';
Enzyme.configure({adapter: new Adapter()});


test('will return a ul', (t: *): * => {
    t.is(shallow(<TabList>Foo</TabList>).type(), 'ul');
});

test('will have a className of TabList', (t: *): * => {
    t.is(shallow(<TabList>Foo</TabList>).prop('className'), 'TabList');
});

test('will be a spruce component', (t: *): * => {
    t.is(TabList.name, 'spruceComponent');
});
