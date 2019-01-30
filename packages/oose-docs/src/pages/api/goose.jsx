// @flow
import type {Node} from 'react';
import React from 'react';
import ApiPage from 'component/ApiPage';
import intro from 'docs/api/goose/_goose.md';

import Button from 'docs/api/goose/affordance/Button.md';
import Badge from 'docs/api/goose/affordance/Badge.md';
import Checkbox from 'docs/api/goose/affordance/Checkbox.md';
import Choice from 'docs/api/goose/affordance/Choice.md';
import DayPicker from 'docs/api/goose/affordance/DayPicker.md';
import DeadEnd from 'docs/api/goose/affordance/DeadEnd.md';
import Dialog from 'docs/api/goose/affordance/Dialog.md';
import Divider from 'docs/api/goose/affordance/Divider.md';
import Dropdown from 'docs/api/goose/affordance/Dropdown.md';
import Icon from 'docs/api/goose/affordance/Icon.md';
import Image from 'docs/api/goose/affordance/Image.md';
import Input from 'docs/api/goose/affordance/Input.md';
import Label from 'docs/api/goose/affordance/Label.md';
import Link from 'docs/api/goose/affordance/Link.md';
import Message from 'docs/api/goose/affordance/Message.md';
import Overlay from 'docs/api/goose/affordance/Overlay.md';
import Pagination from 'docs/api/goose/affordance/Pagination.md';
import ProgressBar from 'docs/api/goose/affordance/ProgressBar.md';
import Select from 'docs/api/goose/affordance/Select.md';
import Table from 'docs/api/goose/affordance/Table.md';
import Terminal from 'docs/api/goose/affordance/Terminal.md';
import Text from 'docs/api/goose/affordance/Text.md';
import Toggle from 'docs/api/goose/affordance/Toggle.md';

import Grid from 'docs/api/goose/layout/Grid.md';
import Box from 'docs/api/goose/layout/Box.md';
import Window from 'docs/api/goose/layout/Window.md';
import Wrapper from 'docs/api/goose/layout/Wrapper.md';

const md = {
    _desc: intro,
    Button,
    Badge,
    Box,
    Checkbox,
    Choice,
    DayPicker,
    DeadEnd,
    Dialog,
    Divider,
    Dropdown,
    Grid,
    Icon,
    Image,
    Input,
    Label,
    Link,
    Message,
    Overlay,
    Pagination,
    ProgressBar,
    Select,
    Table,
    Terminal,
    Text,
    Toggle,
    Window,
    Wrapper,
    _after: () => null
}

const api = `
# Affordance
Badge
Button
Checkbox @
Choice
DayPicker ^ @
Divider
Icon @
Image
Input
Label
Link
Message
Overlay ^
Pagination ^ @
ProgressBar ^ @
Select ^
Terminal
Text
Toggle

# Shape
DeadEnd ^
Dropdown ^ @
Dialog ^
Table ^

# Layout
Grid
Window
Box
Grid
GridItem
Wrapper

`;

export default () => <ApiPage
    theme="goose"
    name="Goose"
    api={api}
    md={md}
/>;
