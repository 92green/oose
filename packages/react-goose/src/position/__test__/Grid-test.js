// @flow
import React from 'react';
import Grid from '../Grid';

test('will return a div', () => {
    expect(shallow(<Grid>Foo</Grid>).type()).toBe('div');
});

test('will have a className of Grid', () => {
    expect(shallow(<Grid>Foo</Grid>).prop('className')).toBe('Grid');
});

test('will be a spruce component', () => {
    expect(Grid.name).toBe('spruceComponent');
});
