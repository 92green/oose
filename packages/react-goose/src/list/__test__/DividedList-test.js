// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import DividedList from '../DividedList';
Enzyme.configure({adapter: new Adapter()});


test('will return a ul', (t: *): * => {
    t.is(shallow(<DividedList>Foo</DividedList>).type(), 'ul');
});

test('will have a className of DividedList', (t: *): * => {
    t.is(shallow(<DividedList>Foo</DividedList>).prop('className'), 'DividedList');
});

test('will be a spruce component', (t: *): * => {
    t.is(DividedList.name, 'spruceComponent');
});
