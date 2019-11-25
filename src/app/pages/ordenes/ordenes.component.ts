import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ProvidersService } from '../../services/providers.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductsService } from '../../services/products.service';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})

export class OrdenesComponent implements OnInit {
  public tabs: Array<any> = [];
  public selectedTab = new FormControl(0);
  public separatorKeysCodes: number[] = [ENTER, COMMA];
  public chipControl = new FormControl();
  public chipControl2 = new FormControl();
  public selectStatus = new FormControl();
  public selectStatus2 = new FormControl();
  public filteredproviders: Observable<string[]>;
  public providers: string[] = [];
  public allproviders: string[] = [];
  public displayedColumns: string[] = ['image', 'created_at', 'sku', 'brand', 'condition', 'address', 'stock', 'price', 'actions'];
  public dataSource: MatTableDataSource<any>;
  public totalProducts = 0;
  public pageEvent: PageEvent;

  @ViewChild('providerInput', {static: false}) providerInput: ElementRef<HTMLInputElement>;
  @ViewChild('providerInput2', {static: false}) providerInput2: ElementRef<HTMLInputElement>;
  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private PROVIDERS_SERVICE: ProvidersService,
    public PRODUCTS_SERVICE: ProductsService,
    private SNACKBAR: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.filteredproviders = this.chipControl.valueChanges.pipe(
      startWith(null),
      map((provider: string | null) => provider ? this._filter(provider) : this.allproviders.slice())
    );

    this.PROVIDERS_SERVICE.getProviders().subscribe(
      ( res: any ) => this.allproviders = res.map( ( r: any ) => r.name ),
      ( err: any ) => this.SNACKBAR.open( err.message, 'OK', { duration: 5000 } )
    );

    this.fetchProducts();
  }

  paginate( e: PageEvent ) {
    this.fetchProducts( e.pageSize, ( e.pageIndex + 1 ) );
  }

  fetchProducts( size: number = 10, page: number = 1 ) {
    this.PRODUCTS_SERVICE.getProducts( size, page ).subscribe(
      ( res: any ) => {
        this.dataSource = new MatTableDataSource( res.body );
        this.dataSource.sort = this.sort;
        this.totalProducts = Number( res.headers.get('x-pagination-total-count') );
        this.dataSource._updateChangeSubscription();
      },
      ( err: any ) => this.SNACKBAR.open( err.message, 'OK', { duration: 5000 } )
    );
  }

  deleteProduct( id: number ) {
    const index = this.dataSource.data.map( ( e: any) => e.pk ).indexOf( id );
    if ( this.dataSource ) {
      this.dataSource.data.splice( index, 1 );
      this.dataSource._updateChangeSubscription();
    }
  }

  add(event: MatChipInputEvent): void {
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      if ((value || '').trim()) {
        this.providers.push(value.trim());
      }
      if (input) {
        input.value = '';
      }

      this.chipControl.setValue(null);
    }
  }

  remove(provider: string): void {
    const index = this.providers.indexOf(provider);

    if (index >= 0) {
      this.providers.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.providers.push(event.option.viewValue);
    this.providerInput.nativeElement.value = '';
    this.chipControl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allproviders.filter(provider => provider.toLowerCase().indexOf(filterValue) === 0);
  }


  addTab( product: any ) {
    this.tabs.push( product );
    this.selectedTab.setValue( this.tabs.length );
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }

}
