// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Image from '../Image';
Enzyme.configure({adapter: new Adapter()});


test('will return a img', (t: *): * => {
    t.is(shallow(<Image>Foo</Image>).type(), 'img');
});

test('will have a className of Image', (t: *): * => {
    t.is(shallow(<Image>Foo</Image>).prop('className'), 'Image');
});

test('will be a spruce component', (t: *): * => {
    t.is(Image.name, 'spruceComponent');
});
