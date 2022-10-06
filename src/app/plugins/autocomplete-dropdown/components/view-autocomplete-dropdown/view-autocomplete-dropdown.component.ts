import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/files/products';
import { AutocompleteDropdownConfig, IAutocompleteDropdownConfig } from '../../autocomplete-dropdown.model';

@Component({
  selector: 'app-view-autocomplete-dropdown',
  templateUrl: './view-autocomplete-dropdown.component.html',
  styleUrls: ['./view-autocomplete-dropdown.component.scss']
})
export class ViewAutocompleteDropdownComponent implements OnInit {

  public actionTypeConfig: IAutocompleteDropdownConfig = new AutocompleteDropdownConfig({
    headerText: 'Products', placeholder: 'Select an product', primaryKey: 'Id',
    appearance: 'legacy',
    columns: [{ name: 'Name' }]
  });
  public productList: Products.IProduct[] = Products.data;
  public selectedProduct: Products.IProduct;
  constructor() { }

  ngOnInit(): void {
  }
  public selectedActionType(product: Products.IProduct): void {
    if (this.selectedProduct.Id !== product.Id) {
      this.selectedProduct.Id = product.Id;
    }
  }
}
