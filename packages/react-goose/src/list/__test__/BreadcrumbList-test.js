// @flow
import React from 'react';
import BreadcrumbList from '../BreadcrumbList';

test('will return a ul', () => {
    expect(shallow(<BreadcrumbList>Foo</BreadcrumbList>).type()).toBe('ul');
});

test('will have a className of BreadcrumbList', () => {
    expect(shallow(<BreadcrumbList>Foo</BreadcrumbList>).prop('className')).toBe('BreadcrumbList');
});

test('will be a spruce component', () => {
    expect(BreadcrumbList.name).toBe('spruceComponent');
});
