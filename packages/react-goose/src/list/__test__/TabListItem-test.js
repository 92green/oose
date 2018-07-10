// @flow
import React from 'react';
import TabListItem from '../TabListItem';

test('will return a li', () => {
    expect(shallow(<TabListItem>Foo</TabListItem>).type()).toBe('li');
});

test('will have a className of TabListItem', () => {
    expect(shallow(<TabListItem>Foo</TabListItem>).prop('className')).toBe('TabList_item');
});

test('will be a spruce component', () => {
    expect(TabListItem.name).toBe('spruceComponent');
});
