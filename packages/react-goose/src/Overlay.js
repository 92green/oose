// @flow
import type {Node} from 'react';
import React from 'react';
import SpruceClassName from 'stampy/lib/util/SpruceClassName';

export default function Overlay(props: *): Node {
    const {
        children,
        className,
        modifier,
        spruceName: name = 'Overlay',
        parent,
        element: Component = 'div',
        ...otherProps
    } = props;

    const parentClassName = SpruceClassName({className, modifier, parent, name});

    return <Component className={parentClassName} {...otherProps}>
        <div className={`${name}_content`}>{children}</div>
    </Component>;
}
