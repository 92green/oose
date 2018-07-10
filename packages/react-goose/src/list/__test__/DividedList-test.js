// @flow
import React from 'react';
import DividedList from '../DividedList';

test('will return a ul', () => {
    expect(shallow(<DividedList>Foo</DividedList>).type()).toBe('ul');
});

test('will have a className of DividedList', () => {
    expect(shallow(<DividedList>Foo</DividedList>).prop('className')).toBe('DividedList');
});

test('will be a spruce component', () => {
    expect(DividedList.name).toBe('spruceComponent');
});
