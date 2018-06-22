// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Message from '../Message';
Enzyme.configure({adapter: new Adapter()});


test('will return a div', (t: *): * => {
    t.is(shallow(<Message>Foo</Message>).type(), 'div');
});

test('will have a className of Message', (t: *): * => {
    t.is(shallow(<Message>Foo</Message>).prop('className'), 'Message');
});

test('will be a spruce component', (t: *): * => {
    t.is(Message.name, 'spruceComponent');
});
