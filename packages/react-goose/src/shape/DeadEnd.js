// @flow
import type {Node} from 'react';
import React from 'react';
import SpruceClassName from 'stampy/lib/util/SpruceClassName';

type Props = {
    action: () => Node,
    content: () => Node,
    title: () => Node,
    className?: string,
    modifier?: string,
    spruceName?: string
};

export default function DeadEnd(props: Props): Node {
    const {
        className,
        modifier,
        spruceName: name = 'DeadEnd',
        title,
        content,
        action,
        ...otherProps
    } = props;

    const parentClassName = SpruceClassName({className, modifier, name});

    return <div className={parentClassName} {...otherProps}>
        <div className={`${name}_title`}>{title()}</div>
        <div className={`${name}_content`}>{content()}</div>
        <div className={`${name}_action`}>{action()}</div>
    </div>;
}
