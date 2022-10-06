import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
class SidebarItem {
  constructor(id: number, label: string, icon: string, route: string | null, showChild: boolean = false, childItems: SidebarItem[] = []) {
    this.id = id;
    this.label = label;
    this.icon = icon;
    this.route = route;
    this.showChild = showChild;
    this.childItems = childItems;
  }
  id: number = 0;
  label: string = '';
  icon: string = '';
  route: string | null = '';
  showChild: boolean = false;
  childItems: SidebarItem[] = [];
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  //#region Variables Declaration
  public selectedItem: SidebarItem;
  // protected ngUnsubscribe$: Subject<void> = new Subject<void>();
  public crudDesignSidebarItems: SidebarItem[] = [
    new SidebarItem(1, 'Add', '', 'add'),
    new SidebarItem(2, 'Edit', '', 'edit'),
    new SidebarItem(3, 'Preview', '', 'preview'),
    new SidebarItem(4, 'Delete', '', 'delete'),
    new SidebarItem(5, 'Table', '', 'table'),
  ];
  public crudInModalDesignSidebarItems: SidebarItem[] = [
    new SidebarItem(1, 'Add in modal', '', 'add-modal'),
    new SidebarItem(2, 'Edit in modal', '', 'edit-modal'),
    new SidebarItem(3, 'Preview in modal', '', 'preview-modal'),
    new SidebarItem(4, 'Delete in modal', '', 'delete-modal'),
    new SidebarItem(5, 'Table in modal', '', 'table-modal'),
  ];
  public fixedBodyDesignSidebarItems: SidebarItem[] = [
    new SidebarItem(1, 'Header', '', 'header'),
    new SidebarItem(2, 'Sidebar', '', 'sidebar'),
    new SidebarItem(3, 'Footer', '', 'footer'),
  ];
  public otherDesignSidebarItems: SidebarItem[] = [
    new SidebarItem(1, 'Components', '', 'component'),
    new SidebarItem(2, 'Profile', '', 'profile'),
    new SidebarItem(3, 'Login', '', 'login'),
    new SidebarItem(4, 'Dashboard', '', 'dashboard'),
  ];
  public designSidebarItems: SidebarItem[] = [
    new SidebarItem(1, '1. Crud', '', null, false, this.crudDesignSidebarItems),
    new SidebarItem(2, '2. Crud in modal', '', null, false, this.crudInModalDesignSidebarItems),
    new SidebarItem(3, '3. Fixed', '', null, false, this.fixedBodyDesignSidebarItems),
    new SidebarItem(4, '4. Others', '', null, false, this.otherDesignSidebarItems),
  ];
  public campaignSidebarItems: SidebarItem[] = [
    new SidebarItem(1, '1. List', '', ''),
    new SidebarItem(2, '2. Create', '', 'create'),
    new SidebarItem(3, '3. View', '', 'view'),
    new SidebarItem(4, '4. Update', '', 'update'),
    new SidebarItem(5, '5. Delete', '', 'delete'),
  ];
  public pluginsSidebarItems: SidebarItem[] = [
    new SidebarItem(1, '1. Autocomplete Dropdown', '', 'autocomplete-dropdown'),
    new SidebarItem(2, '2. Button', '', 'button'),
    new SidebarItem(3, '3. Check Box', '', 'check-box'),
    new SidebarItem(4, '4. Date Picker', '', 'date-picker'),
    new SidebarItem(5, '5. Date Time Picker', '', 'date-time-picker'),
    new SidebarItem(6, '6. Dialog Box', '', 'dialog-box'),
    new SidebarItem(7, '7. Email Box', '', 'email-box'),
    new SidebarItem(8, '8. Menu', '', 'menu'),
    new SidebarItem(9, '9. Number Box', '', 'number-box'),
    new SidebarItem(10, '10. Progress Bar', '', 'progress-bar'),
    new SidebarItem(11, '11. Progress Spinner', '', 'progress-spinner'),
    new SidebarItem(12, '12. Radio Button', '', 'radio-button'),
    new SidebarItem(13, '13. Search Box', '', 'search-box'),
    new SidebarItem(14, '14. Select Dropdown', '', 'select-dropdown'),
    new SidebarItem(15, '15. Tab', '', 'tab'),
    new SidebarItem(16, '16. Table', '', 'table'),
    new SidebarItem(17, '17. Text Area', '', 'text-area'),
    new SidebarItem(18, '18. Text Box', '', 'text-box'),
    new SidebarItem(19, '19. Time Picker', '', 'time-picker'),
    new SidebarItem(20, '20. Toast Message', '', 'toast-message'),
    new SidebarItem(21, '21. Tool Tip', '', 'tool-tip'),
  ];
  public sidebarItems: SidebarItem[] = [
    // new SidebarItem(11, 'Design', 'fa fa-home', 'design', this.designSidebarItems),
    // new SidebarItem(1, 'Campaign', 'fa fa-home', 'campaign', this.campaignSidebarItems),
    // new SidebarItem(1, 'Simple-Maps', 'fa fa-home', 'simple-maps'),
    // new SidebarItem(1, 'Helper', 'fa fa-home', 'helper'),
    new SidebarItem(1, 'Plugins', 'fa fa-home', 'plugins', true,this.pluginsSidebarItems),
  ];
  //#endregion

  //#region Constructor
  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) {

  }
  //#endregion

  //#region Input & Output

  //#endregion

  //#region lifecycle hook Methods
  ngOnInit(): void {
    //NGRX
    // .pipe(takeUntil(this.ngUnsubscribe$))
  }
  ngAfterViewInit() {

  }
  ngOnDestroy() {
    // this.ngUnsubscribe$.next();
    // this.ngUnsubscribe$.complete();
  }
  //#endregion

  //#region HTML Events
  public selectSidebarItem(item: SidebarItem): void {
    this.selectedItem = item;
    if (item.childItems.length > 0) {
      item.showChild = !item.showChild;
    }
    let routes: string[] = [];
    this.addRoutes(item.route, routes);
    this._router.navigate(routes, { relativeTo: this._activatedRoute })
  }
  public selectChildSidebarItem(item: SidebarItem, parentItem: SidebarItem): void {
    this.selectedItem = item;
    if (item.childItems.length > 0) {
      item.showChild = !item.showChild;
    }
    let routes: string[] = [];
    this.addRoutes(parentItem.route, routes);
    this.addRoutes(item.route, routes);
    this._router.navigate(routes, { relativeTo: this._activatedRoute });
  }
  public selectSecondChildSidebarItem(item: SidebarItem, parentItem: SidebarItem, grandParentItem: SidebarItem): void {
    this.selectedItem = item;
    if (item.childItems.length > 0) {
      item.showChild = !item.showChild;
    }
    let routes: string[] = [];
    this.addRoutes(grandParentItem.route, routes);
    this.addRoutes(parentItem.route, routes);
    this.addRoutes(item.route, routes);
    this._router.navigate(routes, { relativeTo: this._activatedRoute });
  }
  //#endregion

  //#region Api Methods

  //#endregion

  //#region Private Methods
  private addRoutes(route: string | null, routes: string[]) {
    if (route) {
      routes.push(route);
    }
  }
  //#endregion
}
