import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../servicios/api.service";
import { Data } from "../../modelos/data";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public data = Array<Data>();
  public total = 0;
  public page = 0;
  public size = 3;

  constructor(private apiservice: ApiService) { }

  ngOnInit() {
    this.getData()
  }

  public getData() {
    this.apiservice.getData(this.page, this.size).subscribe(
      data => {
        this.data = data.data;
        this.total = data.total;
      },
      err => {
        console.log(err.error);
      }
    );
  }

  public rewind(): void {
      this.page--;
      this.getData();
  }

  public forward(): void {
      this.page++;
      this.getData();
  }

  public setPage(page: number): void {
    this.page = page;
    this.getData();
  }



}
