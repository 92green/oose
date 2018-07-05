// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import HeirarchyList from '../HeirarchyList';
Enzyme.configure({adapter: new Adapter()});


test('will return a ul', (t: *): * => {
    t.is(shallow(<HeirarchyList>Foo</HeirarchyList>).type(), 'ul');
});

test('will have a className of HeirachyList', (t: *): * => {
    t.is(shallow(<HeirarchyList>Foo</HeirarchyList>).prop('className'), 'HeirarchyList');
});

test('will be a spruce component', (t: *): * => {
    t.is(HeirarchyList.name, 'spruceComponent');
});
