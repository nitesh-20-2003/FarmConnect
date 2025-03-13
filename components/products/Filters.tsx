// components/products/Filters.tsx
"use client";

import { useSearchParams } from "next/navigation";
import FormInput from "../form/FormInput";
import { FormSelect } from "../form/FormSelect";
import FormRange from "../form/FormRange";
import FormCheckbox from "../form/FormCheckBox";
import { Button } from "../ui/button";

const Filters = ({ meta }: { meta: any }) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  const company = searchParams.get("company") || "";
  const order = searchParams.get("order") || "";
  const price = searchParams.get("price") || "";
  const shipping = searchParams.get("shipping") === "false";

  const statesOfIndia = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry",
  ];

  return (
    <form className="rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        defaultValue={search}
      />
      {/* CATEGORIES */}
      <FormSelect
        type="select"
        label="category"
        name="category"
        list={meta.categories} // Use categories from the server
        size="select-sm"
        defaultValue={category}
      />

      {/* STATES */}
      <FormSelect
        type="select"
        label="state"
        name="state" // Changed from "company" to "state"
        list={statesOfIndia}
        size="select-sm"
        defaultValue={company} // Default state value could be from the searchParams
      />

      {/* ORDER */}
      <FormSelect
        type="select"
        label="sort by"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
        defaultValue={order}
      />

      {/* PRICE */}
      <FormRange
        type="range"
        name="price"
        label="select price"
        size="range-sm"
        price={price}
      />

      {/* SHIPPING */}
      <FormCheckbox
        name="shipping"
        label="Free Shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      />

      {/* BUTTONS */}
      <div className="flex flex-row ml-50">
        <div className="flex m-6">
          <Button type="submit" size={"lg"}>
            search
          </Button>
        </div>
        <div className="flex m-6">
          <Button type="submit" size={"lg"}>
            Reset
          </Button>
        </div>
      </div>
    </form>
  );
};
export default Filters