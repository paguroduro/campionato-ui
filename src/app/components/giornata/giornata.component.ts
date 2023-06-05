import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service';

@Component({
  selector: 'app-giornata',
  templateUrl: './giornata.component.html',
  styleUrls: ['./giornata.component.css']
})
export class GiornataComponent implements OnInit{

  datiCampionato: any[] = [];
  campionatoGiocato = false;

  constructor(private apiService: ApiService) {

  }

  ngOnInit() {
    this.giocaCampionato()
  }

  giocaCampionato(){
    this.apiService.giocaCampionato().subscribe(
      (data: any) => {
        console.log(data);
        this.datiCampionato = data;
        this.campionatoGiocato = true;
      },
      (err: any) => {console.log(err);}
      );
  }
}
