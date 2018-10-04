// @flow
import React from 'react';
import Layout from '../Layout';

test('will render elements to layout', () => {
    class Component extends Layout<Object> {
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
    class FooLayout extends Layout<Object> {
        static elements = ['foo'];
        static layout = () => null;
    }

    expect(() => shallow(<FooLayout />)).toThrow(/foo/);
    expect(() => shallow(<FooLayout />)).toThrow(/FooLayout/);
});

test('layout elements can be overridden through props.elements', () => {
    class Component extends Layout<Object> {
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

test('layout elements can be a data/render object', () => {
    class Component extends Layout<Object> {
        static elements = ['foo'];
        static layout = ({foo}: *) => <div>
            <div className="foo">{foo()}</div>
        </div>;
        foo = {
            data: props => ({text: props.text, extra: 'bar'}),
            render: (props) => props.text + props.extra
        }
    }


    const wrapper = shallow(<Component text="foo"/>).dive();
    expect(wrapper.find('.foo')).toHaveText('foobar');
});

test('layout can be replaced via props.layout', () => {
    class Component extends Layout<Object> {
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
