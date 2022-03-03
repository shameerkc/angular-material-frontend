import { Component, OnInit } from '@angular/core';
import { VolumeService } from '../volume.service';
import { VolumeData } from '../volumedata';

@Component({
  selector: 'app-volume',
  templateUrl: './volume.component.html',
  styleUrls: ['./volume.component.css']
})

export class VolumeComponent implements OnInit {
  volumeData: VolumeData[] = [];
  displayedColumns: string[] = [];


  constructor(public volumeService: VolumeService) { }

  ngOnInit(): void {
    this.volumeService.getVolumes().subscribe(

      resp => this.handleResponse(resp)
    );
    console.log("Log the content" + this.volumeData);
  }

  handleResponse(resp: VolumeData[]): void {
    this.volumeData = resp;
    this.displayedColumns = ['name', 'id', 'usedVolume', 'availableVolume'];
  }
}

