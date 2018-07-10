// @flow
import React from 'react';
import HeirarchyListItem from '../HeirarchyListItem';

test('will return a li', () => {
    expect(shallow(<HeirarchyListItem>Foo</HeirarchyListItem>).type()).toBe('li');
});

test('will have a className of HeirachyListItem', () => {
    expect(shallow(<HeirarchyListItem>Foo</HeirarchyListItem>).prop('className')).toBe('HeirarchyList_item');
});

test('will be a spruce component', () => {
    expect(HeirarchyListItem.name).toBe('spruceComponent');
});
