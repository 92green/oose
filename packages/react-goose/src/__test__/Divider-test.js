// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Divider from '../Divider';
Enzyme.configure({adapter: new Adapter()});


test('will return a hr', (t: *): * => {
    t.is(shallow(<Divider>Foo</Divider>).type(), 'hr');
});

test('will have a className of Divider', (t: *): * => {
    t.is(shallow(<Divider>Foo</Divider>).prop('className'), 'Divider');
});

test('will be a spruce component', (t: *): * => {
    t.is(Divider.name, 'spruceComponent');
});
