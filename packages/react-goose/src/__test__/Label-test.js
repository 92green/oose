// @flow
import React from 'react';
import Label from '../Label';

test('will return a label', () => {
    expect(shallow(<Label>Foo</Label>).type()).toBe('label');
});

test('will have a className of Label', () => {
    expect(shallow(<Label>Foo</Label>).prop('className')).toBe('Label');
});
