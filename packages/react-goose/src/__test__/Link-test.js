// @flow
import React from 'react';
import Link from '../Link';

test('will return a a', () => {
    expect(shallow(<Link>Foo</Link>).type()).toBe('a');
});

test('will have a className of Link', () => {
    expect(shallow(<Link>Foo</Link>).prop('className')).toBe('Link');
});

test('will be a spruce component', () => {
    expect(Link.name).toBe('spruceComponent');
});

