// @flow
import React from 'react';
import Button from '../Button';

test('will return a button', () => {
    expect(shallow(<Button>Foo</Button>).type()).toBe('button');
});

test('will have a className of Button', () => {
    expect(shallow(<Button>Foo</Button>).prop('className')).toBe('Button');
});
