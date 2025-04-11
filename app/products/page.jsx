import ProductsContainer from "@/components/products/ProductsContainer";
import {PaginationDemo} from "@/components/products/pagination";
import Filters from "@/components/products/Filters";
import { fetchAllProducts } from "@/utils/action";

export default async function ProductsPage({
  searchParams,
}) {
  const layout = searchParams.layout || "grid";
  const search = searchParams.search || "";
  const sortBy = searchParams.order || "a-z";
  const state = searchParams.state || "";
  const freeShipping = searchParams.freeShipping || false;
  // const category = searchParams.category || "all";
  const price = searchParams.price || 100;
  const company = searchParams.company || "all";
  const rating = searchParams.rating || 5;
  const page = searchParams.page ? Number(searchParams.page) : 1;
  const limit = 10; // Define how many items per page

  // Fetch products and total count
  const { products, totalProducts } = await fetchAllProducts({
    search,
    sortBy,
    state,
    freeShipping,
   
    rating,
    price,
    company,
    page,
    limit,
  });

  const categories = Array.from(new Set(products.map((p) => p.category)));
  const companies = Array.from(new Set(products.map((p) => p.company)));
  const states = Array.from(new Set(products.map((p) => p.state)));

  const meta = {
    categories,
    companies,
    states,
    totalProducts,
    page,
    pageCount: Math.ceil(totalProducts / limit),
  };

  return (
    <>
      <Filters meta={meta} />
      <ProductsContainer
        layout={layout}
        products={products}
        totalProducts={totalProducts}
      />
      <PaginationDemo meta={meta} />
    </>
  );
}
