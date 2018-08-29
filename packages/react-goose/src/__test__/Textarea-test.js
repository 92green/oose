// @flow
import React from 'react';
import Textarea from '../Textarea';

test('will return a input', () => {
    expect(shallow(<Textarea />).type()).toBe('textarea');
});

test('will have a className of Textarea', () => {
    expect(shallow(<Textarea />).prop('className')).toBe('Textarea');
});
