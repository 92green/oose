// @flow
import React from 'react';
import Select from '../Select';

test('will be a CollectionSelect', () => {
    expect(shallow(<Select options={[]}>Foo</Select>).type().name).toBe('CollectionSelect');
});
