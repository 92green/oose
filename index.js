var SpruceComponent = require('stampy/lib/util/SpruceComponent');

var overrides = {
    Text: 'span',
    Label: 'label',
    Link: 'a',
    List: 'ul',
    Select: 'select',
    Table: 'table',
    Divider: 'hr'
};

var list = [
    'Animation',
    'Badge',
    'Box',
    'Breadcrumbs',
    'Button',
    'Checkbox',
    'Choice',
    'Column',
    'ColumnSet',
    'DayPicker',
    'DeadEnd',
    'Divider',
    'Dropdown',
    'Icon',
    'Input',
    'InputRow',
    'Label',
    'Link',
    'List',
    'Loader',
    'Login',
    'Logo',
    'Media',
    'Message',
    'Modal',
    'Navigation',
    'Pagination',
    'ProgressBar',
    'Select',
    'Table',
    'Terminal',
    'Text',
    'Toggle',
    'ToggleSet',
    'Typography',
    'Wrapper'
];

module.exports = list.reduce((rr, key) => {
    rr[key] = SpruceComponent.default(key, overrides[key] || 'div');
    return rr;
}, {});
