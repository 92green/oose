// @flow
import React from 'react';
import DeadEnd from '../DeadEnd';

const thunks = {
    title: () => 'Title',
    content: () => 'Content',
    action: () => 'Action'
};

test('will render a DeadEnd', () => {
    expect(
        typeof shallow(<DeadEnd {...thunks}>Test DeadEnd</DeadEnd>).prop('modifier') == 'undefined'
    ).toBe(true);
});

test('will extra props to overlay outer div', () => {
    expect(shallow(<DeadEnd {...thunks} style="foo" />).prop('style')).toBe('foo');
});

test('will contain title content and action children', () => {
    const deadEnd = shallow(<DeadEnd {...thunks} />);
    expect(deadEnd.find('.DeadEnd_title').text()).toBe('Title');

    expect(deadEnd.find('.DeadEnd_content').text()).toBe('Content');

    expect(deadEnd.find('.DeadEnd_action').text()).toBe('Action');
});

test('will have correct Spruce classes', () => {
    expect(shallow(<DeadEnd {...thunks}/>).prop('className')).toBe('DeadEnd');

    expect(shallow(<DeadEnd {...thunks} spruceName="Thing"/>).prop('className')).toBe('Thing');

    expect(shallow(<DeadEnd {...thunks} modifier="large"/>).prop('className')).toBe('DeadEnd DeadEnd-large');

    expect(shallow(<DeadEnd {...thunks} className="foo"/>).prop('className')).toBe('DeadEnd foo');
});

