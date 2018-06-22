// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import DeadEnd from '../DeadEnd';
Enzyme.configure({adapter: new Adapter()});

const thunks = {
    title: () => 'Title',
    content: () => 'Content',
    action: () => 'Action'
};

test('will render a DeadEnd', (t: *) => {
    t.true(
        typeof shallow(<DeadEnd {...thunks}>Test DeadEnd</DeadEnd>).prop('modifier') == 'undefined',
        'modifier prop is not passed to HTML element'
    );
});

test('will extra props to overlay outer div', (t: *) => {
    t.is(shallow(<DeadEnd {...thunks} style="foo" />).prop('style'), 'foo');
});

test('will contain title content and action children', (t: *) => {
    const deadEnd = shallow(<DeadEnd {...thunks} />);
    t.is(
        deadEnd.find('.DeadEnd_title').text(),
        'Title'
    );

    t.is(
        deadEnd.find('.DeadEnd_content').text(),
        'Content'
    );

    t.is(
        deadEnd.find('.DeadEnd_action').text(),
        'Action'
    );
});

test('will have correct Spruce classes', (t: *) => {
    t.is(
        shallow(<DeadEnd {...thunks}/>).prop('className'),
        'DeadEnd'
    );

    t.is(
        shallow(<DeadEnd {...thunks} spruceName="Thing"/>).prop('className'),
        'Thing'
    );

    t.is(
        shallow(<DeadEnd {...thunks} modifier="large"/>).prop('className'),
        'DeadEnd DeadEnd-large'
    );

    t.is(
        shallow(<DeadEnd {...thunks} className="foo"/>).prop('className'),
        'DeadEnd foo'
    );
});

