// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import ButtonList from '../ButtonList';
Enzyme.configure({adapter: new Adapter()});


test('will return a ul', (t: *): * => {
    t.is(shallow(<ButtonList>Foo</ButtonList>).type(), 'ul');
});

test('will have a className of ButtonList', (t: *): * => {
    t.is(shallow(<ButtonList>Foo</ButtonList>).prop('className'), 'ButtonList');
});

test('will be a spruce component', (t: *): * => {
    t.is(ButtonList.name, 'spruceComponent');
});
