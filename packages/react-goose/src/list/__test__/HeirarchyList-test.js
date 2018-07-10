// @flow
import React from 'react';
import HeirarchyList from '../HeirarchyList';

test('will return a ul', () => {
    expect(shallow(<HeirarchyList>Foo</HeirarchyList>).type()).toBe('ul');
});

test('will have a className of HeirachyList', () => {
    expect(shallow(<HeirarchyList>Foo</HeirarchyList>).prop('className')).toBe('HeirarchyList');
});

test('will be a spruce component', () => {
    expect(HeirarchyList.name).toBe('spruceComponent');
});
