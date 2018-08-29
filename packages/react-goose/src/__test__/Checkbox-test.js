// @flow
import React from 'react';
import Checkbox from '../Checkbox';

test('will return a input', () => {
    expect(shallow(<Checkbox />).type()).toBe('input');
});

test('will have a className of Checkbox', () => {
    expect(shallow(<Checkbox />).prop('className')).toBe('Checkbox');
});
