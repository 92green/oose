// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Select from '../Select';
Enzyme.configure({adapter: new Adapter()});


test('will be a CollectionSelect', (t: *): * => {
    t.is(shallow(<Select options={[]}>Foo</Select>).type().name, 'CollectionSelect');
});
