// @flow
import React from 'react';
import ButtonList from '../ButtonList';

test('will return a ul', () => {
    expect(shallow(<ButtonList>Foo</ButtonList>).type()).toBe('ul');
});

test('will have a className of ButtonList', () => {
    expect(shallow(<ButtonList>Foo</ButtonList>).prop('className')).toBe('ButtonList');
});

test('will be a spruce component', () => {
    expect(ButtonList.name).toBe('spruceComponent');
});
