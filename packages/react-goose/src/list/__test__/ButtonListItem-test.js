// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import ButtonListItem from '../ButtonListItem';
Enzyme.configure({adapter: new Adapter()});


test('will return a li', (t: *): * => {
    t.is(shallow(<ButtonListItem>Foo</ButtonListItem>).type(), 'li');
});

test('will have a className of ButtonListItem', (t: *): * => {
    t.is(shallow(<ButtonListItem>Foo</ButtonListItem>).prop('className'), 'ButtonList_item');
});

test('will be a spruce component', (t: *): * => {
    t.is(ButtonListItem.name, 'spruceComponent');
});
