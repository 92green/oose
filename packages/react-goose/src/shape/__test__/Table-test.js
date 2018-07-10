// @flow
import React from 'react';
import type {ComponentType} from 'react';

import {Table} from '../Table';
import {TableBody} from '../Table';
import {TableCell} from '../Table';
import {TableFoot} from '../Table';
import {TableHead} from '../Table';
import {TableHeadCell} from '../Table';
import {TableRow} from '../Table';


function testComponent(Component: ComponentType<any>, className: string, type: string) {
    const name = Component.displayName || '';
    test(`${name} will return a ${type}`, () => {
        expect(shallow(<Component>Foo</Component>).type()).toBe(type);
    });

    test(`${name} will have a className of ${className}`, () => {
        expect(shallow(<Component>Foo</Component>).prop('className')).toBe(className);
    });

    test(`${name} will be a spruce component`, () => {
        expect(Component.name).toBe('spruceComponent');
    });
}

testComponent(Table, 'Table', 'table');
testComponent(TableBody, 'Table_body', 'tbody');
testComponent(TableCell, 'Table_cell', 'td');
testComponent(TableFoot, 'Table_foot', 'tfoot');
testComponent(TableHead, 'Table_head', 'thead');
testComponent(TableHeadCell, 'Table_headCell', 'th');
testComponent(TableRow, 'Table_row', 'tr');
