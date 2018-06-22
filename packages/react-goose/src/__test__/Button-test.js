// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Button from '../Button';
Enzyme.configure({adapter: new Adapter()});


test('will return a button', (t: *): * => {
    t.is(shallow(<Button>Foo</Button>).type(), 'button');
});

test('will have a className of Button', (t: *): * => {
    t.is(shallow(<Button>Foo</Button>).prop('className'), 'Button');
});
