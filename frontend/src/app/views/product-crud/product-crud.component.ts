import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-crud",
  templateUrl: "./product-crud.component.html",
  styleUrls: ["./product-crud.component.css"],
})
export class ProductCrudComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  navigateProductCreate(): void {
    this.router.navigate(["/products/create"]);
  }
}
