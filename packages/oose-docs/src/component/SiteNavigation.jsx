// @flow
import React from "react";
import {NavigationList, NavigationListItem} from 'dcme-style';
import Link from 'component/Link';

type Props = {
    default?: string,
    name: string,
    optional?: boolean,
    type: string
};

export default () => <NavigationList modifier="margin">
    <NavigationListItem>
        <Link to="/">Oose</Link>
    </NavigationListItem>
    <NavigationListItem>
        <a className="Link" href="https://github.com/blueflag/oose">Github</a>
    </NavigationListItem>
    <NavigationListItem>- <Link to="/api/Moose">Moose</Link></NavigationListItem>
    <NavigationListItem>- <Link to="/api/Goose">Goose</Link></NavigationListItem>
    <NavigationListItem>- <Link to="/api/Spruce">Spruce</Link></NavigationListItem>
    <NavigationListItem>- <Link to="/api/Bruce">Bruce</Link></NavigationListItem>
</NavigationList>;
