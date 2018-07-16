// @flow
import React from 'react';
import GridItem from '../GridItem';

test('will return a div', () => {
    expect(shallow(<GridItem>Foo</GridItem>).type()).toBe('div');
});

test('will have a className of GridItem', () => {
    expect(shallow(<GridItem>Foo</GridItem>).prop('className')).toBe('Grid_item');
});

test('will be a spruce component', () => {
    expect(GridItem.name).toBe('spruceComponent');
});
