// @flow
import React from 'react';
import NavigationList from '../NavigationList';

test('will return a ul', () => {
    expect(shallow(<NavigationList>Foo</NavigationList>).type()).toBe('ul');
});

test('will have a className of NavigationList', () => {
    expect(shallow(<NavigationList>Foo</NavigationList>).prop('className')).toBe('NavigationList');
});

test('will be a spruce component', () => {
    expect(NavigationList.name).toBe('spruceComponent');
});
