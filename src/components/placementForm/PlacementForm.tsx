import { SubmitHandler, useForm } from "react-hook-form";
import { PlacementFormData } from "../../types";

interface FormProps {
  onSubmit: SubmitHandler<PlacementFormData>;
  facingEnabled?: boolean;
}

const PlacementForm = ({ onSubmit, facingEnabled }: FormProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<PlacementFormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <input
        {...register("row", { required: "Row placement is required" })}
        aria-invalid={errors.row ? "true" : "false"}
        placeholder="Row"
        className="input"
        type="number"
      />
      {errors.row && <p>{errors.row.message}</p>}
      <input
        {...register("column", { required: "Column placement is required" })}
        aria-invalid={errors.column ? "true" : "false"}
        placeholder="Column"
        className="input"
        type="number"
      />
      {errors.column && <p>{errors.column.message}</p>}
      {facingEnabled && (
        <>
          <select
            {...register("facing", {
              required: "Facing direction is required",
            })}
            aria-invalid={errors.facing ? "true" : "false"}
            className="input"
          >
            <option value="NORTH">North</option>
            <option value="SOUTH">South</option>
            <option value="EAST">East</option>
            <option value="WEST">West</option>
          </select>
          {errors.facing && <p>{errors.facing.message}</p>}
        </>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default PlacementForm;
