// @flow
import React from 'react';
import Window from '../Window';

const thunks = {
    title: () => 'Title',
    content: () => 'Content'
};

test('will render a Window', () => {
    expect(
        typeof shallow(<Window {...thunks}>Test Window</Window>).prop('modifier') == 'undefined'
    ).toBe(true);
});

test('will extra props to overlay outer div', () => {
    expect(shallow(<Window {...thunks} style="foo" />).prop('style')).toBe('foo');
});

test('will contain title content and action children', () => {
    const window = shallow(<Window {...thunks} />);
    expect(window.find('.Window_title').text()).toBe('Title');

    expect(window.find('.Window_content').text()).toBe('Content');
});

test('will have correct Spruce classes', () => {
    expect(shallow(<Window {...thunks}/>).prop('className')).toBe('Window');

    expect(shallow(<Window {...thunks} spruceName="Thing"/>).prop('className')).toBe('Thing');

    expect(shallow(<Window {...thunks} modifier="large"/>).prop('className')).toBe('Window Window-large');

    expect(shallow(<Window {...thunks} className="foo"/>).prop('className')).toBe('Window foo');
});

