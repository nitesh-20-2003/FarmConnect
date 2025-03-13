import ProductsContainer from "@/components/products/ProductsContainer";
import {PaginationDemo} from "@/components/products/pagination";
import Filters from "@/components/products/Filters";
async function ProductsPage({
  searchParams,
}: {
  searchParams: { layout?: string; search?: string };
}) {
  const layout = (await searchParams).layout || "grid";
  const search = (await searchParams).search || "";
  return (
    <>
    <Filters meta={{}} />
      <ProductsContainer layout={layout} search={search} />
      <PaginationDemo />
    </>
  );
}
export default ProductsPage;
