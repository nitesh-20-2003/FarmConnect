import ProductsContainer from "@/components/products/ProductsContainer";
import { PaginationDemo } from "@/components/products/pagination";
import Filters from "@/components/products/Filters";
import { fetchAllProducts } from "@/utils/action";
async function ProductsPage({
  searchParams,
}: {
  searchParams: {
    layout?: string;
    search?: string;
    sortBy?: string;
    state?: string;
    freeShipping?: string;
  };
}) {
  const layout = searchParams.layout || "grid";
  const search = searchParams.search || "";
  const sortBy = searchParams.sortBy || "";
  const state = searchParams.state || "";
  const freeShipping = searchParams.freeShipping || "";
  const products=await fetchAllProducts({search});
  const categories = Array.from(new Set(products.map((p: any) => p.category)));
  const companies = Array.from(new Set(products.map((p: any) => p.company)));
  const states = Array.from(new Set(products.map((p: any) => p.state)));
  // console.log(categories);
  // Create meta data object with required information
  const meta = {
    categories,
    companies,
    states,
    // You can add more meta data if needed
  };
  return (
    <>
      <Filters meta={{meta}} />
      <ProductsContainer
        layout={layout}
        search={search}
        // sortBy={sortBy}
        // state={state}
        // freeShipping={freeShipping}
      />
      <PaginationDemo />
    </>
  );
}

export default ProductsPage;
