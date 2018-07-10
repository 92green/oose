// @flow
import React from 'react';
import BulletList from '../BulletList';

test('will return a ul', () => {
    expect(shallow(<BulletList>Foo</BulletList>).type()).toBe('ul');
});

test('will have a className of BulletList', () => {
    expect(shallow(<BulletList>Foo</BulletList>).prop('className')).toBe('BulletList');
});

test('will be a spruce component', () => {
    expect(BulletList.name).toBe('spruceComponent');
});
