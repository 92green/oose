// @flow
import React from 'react';
import Image from '../Image';

test('will return a img', () => {
    expect(shallow(<Image>Foo</Image>).type()).toBe('img');
});

test('will have a className of Image', () => {
    expect(shallow(<Image>Foo</Image>).prop('className')).toBe('Image');
});

test('will be a spruce component', () => {
    expect(Image.name).toBe('spruceComponent');
});
