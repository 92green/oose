// @flow
import type {ChildrenArray} from 'react';

import React from 'react';
import {shallow} from 'enzyme';
import SpruceComponent from '../SpruceComponent';

const Foo = SpruceComponent('Foo', 'li');
const fooWrapper = shallow(<Foo modifier="red" peer="Button">Rad</Foo>);

test('the component renders the given type', () => {
    expect(fooWrapper.type()).toBe('li');

    const Bar = SpruceComponent('Bar', 'div');
    const barWrapper = shallow(<Bar modifier="red" element="span">Rad</Bar>);
    expect(barWrapper.type()).toBe('span');
});

test('the component renders SpruceClassNames', () => {
    expect(fooWrapper.hasClass('Foo')).toBe(true);
    expect(fooWrapper.hasClass('Foo-red')).toBe(true);
    expect(fooWrapper.hasClass('Foo--Button')).toBe(true);
});


const Bar = ({className, children}: {className: string, children: ChildrenArray<*>}) => <div className={className} children={children} />;
const Baz = SpruceComponent('Baz', Bar);
const bazWrapper = shallow(<Baz modifier="green">Rad</Baz>);


test('It renders custom components', () => {
    expect(bazWrapper.hasClass('Baz')).toBe(true);
});

