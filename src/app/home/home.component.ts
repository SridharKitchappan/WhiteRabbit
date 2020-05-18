import { Component, OnInit } from '@angular/core';
import { HomeUserDataService } from '../services/home-user-data.service';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  rawuserData;
  userData;
  queryString;

  constructor(private Homeuserdata: HomeUserDataService) { }

  ngOnInit(): void {
    this.Homeuserdata.loadedHomeUserData().subscribe(data => {
      if (data) {
        localStorage.clear();
        localStorage.setItem('userData', JSON.stringify(data));
      }
    });

    if (localStorage.length) {
      const value = localStorage.getItem('userData');
      const a = JSON.parse(value);
      this.rawuserData = a['results'];
      // console.log(this.rawuserData);
    }

  }

}
