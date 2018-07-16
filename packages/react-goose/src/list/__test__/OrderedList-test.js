// @flow
import React from 'react';
import OrderedList from '../OrderedList';

test('will return a ul', () => {
    expect(shallow(<OrderedList>Foo</OrderedList>).type()).toBe('ol');
});

test('will have a className of OrderedList', () => {
    expect(shallow(<OrderedList>Foo</OrderedList>).prop('className')).toBe('OrderedList');
});

test('will be a spruce component', () => {
    expect(OrderedList.name).toBe('spruceComponent');
});
