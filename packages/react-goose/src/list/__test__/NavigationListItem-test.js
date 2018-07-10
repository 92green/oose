// @flow
import React from 'react';
import NavigationListItem from '../NavigationListItem';

test('will return a li', () => {
    expect(shallow(<NavigationListItem>Foo</NavigationListItem>).type()).toBe('li');
});

test('will have a className of NavigationListItem', () => {
    expect(shallow(<NavigationListItem>Foo</NavigationListItem>).prop('className')).toBe('NavigationList_item');
});

test('will be a spruce component', () => {
    expect(NavigationListItem.name).toBe('spruceComponent');
});
