// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Wrapper from '../Wrapper';
Enzyme.configure({adapter: new Adapter()});


test('will return a div', (t: *): * => {
    t.is(shallow(<Wrapper>Foo</Wrapper>).type(), 'div');
});

test('will have a className of Wrapper', (t: *): * => {
    t.is(shallow(<Wrapper>Foo</Wrapper>).prop('className'), 'Wrapper');
});

test('will be a spruce component', (t: *): * => {
    t.is(Wrapper.name, 'spruceComponent');
});
