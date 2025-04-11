"use client";

import { useSearchParams } from "next/navigation";
import FormInput from "../form/FormInput";
import { FormSelect } from "../form/FormSelect";
import FormRange from "../form/FormRange";
import FormCheckbox from "../form/FormCheckBox";
import { Button } from "../ui/button";
import Link from "next/link";

type MetaType = {
  companies: string[];
  states: string[];
};

const Filters = ({ meta }: { meta: MetaType }) => {
  const searchParams = useSearchParams();

  const state = searchParams.get("state") || "all";
  const company = searchParams.get("company") || "all";
  const price = searchParams.get("price") || "10";
  const shipping = searchParams.get("shipping") === "false";
  const search = searchParams.get("search") || "";
  // const rating = searchParams.get("rating") || "5"; // <-- Optional

  return (
    <form className="rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FormInput
        type="search"
        label="search categorie"
        name="search"
        defaultValue={search}
      />

      <FormSelect
        type="select"
        label="company"
        name="company"
        list={meta.companies}
        size="select-sm"
        defaultValue={company}
      />

      <FormSelect
        type="select"
        label="state"
        name="state"
        list={meta.states}
        size="select-sm"
        defaultValue={state}
      />

      <FormSelect
        type="select"
        label="order"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
        defaultValue={"a-z"}
      />

      {/* Uncomment this if needed */}
      {/* <FormSelect
        type="select"
        label="rating"
        name="rating"
        list={["5", "4", "3", "2", "1"]}
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

      <div className="flex flex-row ml-25">
        <div className="flex m-6">
          <Button type="submit" size="lg">
            search
          </Button>
        </div>
        <div className="flex m-6 pr-9">
          <Link
            href={`/products?search=&company=all&state=all&order=a-z&rating=5&price=100`}
          >
            <Button type="submit" size="lg">
              Reset
            </Button>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Filters;
