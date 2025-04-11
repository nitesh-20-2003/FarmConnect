// components/products/Filters.tsx
"use client";

import { useSearchParams } from "next/navigation";
import FormInput from "../form/FormInput";
import { FormSelect } from "../form/FormSelect";
import FormRange from "../form/FormRange";
import FormCheckbox from "../form/FormCheckBox";
import { Button } from "../ui/button";
import Link from "next/link";
const Filters = ({ meta }: { meta: any }) => {
  // console.log(meta.companies);
 console.log(meta)
  const searchParams = useSearchParams();
  // const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "all";
  const state=searchParams.get("state")||"all";
  const company = searchParams.get("company") || "all";
  // const order = searchParams.get("order") || "";
  const price = searchParams.get("price") ||"10";
  const shipping = searchParams.get("shipping") === "false";
  const rating=searchParams.get("rating")||"5";
  const search=searchParams.get("search")||"";
      // meta=meta;
      // console.log(meta)
  return (
    <form className="rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* Category select */}
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search categorie"
        name="search"
        // size="input-sm"
        defaultValue={search}
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
        defaultValue={state}
      />
      {/* Other fields like Order, Price, Shipping */}
      <FormSelect
        type="select"
        label="order"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
        defaultValue={"a-z"}
      />
      {/* rating*/}
      {/* <FormSelect
        type="select"
        label="rating"
        name="rating"
        list={["5", "4", "3", "2", "1"]} // Pass categories from meta
        size="select-sm"
        defaultValue={rating}
      /> */}
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
        defaultValue={shipping}
      />

      {/* Buttons */}
      <div className="flex flex-row ml-25">
        <div className="flex m-6">
          <Button type="submit" size={"lg"}>
            search
          </Button>
        </div>
        <div className="flex m-6 pr-9">
          <Link
            href={`/products?search=&company=all&state=all&order=a-z&rating=5&price=100`}
          ></Link>
          <Button type="submit" size={"lg"}>
            Reset
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Filters;

