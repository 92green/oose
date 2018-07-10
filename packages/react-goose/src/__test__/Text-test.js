// @flow
import React from 'react';
import Text from '../Text';

test('will return a span', () => {
    expect(shallow(<Text>Foo</Text>).type()).toBe('span');
});

test('will have a className of Text', () => {
    expect(shallow(<Text>Foo</Text>).prop('className')).toBe('Text');
});

test('will be a spruce component', () => {
    expect(Text.name).toBe('spruceComponent');
});
