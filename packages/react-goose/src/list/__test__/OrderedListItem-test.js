// @flow
import React from 'react';
import OrderedListItem from '../OrderedListItem';

test('will return a li', () => {
    expect(shallow(<OrderedListItem>Foo</OrderedListItem>).type()).toBe('li');
});

test('will have a className of OrderedListItem', () => {
    expect(shallow(<OrderedListItem>Foo</OrderedListItem>).prop('className')).toBe('OrderedList_item');
});

test('will be a spruce component', () => {
    expect(OrderedListItem.name).toBe('spruceComponent');
});
