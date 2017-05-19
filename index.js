var SpruceComponent = require('stampy/lib/util/SpruceComponent');

var overrides = {
    Text: 'span',
    Label: 'label',
    Link: 'a',
    List: 'ul',
    Select: 'select',
    Table: 'table'
};

var list = [
    'Animation',
    'Badge',
    'Box',
    'Breadcrumbs',
    'Button',
    'Checkbox',
    'Choice',
    'ColumnSet',
    'DayPicker',
    'DeadEnd',
    'Dropdown',
    'Grid',
    'Heading',
    'Icon',
    'Input',
    'InputRow',
    'Label',
    'Link',
    'List',
    'Loader',
    'Login',
    'Media',
    'Message',
    'Modal',
    'Navigation',
    'Pagination',
    'ProgressBar',
    'Select',
    'Table',
    'ToggleSet',
    'Terminal',
    'Text',
    'Typography',
    'Wrapper'
];

module.exports = list.reduce((exports, key) => {
    exports[key] = SpruceComponent(key, overrides[key] || 'div');
}, {});
