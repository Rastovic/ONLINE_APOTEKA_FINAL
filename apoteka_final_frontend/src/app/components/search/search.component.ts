import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  constructor(private router:Router,private activatedRoute : ActivatedRoute){

  }

  ngOnInit() {


  }

  doSearch(value:string){

    console.log(`value=${value}`);

    this.router.navigateByUrl(`/search/${value}`);





  }


}
