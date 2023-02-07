import { Product } from "./../model/product.model";
import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { ProductService } from "../product.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-product-update",
  templateUrl: "./product-update.component.html",
  styleUrls: ["./product-update.component.css"],
})
export class ProductUpdateComponent implements OnInit {
  product: Product = { name: "", price: 0 };
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if (id == null) {
      this.productService.showMessage("Erro ao editar o produto!");
    } else {
      this.productService.readById(id).subscribe((product) => {
        this.product = product;
      });
    }
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage("Produto Atualizado!");
      this.router.navigate(["/products"]);
    });
  }

  cancelProduct(): void {
    this.router.navigate(["/products"]);
  }
}
