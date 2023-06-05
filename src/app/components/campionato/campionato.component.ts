import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-campionato',
  templateUrl: './campionato.component.html',
  styleUrls: ['./campionato.component.css']
})
export class CampionatoComponent implements OnInit{
  
  datiCalendario: any[] = [];

  giornate = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38];

  constructor(private apiService: ApiService) {

  }

  ngOnInit() {
    this.apiService.leggiGiornate().subscribe(
      (data: any) => {
        console.log(data);
        this.datiCalendario = data;
      },
      (err: any) => {console.log(err);}
      );
  }
}
