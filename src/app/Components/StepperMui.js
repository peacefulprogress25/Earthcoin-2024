import { Box, Step, StepButton, Stepper } from "@mui/material";
import { useState } from "react";

const steps = ["", "", "", ""];

export default function StepperMui({ onChange, className }) {
  const [activeStep, setActiveStep] = useState(0);
  const handleStep = (step) => {
    setActiveStep(step);
    onChange(step);

  };

  return (
    <div className={`w-[40%] ${className}`}>
      <Box sx={{ width: "100%" }}>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepButton color='inherit' onClick={() => handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  );
}
