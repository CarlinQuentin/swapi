import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service'
import { FormControl, FormGroup } from  '@angular/forms'
import { isNgTemplate } from '../../../node_modules/@angular/compiler';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {
  public search;
  dat;
  info;
  serch;
  Search = new FormGroup ({
    item: new FormControl(''),
    name: new FormControl(''),
  })

  constructor(private starwarsService: StarwarsService ) {

   }

  ngOnInit() {
  }

  getData(): void {
    let datas = this.Search.value
    let items = datas.item
    let names = datas.name
  this.dat = this.starwarsService.getData(items, names)
    .subscribe(dat => 
      { this.search = dat
        this.info = this.search.results
        // console.log(this.info) 
      });
    }
  }
  