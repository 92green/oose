// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Typography from '../Typography';
Enzyme.configure({adapter: new Adapter()});


test('will return a div', (t: *): * => {
    t.is(shallow(<Typography>Foo</Typography>).type(), 'div');
});

test('will have a className of Typography', (t: *): * => {
    t.is(shallow(<Typography>Foo</Typography>).prop('className'), 'Typography');
});

test('will be a spruce component', (t: *): * => {
    t.is(Typography.name, 'spruceComponent');
});
