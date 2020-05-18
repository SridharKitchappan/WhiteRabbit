import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeUserDataService {
  private homeUserDataURL = 'https://randomuser.me/api/0.8/?results=20';

  constructor(private http: HttpClient) { }

  loadedHomeUserData() {
    return this.http.get<string>(this.homeUserDataURL);
  }

}
