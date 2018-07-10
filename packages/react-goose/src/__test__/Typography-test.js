// @flow
import React from 'react';
import Typography from '../Typography';

test('will return a div', () => {
    expect(shallow(<Typography>Foo</Typography>).type()).toBe('div');
});

test('will have a className of Typography', () => {
    expect(shallow(<Typography>Foo</Typography>).prop('className')).toBe('Typography');
});

test('will be a spruce component', () => {
    expect(Typography.name).toBe('spruceComponent');
});
