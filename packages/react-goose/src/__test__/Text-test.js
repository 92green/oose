// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Text from '../Text';
Enzyme.configure({adapter: new Adapter()});


test('will return a span', (t: *): * => {
    t.is(shallow(<Text>Foo</Text>).type(), 'span');
});

test('will have a className of Text', (t: *): * => {
    t.is(shallow(<Text>Foo</Text>).prop('className'), 'Text');
});

test('will be a spruce component', (t: *): * => {
    t.is(Text.name, 'spruceComponent');
});
