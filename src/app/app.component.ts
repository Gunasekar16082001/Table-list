import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Table-list';
  totalAngularPackages;

constructor(private http: HttpClient) { }

    ngOnInit() {  
      const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }
      this.http.get<SearchResults>('https://api.npms.io/v2/invalid-url', { headers } ).subscribe({
       next: data =>  this.totalAngularPackages = data.total,
      error:  error =>  console.error('There was an error!', error)
     } )
}
}

interface SearchResults {
  total: number;
  results: Array<object>;
}