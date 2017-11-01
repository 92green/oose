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
    TableBody: 'tbody',
    TableCell: 'td',
    TableFoot: 'tfoot',
    TableHead: 'thead',
    TableHeadCell: 'th',
    TableRow: 'tr',
    Text: 'span'
};

var spruceNameOverrides = {
    Column: 'Grid_column',
    ListItem: 'List_item',
    TableBody: 'Table_body',
    TableCell: 'Table_cell',
    TableFoot: 'Table_foot',
    TableHead: 'Table_head',
    TableHeadCell: 'Table_headCell',
    TableRow: 'Table_row'
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
    'Divider',
    'Dropdown',
    'Grid',
    'Icon',
    'Image',
    'Input',
    'Label',
    'Link',
    'List',
    'ListItem',
    'Login',
    'Logo',
    'Media',
    'Modal',
    'Navigation',
    'Pagination',
    'ProgressBar',
    'Select',
    'Tab',
    'TabSet',
    'Table',
    'Table',
    'TableBody',
    'TableCell',
    'TableFoot',
    'TableHead',
    'TableHeadCell',
    'TableRow',
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
