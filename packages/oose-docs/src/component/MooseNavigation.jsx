// @flow
import React from "react";
import {NavigationList, Link as A, NavigationListItem} from 'dcme-style';
import Link from 'component/Link';

export default () => <NavigationList>
    <NavigationListItem>Moose</NavigationListItem>
    <NavigationListItem><A href="#why">Why</A></NavigationListItem>
    <NavigationListItem><A href="#Core-Ideas">Core Ideas</A></NavigationListItem>
    <NavigationListItem><A href="#Clientside-Concerns">Clientside Concerns</A></NavigationListItem>
    <NavigationListItem>- <A href="#Application-Layer">Application Layer</A></NavigationListItem>
    <NavigationListItem>- <A href="#Interaction-Layer">Interaction Layer</A></NavigationListItem>
    <NavigationListItem><A href="#Moose-Terms">Moose Terms</A></NavigationListItem>
    <NavigationListItem>- <A href="#Affordance">Affordance</A></NavigationListItem>
    <NavigationListItem>- <A href="#Appliance">Appliance</A></NavigationListItem>
    <NavigationListItem>- <A href="#Layout">Layout</A></NavigationListItem>
    <NavigationListItem>- <A href="#Structure">Structure</A></NavigationListItem>
    <NavigationListItem>- <A href="#View">View</A></NavigationListItem>
</NavigationList>;
