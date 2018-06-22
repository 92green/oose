// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import BulletListItem from '../BulletListItem';
Enzyme.configure({adapter: new Adapter()});


test('will return a li', (t: *): * => {
    t.is(shallow(<BulletListItem>Foo</BulletListItem>).type(), 'li');
});

test('will have a className of BulletListItem', (t: *): * => {
    t.is(shallow(<BulletListItem>Foo</BulletListItem>).prop('className'), 'BulletList_item');
});

test('will be a spruce component', (t: *): * => {
    t.is(BulletListItem.name, 'spruceComponent');
});
