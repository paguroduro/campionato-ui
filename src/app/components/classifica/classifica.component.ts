import { Component } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-classifica',
  templateUrl: './classifica.component.html',
  styleUrls: ['./classifica.component.css']
})
export class ClassificaComponent implements OnInit {

  datiClassifica: any[] = [];
  

  //leggi commento riga 32
  currentUrl = '';

  constructor(private apiService: ApiService) {

  }

  ngOnInit() {
    this.leggiClassifica();
  }


  leggiClassifica() {
    this.apiService.leggiClassifica().subscribe(
      (data: any) => {
        console.log(data);
        this.datiClassifica = data;
      },
      (err: any) => {console.log(err);}
      );

  }

  
}


