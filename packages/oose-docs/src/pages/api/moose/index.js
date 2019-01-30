// @flow
import type {Node} from 'react';
import React from 'react';
import {Typography} from 'dcme-style';
import MooseMarkdown from 'pages/api/moose/moose.md';
import MooseNavigation from 'component/MooseNavigation';
import PageLayout from 'component/PageLayout';

export default () => <PageLayout
    theme="moose"
    modifier="marginBottom"
    nav={() => <MooseNavigation />}
    content={() => <Typography><MooseMarkdown /></Typography>}
/>;
