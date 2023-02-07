import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "../model/product.model";

@Component({
  selector: "app-product-delete",
  templateUrl: "./product-delete.component.html",
  styleUrls: ["./product-delete.component.css"],
})
export class ProductDeleteComponent implements OnInit {
  product: Product = { id: 0, name: "", price: 0 };
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if (id == null) {
      this.productService.showMessage("Erro ao excluir o produto!");
    } else {
      this.productService.readById(id).subscribe((product) => {
        this.product = product;
      });
    }
  }

  deleteProduct(): void {
    const id = this.product.id as number;
    this.productService.delete(id).subscribe(() => {
      this.productService.showMessage("Produto Excluido!");
      this.router.navigate(["/products"]);
    });
  }

  cancelProduct(): void {
    this.router.navigate(["/products"]);
  }
}
