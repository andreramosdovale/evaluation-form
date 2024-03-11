import { useState } from "react";
import { Form } from "./components/Form";

function App() {
  const [step, setStep] = useState<1 | 2>(1);

  function changeStep() {
    setStep(2);
  }

  const renderComponent = {
    1: <Form changeStep={changeStep} />,
    2: <Form changeStep={changeStep} />,
  };

  return renderComponent[step];
}

export default App;
