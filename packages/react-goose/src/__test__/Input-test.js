// @flow
import React from 'react';
import Input from '../Input';

test('will return a input', () => {
    expect(shallow(<Input>Foo</Input>).type()).toBe('input');
});

test('will have a className of Input', () => {
    expect(shallow(<Input>Foo</Input>).prop('className')).toBe('Input');
});
