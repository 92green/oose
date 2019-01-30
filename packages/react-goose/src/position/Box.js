// @flow
import React from 'react';
import type {Node, ComponentType} from 'react';
import SpruceClassName from 'stampy/lib/util/SpruceClassName';

/**
 * @module Components
 */

/**
 * @component
 *
 * Box is an empty component that has shortcuts to style margin and padding
 *
 * @example
 * return <Box marginBottom="1rem" padding="1rem"><Input/></Box>
 */

type Props = {
    boxProps?: *,
    children?: *,
    className?: string, // {ClassName}
    element?: ComponentType<*>|string, // The id of the input HTML element this label corresponds to
    margin?: string,
    marginBottom?: string,
    marginLeft?: string,
    marginRight?: string,
    marginTop?: string,
    modifier?: string, // {SpruceModifier}
    padding?: string,
    paddingBottom?: string,
    paddingLeft?: string,
    paddingRight?: string,
    paddingTop?: string,
    parent?: string, // ${SpruceParent}
    spruceName?: string, // {SpruceName}
    style?: *
};

function remify(rems?: string): ?string {
    return rems && typeof rems === 'string'
        ? rems
            .trim()
            .split(' ')
            .join('rem ') + 'rem'
        : undefined
    ;
}

export default function Box(props: Props): Node {
    const {children} = props;
    const {className} = props;
    const {element: Element = 'div'} = props;
    const {marginBottom} = props;
    const {marginLeft} = props;
    const {marginRight} = props;
    const {marginTop} = props;
    const {margin} = props;
    const {modifier} = props;
    const {paddingBottom} = props;
    const {paddingLeft} = props;
    const {paddingRight} = props;
    const {paddingTop} = props;
    const {padding} = props;
    const {parent} = props;
    const {spruceName = 'Box'} = props;
    const {style} = props;
    const {boxProps = {}} = props;

    return <Element
        className={SpruceClassName({name: spruceName, modifier, className, parent})}
        children={children}
        {...boxProps}
        style={{
            ...style,
            margin: remify(margin),
            marginBottom: remify(marginBottom),
            marginLeft: remify(marginLeft),
            marginRight: remify(marginRight),
            marginTop: remify(marginTop),
            padding: remify(padding),
            paddingBottom: remify(paddingBottom),
            paddingLeft: remify(paddingLeft),
            paddingRight: remify(paddingRight),
            paddingTop: remify(paddingTop)
        }}
    />;
}
