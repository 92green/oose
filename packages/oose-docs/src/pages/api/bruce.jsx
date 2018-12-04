// @flow
import type {Node} from 'react';
import React from 'react';
import ApiPage from 'component/ApiPage';
import intro from 'docs/api/bruce/_bruce.md';

// functions
import Capitalize from 'docs/api/bruce/function/Capitalize.md';
import Color from 'docs/api/bruce/function/Color.md';
import First from 'docs/api/bruce/function/First.md';
import Fixed from 'docs/api/bruce/function/Fixed.md';
import Font from 'docs/api/bruce/function/Font.md';
import FourProps from 'docs/api/bruce/function/FourProps.md';
import Grey from 'docs/api/bruce/function/Grey.md';
import Invert from 'docs/api/bruce/function/Invert.md';
import Last from 'docs/api/bruce/function/Last.md';
import MapGetIn from 'docs/api/bruce/function/MapGetIn.md';
import Pastel from 'docs/api/bruce/function/Pastel.md';
import Power from 'docs/api/bruce/function/Power.md';
import RepeatChar from 'docs/api/bruce/function/RepeatChar.md';
import StripUnits from 'docs/api/bruce/function/StripUnits.md';
import Zindex from 'docs/api/bruce/function/Zindex.md';

// mixins
import Animations from 'docs/api/bruce/mixin/Animations.md';
import BoxSizing from 'docs/api/bruce/mixin/BoxSizing.md';
import Breakpoints from 'docs/api/bruce/mixin/Breakpoints.md';
import Clearfix from 'docs/api/bruce/mixin/Clearfix.md';
import DirectionModifiers from 'docs/api/bruce/mixin/DirectionModifiers.md';
import Ellipsis from 'docs/api/bruce/mixin/Ellipsis.md';
import Flood from 'docs/api/bruce/mixin/Flood.md';
import Fontface from 'docs/api/bruce/mixin/Fontface.md';
import Grid from 'docs/api/bruce/mixin/Grid.md';
import Hide from 'docs/api/bruce/mixin/Hide.md';
import Ratio from 'docs/api/bruce/mixin/Ratio.md';
import Reset from 'docs/api/bruce/mixin/Reset.md';
import Size from 'docs/api/bruce/mixin/Size.md';
import SpruceChild from 'docs/api/bruce/mixin/SpruceChild.md';
import SpruceComponent from 'docs/api/bruce/mixin/SpruceComponent.md';
import SpruceModifier from 'docs/api/bruce/mixin/SpruceModifier.md';
import SprucePeer from 'docs/api/bruce/mixin/SprucePeer.md';


const md = {
    _desc: intro,
    Capitalize,
    Color,
    First,
    Fixed,
    Font,
    FourProps,
    Grey,
    Invert,
    Last,
    MapGetIn,
    Pastel,
    Power,
    RepeatChar,
    StripUnits,
    Zindex,
    Animations,
    BoxSizing,
    Breakpoints,
    Clearfix,
    DirectionModifiers,
    Ellipsis,
    Flood,
    Fontface,
    Grid,
    Hide,
    Ratio,
    Reset,
    Size,
    SpruceChild,
    SpruceComponent,
    SpruceModifier,
    SprucePeer,
    _after: () => null
};

const api = `
# Mixins
Animations
BoxSizing
Breakpoints
Clearfix
DirectionModifiers
Ellipsis
Flood
Fontface
Grid
Hide
Ratio
Reset
Size
SpruceChild
SpruceComponent
SpruceModifier
SprucePeer

# Functions
Capitalize
Color
First
Fixed
Font
FourProps
Grey
Invert
Last
MapGetIn
Pastel
Power
RepeatChar
StripUnits
Zindex

`;

export default () => <ApiPage
    name="Spruce"
    api={api}
    md={md}
/>;
