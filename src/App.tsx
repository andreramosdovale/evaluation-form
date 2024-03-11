import { useState } from "react";
import { Form } from "./components/Form";
import { ReviewSubmitted } from "./components/ReviewSubmitted";

function App() {
  const [step, setStep] = useState<1 | 2>(1);

  function changeStep() {
    setStep(2);
  }

  const renderComponent = {
    1: <Form changeStep={changeStep} />,
    2: <ReviewSubmitted />,
  };

  return renderComponent[step];
}

export default App;
