import ProductsContainer from "@/components/products/ProductsContainer";

type tparams = Promise<{ layout?: string; search?: string }>;

async function ProductsPage(props: { params: tparams }) {
  const layout = (await props.params).layout || "grid";
  const search = (await props.params).search || "";

  return (
    <>
      <ProductsContainer layout={layout} search={search} />
    </>
  );
}

export default ProductsPage;
