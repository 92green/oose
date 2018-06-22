// @flow
import test from 'ava';
import React from 'react';
import type {ComponentType} from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

import {Table} from '../Table';
import {TableBody} from '../Table';
import {TableCell} from '../Table';
import {TableFoot} from '../Table';
import {TableHead} from '../Table';
import {TableHeadCell} from '../Table';
import {TableRow} from '../Table';

Enzyme.configure({adapter: new Adapter()});

function testComponent(Component: ComponentType<any>, className: string, type: string) {
    const name = Component.displayName || '';
    test(`${name} will return a ${type}`, (t: *): * => {
        t.is(shallow(<Component>Foo</Component>).type(), type);
    });

    test(`${name} will have a className of ${className}`, (t: *): * => {
        t.is(shallow(<Component>Foo</Component>).prop('className'), className);
    });

    test(`${name} will be a spruce component`, (t: *): * => {
        t.is(Component.name, 'spruceComponent');
    });
}

testComponent(Table, 'Table', 'table');
testComponent(TableBody, 'Table_body', 'tbody');
testComponent(TableCell, 'Table_cell', 'td');
testComponent(TableFoot, 'Table_foot', 'tfoot');
testComponent(TableHead, 'Table_head', 'thead');
testComponent(TableHeadCell, 'Table_headCell', 'th');
testComponent(TableRow, 'Table_row', 'tr');
