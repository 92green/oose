// @flow
import type {Node} from 'react';
import React from 'react';
import ApiPage from 'component/ApiPage';
import intro from 'docs/api/spruce/_spruce.md';

import Component from 'docs/api/spruce/Component.md';
import Modifier from 'docs/api/spruce/Modifier.md';
import Child from 'docs/api/spruce/Child.md';
import Gotchas from 'docs/api/spruce/Gotchas.md';

const md = {
    _desc: intro,
    Component,
    Modifier,
    Child,
    Gotchas
}

const api = `
Component
Modifier
Child
Gotchas
`;

export default () => <ApiPage
    theme="spruce"
    name="Spruce"
    api={api}
    md={md}
/>;
