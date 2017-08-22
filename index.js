var SpruceComponent = require('stampy/lib/util/SpruceComponent');

var elementOverrides = {
    Button: 'button',
    Divider: 'hr',
    Image: 'img',
    Label: 'label',
    Link: 'a',
    List: 'ul',
    ListItem: 'li',
    Select: 'select',
    Table: 'table',
    Text: 'span'
};

var spruceNameOverrides = {
    Column: 'Grid_column',
    ListItem: 'List_item'
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
    'DayPicker',
    'DeadEnd',
    'Divider',
    'Dropdown',
    'FieldRow',
    'Grid',
    'Icon',
    'Image',
    'Input',
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
    rr[key] = SpruceComponent.default(spruceNameOverrides[key] || key, elementOverrides[key] || 'div');
    return rr;
}

module.exports = list.reduce(createComponentMap, {});
