// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Label from '../Label';
Enzyme.configure({adapter: new Adapter()});


test('will return a label', (t: *): * => {
    t.is(shallow(<Label>Foo</Label>).type(), 'label');
});

test('will have a className of Label', (t: *): * => {
    t.is(shallow(<Label>Foo</Label>).prop('className'), 'Label');
});
