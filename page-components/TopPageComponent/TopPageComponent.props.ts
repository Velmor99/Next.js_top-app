import { TopPageModel } from "../../interfaces/page.interface";
import { ProductModel } from "../../interfaces/product.interface";


export interface TopPageComponentProps {
    firstCategory: string;
    page?: TopPageModel;
    products: ProductModel[];
}
  