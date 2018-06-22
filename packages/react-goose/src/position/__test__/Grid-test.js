// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Grid from '../Grid';
Enzyme.configure({adapter: new Adapter()});


test('will return a div', (t: *): * => {
    t.is(shallow(<Grid>Foo</Grid>).type(), 'div');
});

test('will have a className of Grid', (t: *): * => {
    t.is(shallow(<Grid>Foo</Grid>).prop('className'), 'Grid');
});

test('will be a spruce component', (t: *): * => {
    t.is(Grid.name, 'spruceComponent');
});
