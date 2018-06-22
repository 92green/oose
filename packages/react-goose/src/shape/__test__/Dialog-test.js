// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Dialog from '../Dialog';
Enzyme.configure({adapter: new Adapter()});

const thunks = {
    title: () => 'Title',
    content: () => 'Content',
    action: () => 'Action'
};

test('will render a Dialog', (t: *) => {
    t.true(
        typeof shallow(<Dialog {...thunks}>Test Dialog</Dialog>).prop('modifier') == 'undefined',
        'modifier prop is not passed to HTML element'
    );
});

test('will extra props to overlay outer div', (t: *) => {
    t.is(shallow(<Dialog {...thunks} style="foo" />).prop('style'), 'foo');
});

test('will contain title content and action children', (t: *) => {
    const deadEnd = shallow(<Dialog {...thunks} />);
    t.is(
        deadEnd.find('.Dialog_title').text(),
        'Title'
    );

    t.is(
        deadEnd.find('.Dialog_content').text(),
        'Content'
    );

    t.is(
        deadEnd.find('.Dialog_action').text(),
        'Action'
    );
});

test('will have correct Spruce classes', (t: *) => {
    t.is(
        shallow(<Dialog {...thunks}/>).prop('className'),
        'Dialog'
    );

    t.is(
        shallow(<Dialog {...thunks} spruceName="Thing"/>).prop('className'),
        'Thing'
    );

    t.is(
        shallow(<Dialog {...thunks} modifier="large"/>).prop('className'),
        'Dialog Dialog-large'
    );

    t.is(
        shallow(<Dialog {...thunks} className="foo"/>).prop('className'),
        'Dialog foo'
    );
});

