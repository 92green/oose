var SpruceComponent = require('stampy/lib/util/SpruceComponent');

var elementOverrides = {
    Breadcrumb: 'ol',
    BreadcrumbItem: 'li',
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
    BreadcrumbItem: 'Breadcrumb_item',
    GridItem: 'Grid_item',
    ListItem: 'List_item',
    OverlayContent: 'Overlay_content',
    TableBody: 'Table_body',
    TableCell: 'Table_cell',
    TableFoot: 'Table_foot',
    TableHead: 'Table_head',
    TableHeadCell: 'Table_headCell',
    TableRow: 'Table_row',
    WindowTitle: 'Window_title',
    WindowContent: 'Window_content'
};

var list = [
    'Animation',
    'Badge',
    'Box',
    'Breadcrumb',
    'BreadcrumbItem',
    'Button',
    'Checkbox',
    'Choice',
    'DayPicker',
    'Divider',
    'Dropdown',
    'Grid',
    'GridItem',
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
    'Navigation',
    'Overlay',
    'OverlayContent',
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
    'Window',
    'WindowTitle',
    'WindowContent',
    'Wrapper'

];

var componentAliases = {
    Column: 'GridItem'
};

function createComponentMap(rr, key) {
    rr[key] = SpruceComponent.default(spruceNameOverrides[key] || key, elementOverrides[key] || 'div');
    return rr;
}

function addAliases(rr, key) {
    rr[key] = rr[componentAliases[key]];
    return rr;
};

var componentMap = list.reduce(createComponentMap, {});

module.exports = Object
    .keys(componentAliases)
    .reduce(addAliases, componentMap);
