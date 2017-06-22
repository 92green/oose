var SpruceComponent = require('stampy/lib/util/SpruceComponent');

var overrides = {
    Text: 'span',
    Label: 'label',
    Link: 'a',
    List: 'ul',
    ListItem: 'li',
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
    'DayPicker',
    'DeadEnd',
    'Divider',
    'Dropdown',
    'FieldRow',
    'Grid',
    'Grid_column',
    'Icon',
    'Input',
    'InputRow',
    'Label',
    'Link',
    'List',
    'ListItem',
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
    'Tab',
    'TabSet',
    'Table',
    'Terminal',
    'Text',
    'Toggle',
    'ToggleSet',
    'Typography',
    'Wrapper'
];

function createComponentMap(rr, key) {
    rr[key] = SpruceComponent.default(key, overrides[key] || 'div');
    return rr;
}

module.exports = list.reduce(createComponentMap, {});
