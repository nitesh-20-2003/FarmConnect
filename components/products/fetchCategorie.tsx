// pages/products.tsx (or wherever the Filters component is being used)

import Filters from "@/components/products/Filters";
import { fetchCategorie } from "@/utils/action";

export async function getServerSideProps() {
  const categorie = await fetchCategorie();

  return {
    props: {
      categorie,
    },
  };
}

const ProductsPage = ({ categorie }:any) => {
  return (
    <div>
      <Filters
        meta={{ companies: ["Company A", "Company B"], categories: categorie }}
      />
    </div>
  );
};

export default ProductsPage;
