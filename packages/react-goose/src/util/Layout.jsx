// @flow
import type {ComponentType} from 'react';
import type {Node} from 'react';
import type {LayoutElement} from './LayoutElement';

import React from 'react';

type BaseProps = {
    layout?: ComponentType<*>,
    elements?: {
        [key: string]: LayoutElement
    }
};

type LayoutProps = {
    [key: string]: LayoutElement
};

export default class Structure<Props, State = void> extends React.Component<$Diff<BaseProps, Props>, State> {
    static elements: Array<string>;
    static layout: ComponentType<LayoutProps>;
    render(): Node {

        // TODO: Flow cant handle computed property types on classes
        // This line tricks flow into thinking it's just an object
        const FLOWBUG_this: Object = this;

        const {layout, elements = {}} = this.props;
        const Layout = layout || this.constructor.layout;
        const baseElements = this.constructor.elements.reduce((props: *, element: string): * => {
            let fn = FLOWBUG_this[element];
            if(!fn) {
                throw new Error(`"${element}" method on Structure is not defined`);
            }
            return {
                ...props,
                [element]: fn
            };
        }, {});

        return <Layout {...baseElements} {...elements} />;
    }
}
