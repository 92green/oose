// @flow
import React from 'react';
import Wrapper from '../Wrapper';

test('will return a div', () => {
    expect(shallow(<Wrapper>Foo</Wrapper>).type()).toBe('div');
});

test('will have a className of Wrapper', () => {
    expect(shallow(<Wrapper>Foo</Wrapper>).prop('className')).toBe('Wrapper');
});

test('will be a spruce component', () => {
    expect(Wrapper.name).toBe('spruceComponent');
});
