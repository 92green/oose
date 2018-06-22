// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Link from '../Link';
Enzyme.configure({adapter: new Adapter()});


test('will return a a', (t: *): * => {
    t.is(shallow(<Link>Foo</Link>).type(), 'a');
});

test('will have a className of Link', (t: *): * => {
    t.is(shallow(<Link>Foo</Link>).prop('className'), 'Link');
});

test('will be a spruce component', (t: *): * => {
    t.is(Link.name, 'spruceComponent');
});

