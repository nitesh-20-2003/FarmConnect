import { formatCurrency } from "@/utils/format";
import { useState } from "react";

type FormRangeParams = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  size?: string;
  price?: string;
};

const FormRange = ({ label, name, size, price }: FormRangeParams) => {
  const step = 10;
  const maxPrice = 10000;
  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);

  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={name} className="text-sm font-medium">
        <div className="flex flex-row">
          <span className="block">{label}</span>
          <span className="ml-20">{formatCurrency(Number(selectedPrice))}</span>
        </div>
      </label>
      <input
        type="range"
        name={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(Number(e.target.value))}
        className={`h-2 rounded-md bg-zinc-900  ${
          size && size
        } cursor-pointer transition-colors`}
        step={step}
      />
      <div className="flex justify-between text-xs mt-1">
        <span className="font-semibold">0</span>
        <span className="font-semibold">Max: {formatCurrency(maxPrice)}</span>
      </div>
    </div>
  );
};

export default FormRange;
