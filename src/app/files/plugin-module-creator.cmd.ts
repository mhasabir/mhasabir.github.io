var pluginModuleList: string[] = [
    'autocomplete-dropdown',
    'button',
    'check-box',
    'date-picker',
    'date-time-picker',
    'dialog-box',
    'email-box',
    'menu',
    'number-box',
    'progress-bar',
    'progress-spinner',
    'radio-button',
    'search-box',
    'select-dropdown',
    'tab',
    'table',
    'text-area',
    'text-box',
    'time-picker',
    'toast-message',
    'tool-tip',
];
pluginModuleList.forEach(element => {
    let skipTest: string = ' --skipTests=true';
    // console.log('ng g m ' + element);
    // console.log('ng g c ' + element + skipTest);
    // console.log('ng g class  ' + element + '/' + element + ' --type=model' + skipTest);

    //View component
    // console.log('ng g c ' + element + '/' + 'components/' + 'view-' + element + skipTest);
});

// All Module Name
pluginModuleList.forEach(element => {
    //console.log(element.split('-').map(x => x.charAt(0).toUpperCase() + x.slice(1)).join('') + 'Module,');
});

// All Export Cmponents
pluginModuleList.forEach(element => {
    // console.log(element.split('-').map(x => x.charAt(0).toUpperCase() + x.slice(1)).join('') + 'Component,');
    // console.log('View' + element.split('-').map(x => x.charAt(0).toUpperCase() + x.slice(1)).join('') + 'Component,');
    // console.log('\n');
});
// All plugins route object 
pluginModuleList.forEach(element => {
    // let componet: string = 'View' + element.split('-').map(x => x.charAt(0).toUpperCase() + x.slice(1)).join('') + 'Component';
    // // All plugins route object ,
    // console.log(`{path:'${element}', component: ${componet}},`);
});
// Sidebar items
pluginModuleList.forEach((element, index) => {
    let itemName: string = element.split('-').map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(' ');
    console.log(`new SidebarItem(${index + 1},'${index + 1}. ${itemName}', '', '${element}'),`);
});
// public campaignSidebarItems: SidebarItem[] = [
//     new SidebarItem(1, '1. List', '', ''),
//     new SidebarItem(2, '2. Create', '', 'create'),
//     new SidebarItem(3, '3. View', '', 'view'),
//     new SidebarItem(4, '4. Update', '', 'update'),
//     new SidebarItem(5, '5. Delete', '', 'delete'),
// ];
// npx ts-node plugin-module-creator.cmd.ts