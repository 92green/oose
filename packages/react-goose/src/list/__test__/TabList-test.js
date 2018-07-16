// @flow
import React from 'react';
import TabList from '../TabList';

test('will return a ul', () => {
    expect(shallow(<TabList>Foo</TabList>).type()).toBe('ul');
});

test('will have a className of TabList', () => {
    expect(shallow(<TabList>Foo</TabList>).prop('className')).toBe('TabList');
});

test('will be a spruce component', () => {
    expect(TabList.name).toBe('spruceComponent');
});
