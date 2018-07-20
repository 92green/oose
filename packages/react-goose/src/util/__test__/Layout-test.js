// @flow
import React from 'react';
import Structure from '../Structure';

test('will render elements to layout', () => {
    class Component extends Structure<Object> {
        static elements = ['foo', 'bar'];
        static layout = ({foo, bar}: *) => <div>
            <div className="foo">{foo()}</div>
            <div className="bar">{bar()}</div>
        </div>;
        foo = () => 'Foo Element'
        bar = () => 'Bar Element'
    }

    const wrapper = shallow(<Component />).dive();
    expect(wrapper.find('.foo')).toHaveText('Foo Element');
    expect(wrapper.find('.bar')).toHaveText('Bar Element');
});


test('will throw if layout elements are not defined', () => {
    class Component extends Structure<Object> {
        static elements = ['foo'];
        static layout = () => null;
    }

    expect(() => shallow(<Component />)).toThrow(/foo/);
});

test('layout elements can be overridden through props.elements', () => {
    class Component extends Structure<Object> {
        static elements = ['foo'];
        static layout = ({foo}: *) => <div>
            <div className="foo">{foo()}</div>
        </div>;
        foo = () => 'Foo Element'
    }

    const overrides = {
        foo: () => 'NOT FOO'
    };

    const wrapper = shallow(<Component elements={overrides} />).dive();
    expect(wrapper.find('.foo')).not.toHaveText('Foo Element');
    expect(wrapper.find('.foo')).toHaveText('NOT FOO');
});

test('layout can be replaced via props.layout', () => {
    class Component extends Structure<Object> {
        static elements = ['foo'];
        static layout = ({foo}: *) => <div>
            <div className="foo">{foo()}</div>
        </div>;
        foo = () => 'Foo Element'
    }

    const layout = ({foo}: *) => <div className="baz">{foo()}</div>;


    const wrapper = shallow(<Component layout={layout} />).dive();
    expect(wrapper.find('.foo')).not.toHaveText('Foo Element');
    expect(wrapper.find('.baz')).toHaveText('Foo Element');
});
