import { Component, OnInit } from '@angular/core';
import { AbfragenService } from '../abfragen.service';
import { IVersion } from '../iversion';

@Component({
  selector: 'app-abfragen',
  templateUrl: './abfragen.component.html',
  styleUrls: ['./abfragen.component.css']
})
export class AbfragenComponent implements OnInit {
  ver = [];
  mockVer = [];
  
  constructor(private abfragenService: AbfragenService) { }

  ngOnInit() {
  }
  showVersion(): void {
    this.abfragenService.getVersion()
    .subscribe(data => this.ver = data);
  }
  showMockVersion(): void {
    this.abfragenService.getMockVersion()
    .subscribe(data => this.mockVer = data);
  }

}