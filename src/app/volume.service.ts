import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VolumeData } from './volumedata';

@Injectable({
  providedIn: 'root'
})
export class VolumeService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getVolumes(): Observable<VolumeData[]> {
    return this.httpClient.get<VolumeData[]>("http://localhost:3000/volume")
  }


}
