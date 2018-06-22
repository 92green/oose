// @flow
import type {Node} from 'react';
import React from 'react';
import SpruceClassName from 'stampy/lib/util/SpruceClassName';

export default function Window(props: *): Node {
    const {
        className,
        modifier,
        spruceName: name = 'Window',
        title,
        content,
        ...otherProps
    } = props;

    const parentClassName = SpruceClassName({className, modifier, name});

    return <div className={parentClassName} {...otherProps}>
        <div className={`${name}_title`}>{title()}</div>
        <div className={`${name}_content`}>{content()}</div>
    </div>;
}
