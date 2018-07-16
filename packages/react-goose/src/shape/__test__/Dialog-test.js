// @flow
import React from 'react';
import Dialog from '../Dialog';

const thunks = {
    title: () => 'Title',
    content: () => 'Content',
    action: () => 'Action'
};

test('will render a Dialog', () => {
    expect(
        typeof shallow(<Dialog {...thunks}>Test Dialog</Dialog>).prop('modifier') == 'undefined'
    ).toBe(true);
});

test('will extra props to overlay outer div', () => {
    expect(shallow(<Dialog {...thunks} style="foo" />).prop('style')).toBe('foo');
});

test('will contain title content and action children', () => {
    const deadEnd = shallow(<Dialog {...thunks} />);
    expect(deadEnd.find('.Dialog_title').text()).toBe('Title');

    expect(deadEnd.find('.Dialog_content').text()).toBe('Content');

    expect(deadEnd.find('.Dialog_action').text()).toBe('Action');
});

test('will have correct Spruce classes', () => {
    expect(shallow(<Dialog {...thunks}/>).prop('className')).toBe('Dialog');

    expect(shallow(<Dialog {...thunks} spruceName="Thing"/>).prop('className')).toBe('Thing');

    expect(shallow(<Dialog {...thunks} modifier="large"/>).prop('className')).toBe('Dialog Dialog-large');

    expect(shallow(<Dialog {...thunks} className="foo"/>).prop('className')).toBe('Dialog foo');
});

