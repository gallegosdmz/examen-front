import { Component, OnInit } from '@angular/core';
import { Data } from './models/data';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit{
  title = 'ex-front';
  public data: Data;
  public input: string;

  constructor (
    private _dataService: DataService
  ) {
    this.data = new Data('', '');
    this.input = this.data.input;
  }

  ngOnInit(): void {
    
  }

  convert() {
    
  }

  onSubmit(form:any) {
    this._dataService.send(this.data).subscribe(
        response => {
          console.log(response);
          form.reset();
        },
        error => {
          console.log(<any>error);
        }
    );

    
  }
}
