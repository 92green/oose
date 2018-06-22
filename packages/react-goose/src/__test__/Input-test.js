// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Input from '../Input';
Enzyme.configure({adapter: new Adapter()});


test('will return a input', (t: *): * => {
    t.is(shallow(<Input>Foo</Input>).type(), 'input');
});

test('will have a className of Input', (t: *): * => {
    t.is(shallow(<Input>Foo</Input>).prop('className'), 'Input');
});
