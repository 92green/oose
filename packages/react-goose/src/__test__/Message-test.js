// @flow
import React from 'react';
import Message from '../Message';

test('will return a div', () => {
    expect(shallow(<Message>Foo</Message>).type()).toBe('div');
});

test('will have a className of Message', () => {
    expect(shallow(<Message>Foo</Message>).prop('className')).toBe('Message');
});

test('will be a spruce component', () => {
    expect(Message.name).toBe('spruceComponent');
});
