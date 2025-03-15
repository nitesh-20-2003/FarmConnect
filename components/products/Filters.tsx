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
      meta=meta.meta;
      console.log(meta)
  return (
    <form className="rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* Category select */}
      <FormSelect
        type="select"
        label="category"
        name="category"
        list={meta.categories} // Pass categories from meta
        size="select-sm"
        defaultValue={category}
      />
      {/* Company select */}
      <FormSelect
        type="select"
        label="company"
        name="company" // Note the corrected name attribute
        list={meta.companies} // Pass companies from meta
        size="select-sm"
        defaultValue={company}
      />
      {/* State select */}
      <FormSelect
        type="select"
        label="state"
        name="state"
        list={meta.states} // Pass states from meta
        size="select-sm"
        defaultValue=""
      />
      {/* Other fields like Order, Price, Shipping */}
      <FormSelect
        type="select"
        label="sort by"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
        defaultValue={order}
      />
      <FormRange
        type="range"
        name="price"
        label="select price"
        size="range-sm"
        price={price}
      />
      <FormCheckbox
        name="shipping"
        label="Free Shipping"
        size="checkbox-sm"
        defaultValue={true}
      />

      {/* Buttons */}
      <div className="flex flex-row ml-25">
        <div className="flex m-6">
          <Button type="submit" size={"lg"}>
            search
          </Button>
        </div>
        <div className="flex m-6 pr-9">
          <Button type="submit" size={"lg"}>
            Reset
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Filters;
