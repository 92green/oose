// @flow
import React from 'react';
import Toggle from '../Toggle';

test('will return a button', () => {
    expect(shallow(<Toggle>Foo</Toggle>).type()).toBe('button');
});

test('will have a className of Toggle', () => {
    expect(shallow(<Toggle>Foo</Toggle>).prop('className')).toBe('Toggle');
});
