import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Logo from "../assets/logo.svg";
import Check from "../assets/check.svg";

export function ReviewSubmitted() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      setSubmitted(true);
    }, 2000);
  }, []);

  return (
    <Box
      data-testid="review-submitted-component"
      sx={{ bgcolor: "#FE008A", height: "100vh" }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          height: "40vh",
          width: "100%",
          bgcolor: "#FE008A",
        }}
      >
        <img src={Logo} alt="Logotipo do App" width="80px" />
      </Box>
      <Box alignItems="center" display="flex" flexDirection="column" gap={4}>
        <Box
          sx={{
            height: "50px",
          }}
        >
          {submitted ? (
            <img src={Check} alt="Logotipo de ação finalizada" width="50px" />
          ) : null}
        </Box>
        <Box alignItems="center" display="flex" flexDirection="column" gap={2}>
          <Typography variant="h5" color="white">
            {submitted ? "Avaliação Enviada" : "Aguarde"}
          </Typography>
          <Typography variant="subtitle2" color="white">
            {submitted
              ? "Obrigado por avaliar nossos serviços"
              : "Estamos enviando sua avaliação"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
