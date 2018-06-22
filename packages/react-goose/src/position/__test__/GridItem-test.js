// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import GridItem from '../GridItem';
Enzyme.configure({adapter: new Adapter()});


test('will return a div', (t: *): * => {
    t.is(shallow(<GridItem>Foo</GridItem>).type(), 'div');
});

test('will have a className of GridItem', (t: *): * => {
    t.is(shallow(<GridItem>Foo</GridItem>).prop('className'), 'Grid_item');
});

test('will be a spruce component', (t: *): * => {
    t.is(GridItem.name, 'spruceComponent');
});
