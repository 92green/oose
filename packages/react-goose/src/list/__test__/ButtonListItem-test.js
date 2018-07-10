// @flow
import React from 'react';
import ButtonListItem from '../ButtonListItem';

test('will return a li', () => {
    expect(shallow(<ButtonListItem>Foo</ButtonListItem>).type()).toBe('li');
});

test('will have a className of ButtonListItem', () => {
    expect(shallow(<ButtonListItem>Foo</ButtonListItem>).prop('className')).toBe('ButtonList_item');
});

test('will be a spruce component', () => {
    expect(ButtonListItem.name).toBe('spruceComponent');
});
