// @flow
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Window from '../Window';
Enzyme.configure({adapter: new Adapter()});

const thunks = {
    title: () => 'Title',
    content: () => 'Content'
};

test('will render a Window', (t: *) => {
    t.true(
        typeof shallow(<Window {...thunks}>Test Window</Window>).prop('modifier') == 'undefined',
        'modifier prop is not passed to HTML element'
    );
});

test('will extra props to overlay outer div', (t: *) => {
    t.is(shallow(<Window {...thunks} style="foo" />).prop('style'), 'foo');
});

test('will contain title content and action children', (t: *) => {
    const window = shallow(<Window {...thunks} />);
    t.is(
        window.find('.Window_title').text(),
        'Title'
    );

    t.is(
        window.find('.Window_content').text(),
        'Content'
    );
});

test('will have correct Spruce classes', (t: *) => {
    t.is(
        shallow(<Window {...thunks}/>).prop('className'),
        'Window'
    );

    t.is(
        shallow(<Window {...thunks} spruceName="Thing"/>).prop('className'),
        'Thing'
    );

    t.is(
        shallow(<Window {...thunks} modifier="large"/>).prop('className'),
        'Window Window-large'
    );

    t.is(
        shallow(<Window {...thunks} className="foo"/>).prop('className'),
        'Window foo'
    );
});

