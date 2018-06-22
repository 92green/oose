// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import BulletList from '../BulletList';
Enzyme.configure({adapter: new Adapter()});


test('will return a ul', (t: *): * => {
    t.is(shallow(<BulletList>Foo</BulletList>).type(), 'ul');
});

test('will have a className of BulletList', (t: *): * => {
    t.is(shallow(<BulletList>Foo</BulletList>).prop('className'), 'BulletList');
});

test('will be a spruce component', (t: *): * => {
    t.is(BulletList.name, 'spruceComponent');
});
