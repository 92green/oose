// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import HeirachyList from '../HeirachyList';
Enzyme.configure({adapter: new Adapter()});


test('will return a ul', (t: *): * => {
    t.is(shallow(<HeirachyList>Foo</HeirachyList>).type(), 'ul');
});

test('will have a className of HeirachyList', (t: *): * => {
    t.is(shallow(<HeirachyList>Foo</HeirachyList>).prop('className'), 'HeirachyList');
});

test('will be a spruce component', (t: *): * => {
    t.is(HeirachyList.name, 'spruceComponent');
});
