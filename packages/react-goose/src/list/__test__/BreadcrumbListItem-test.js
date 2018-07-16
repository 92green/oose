// @flow
import React from 'react';
import BreadcrumbListItem from '../BreadcrumbListItem';

test('will return a li', () => {
    expect(shallow(<BreadcrumbListItem>Foo</BreadcrumbListItem>).type()).toBe('li');
});

test('will have a className of BreadcrumbListItem', () => {
    expect(shallow(<BreadcrumbListItem>Foo</BreadcrumbListItem>).prop('className')).toBe('BreadcrumbList_item');
});

test('will be a spruce component', () => {
    expect(BreadcrumbListItem.name).toBe('spruceComponent');
});
