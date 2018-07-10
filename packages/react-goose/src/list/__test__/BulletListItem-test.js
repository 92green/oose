// @flow
import React from 'react';
import BulletListItem from '../BulletListItem';

test('will return a li', () => {
    expect(shallow(<BulletListItem>Foo</BulletListItem>).type()).toBe('li');
});

test('will have a className of BulletListItem', () => {
    expect(shallow(<BulletListItem>Foo</BulletListItem>).prop('className')).toBe('BulletList_item');
});

test('will be a spruce component', () => {
    expect(BulletListItem.name).toBe('spruceComponent');
});
