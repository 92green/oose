// @flow
import type {ComponentType} from 'react';
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

import Goose from '../index';

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

testComponent(Goose.Animation, 'Animation', 'div');
testComponent(Goose.Badge, 'Badge', 'div');
testComponent(Goose.Box, 'Box', 'div');
testComponent(Goose.Breadcrumb, 'Breadcrumb', 'ol');
testComponent(Goose.BreadcrumbItem, 'Breadcrumb_item', 'li');
testComponent(Goose.Button, 'Button', 'button');
testComponent(Goose.Checkbox, 'Checkbox', 'div');
testComponent(Goose.Choice, 'Choice', 'div');
testComponent(Goose.DayPicker, 'DayPicker', 'div');
testComponent(Goose.Divider, 'Divider', 'hr');
testComponent(Goose.Dialog, 'Dialog', 'div');
testComponent(Goose.DialogTitle, 'Dialog_title', 'div');
testComponent(Goose.DialogContent, 'Dialog_content', 'div');
testComponent(Goose.DialogActions, 'Dialog_actions', 'div');
testComponent(Goose.Dropdown, 'Dropdown', 'div');
testComponent(Goose.Grid, 'Grid', 'div');
testComponent(Goose.GridItem, 'Grid_item', 'div');
testComponent(Goose.Icon, 'Icon', 'div');
testComponent(Goose.Image, 'Image', 'img');
testComponent(Goose.Input, 'Input', 'div');
testComponent(Goose.Label, 'Label', 'label');
testComponent(Goose.Link, 'Link', 'a');
testComponent(Goose.List, 'List', 'ul');
testComponent(Goose.ListItem, 'List_item', 'li');
testComponent(Goose.Login, 'Login', 'div');
testComponent(Goose.Logo, 'Logo', 'div');
testComponent(Goose.Media, 'Media', 'div');
testComponent(Goose.Navigation, 'Navigation', 'div');
testComponent(Goose.Overlay, 'Overlay', 'div');
testComponent(Goose.OverlayContent, 'Overlay_content', 'div');
testComponent(Goose.Pagination, 'Pagination', 'div');
testComponent(Goose.ProgressBar, 'ProgressBar', 'div');
testComponent(Goose.Select, 'Select', 'select');
testComponent(Goose.Tab, 'Tab', 'div');
testComponent(Goose.TabSet, 'TabSet', 'div');
testComponent(Goose.Table, 'Table', 'table');
testComponent(Goose.TableBody, 'Table_body', 'tbody');
testComponent(Goose.TableCell, 'Table_cell', 'td');
testComponent(Goose.TableFoot, 'Table_foot', 'tfoot');
testComponent(Goose.TableHead, 'Table_head', 'thead');
testComponent(Goose.TableHeadCell, 'Table_headCell', 'th');
testComponent(Goose.TableRow, 'Table_row', 'tr');
testComponent(Goose.Terminal, 'Terminal', 'div');
testComponent(Goose.Text, 'Text', 'span');
testComponent(Goose.Toggle, 'Toggle', 'div');
testComponent(Goose.ToggleSet, 'ToggleSet', 'div');
testComponent(Goose.Typography, 'Typography', 'div');
testComponent(Goose.Window, 'Window', 'div');
testComponent(Goose.WindowTitle, 'Window_title', 'div');
testComponent(Goose.WindowContent, 'Window_content', 'div');
testComponent(Goose.Wrapper, 'Wrapper', 'div');
