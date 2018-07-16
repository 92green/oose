// @flow
import React from 'react';
import Choice from '../Choice';

test('will return a div', () => {
    expect(shallow(<Choice>Foo</Choice>).type()).toBe('div');
});

test('will have a className of Choice', () => {
    expect(shallow(<Choice>Foo</Choice>).prop('className')).toBe('Choice');
});

test('will be a spruce component', () => {
    expect(Choice.name).toBe('spruceComponent');
});
