import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';


@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  constructor(private serieService: SerieService) { }
  series: Array<Serie> = [];
  promedioTemporadas = 0;

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      let totalTemporadas = 0;
  
      for (let i = 0; i < series.length; i++) {
        totalTemporadas += series[i].seasons;
      }
  
      this.promedioTemporadas = totalTemporadas / series.length;
    });
  }
  
  ngOnInit() {
    this.getSeries();
  }

}
