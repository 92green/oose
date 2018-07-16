// @flow
import React from 'react';
import DividedListItem from '../DividedListItem';

test('will return a li', () => {
    expect(shallow(<DividedListItem>Foo</DividedListItem>).type()).toBe('li');
});

test('will have a className of DividedListItem', () => {
    expect(shallow(<DividedListItem>Foo</DividedListItem>).prop('className')).toBe('DividedList_item');
});

test('will be a spruce component', () => {
    expect(DividedListItem.name).toBe('spruceComponent');
});
