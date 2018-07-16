// @flow
import React from 'react';
import Divider from '../Divider';

test('will return a hr', () => {
    expect(shallow(<Divider>Foo</Divider>).type()).toBe('hr');
});

test('will have a className of Divider', () => {
    expect(shallow(<Divider>Foo</Divider>).prop('className')).toBe('Divider');
});

test('will be a spruce component', () => {
    expect(Divider.name).toBe('spruceComponent');
});
