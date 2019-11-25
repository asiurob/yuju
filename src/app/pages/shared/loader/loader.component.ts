import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../services/loader.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  public color = 'primary';
  public mode = 'indeterminate';
  public value = 50;
  public isLoading: Subject<boolean>;
  constructor(
    private LOADER: LoaderService
  ) { }

  ngOnInit() {  
    this.isLoading = this.LOADER.isLoading;
  }

}
