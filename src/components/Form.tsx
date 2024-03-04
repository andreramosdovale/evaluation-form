import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string(),
  rating: z.string(),
  comment: z.string(),
});

type formSchemaType = z.infer<typeof formSchema>;

export function Form() {
  const { register, handleSubmit } = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
  });

  function handleSubmitForm(data: formSchemaType) {
    return data;
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <input placeholder="Name" {...register("rating")} />
      <input placeholder="Rating" {...register("name")} />
      <input placeholder="Comment" {...register("comment")} />

      <button type="submit">registrar</button>
    </form>
  );
}
