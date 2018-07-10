// @flow
import React from 'react';
import Badge from '../Badge';

test('will return a div', () => {
    expect(shallow(<Badge>Foo</Badge>).type()).toBe('div');
});

test('will have a className of Badge', () => {
    expect(shallow(<Badge>Foo</Badge>).prop('className')).toBe('Badge');
});

test('will be a spruce component', () => {
    expect(Badge.name).toBe('spruceComponent');
});
