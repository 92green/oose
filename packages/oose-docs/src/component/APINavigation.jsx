// @flow
import React from "react";
import {NavigationList, NavigationListItem} from 'dcme-style';
import Link from 'component/Link';

export default () => <NavigationList>
    <NavigationListItem><Link to="/api/Moose">Moose</Link></NavigationListItem>
    <NavigationListItem><Link to="/api/Goose">Goose</Link></NavigationListItem>
    <NavigationListItem><Link to="/api/Spruce">Spruce</Link></NavigationListItem>
    <NavigationListItem><Link to="/api/Bruce">Bruce</Link></NavigationListItem>
</NavigationList>;
