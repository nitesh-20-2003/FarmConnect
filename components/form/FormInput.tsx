import { Label } from "../ui/label";
import { Input } from "../ui/input";

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  size ?:string
};

function FormInput({
  label,
  name,
  type,
  defaultValue,
  placeholder,
  size
}: FormInputProps) {
  return (
    <div className="mb-2">
      <div className="ml-2">
        <Label htmlFor={name} className="capitalize">
          {label || name}
        </Label>
      </div>

      <Input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        className={`select select-bordered ${size} mt-2 `}
        placeholder={placeholder}
        // required
      />
    </div>
  );
}

export default FormInput;
