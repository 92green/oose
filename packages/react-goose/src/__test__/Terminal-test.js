// @flow
import React from 'react';
import Terminal from '../Terminal';

test('will return a pre', () => {
    expect(shallow(<Terminal>Foo</Terminal>).type()).toBe('pre');
});

test('will have a className of Terminal', () => {
    expect(shallow(<Terminal>Foo</Terminal>).prop('className')).toBe('Terminal');
});

test('will be a spruce component', () => {
    expect(Terminal.name).toBe('spruceComponent');
});
