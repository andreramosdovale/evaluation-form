import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  TextField,
  Typography,
  Rating,
  Box,
  Button,
  FormHelperText,
} from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import Logo from "../assets/logo.svg";

const formSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório."),
  comment: z.string(),
});

type formSchemaType = z.infer<typeof formSchema>;
interface IProps {
  changeStep: () => void;
}

export function Form({ changeStep }: IProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
  });
  const [value, setValue] = useState<number | null>(0);

  function handleSubmitForm(data: formSchemaType) {
    const formData = { ...data, rating: value === null ? 0 : value };
    console.log(formData);

    return changeStep();
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <Box display="flex" alignItems="center" flexDirection="column" gap={4}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            height: "20vh",
            width: "100%",
            bgcolor: "#FE008A",
          }}
        >
          <img src={Logo} alt="Logotipo do App" />
        </Box>
        <Box
          sx={{ width: 296 }}
          alignItems="center"
          display="flex"
          flexDirection="column"
          gap={2}
        >
          <Typography variant="h5" align="center">
            Conte para gente quão satisfeito você está com os nossos serviços.
          </Typography>
          <Typography variant="subtitle2">Avalie de 1 á 5 estrelas</Typography>
          <Rating
            name="rating"
            value={value}
            size="large"
            onChange={(_, newValue) => {
              setValue(newValue);
            }}
          />
        </Box>
        <Box sx={{ width: 296 }}>
          <Typography py={1} variant="subtitle2">
            Nome
          </Typography>
          <TextField
            error={errors.name ? true : false}
            id="name"
            variant="outlined"
            size="small"
            fullWidth
            {...register("name")}
          />
          {errors.name && (
            <FormHelperText sx={{ color: "red" }}>
              {errors.name.message}
            </FormHelperText>
          )}
        </Box>
        <Box sx={{ width: 296, paddingBottom: 3 }}>
          <Typography py={1} variant="subtitle2">
            Comentário (opcional)
          </Typography>
          <Textarea id="comment" minRows={4} {...register("comment")} />
        </Box>
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{
            width: 296,
            height: 48,
            backgroundColor: "#FE008A",
            typography: "subtitle2",
            fontWeight: "normal",
            textTransform: "inherit",
            "&:hover": { backgroundColor: "#FE008A" },
          }}
        >
          Enviar avaliação
        </Button>
      </Box>
    </form>
  );
}
