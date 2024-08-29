import { Box, Step, StepButton, Stepper } from "@mui/material";
import { useState } from "react";

const steps = ['', '', '',""];

export default function StepperMui() {
    const [activeStep, setActiveStep] = useState(0);
    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    return (
        <div className="w-[40%]">
            <Box sx={{ width: '100%' }}>
                <Stepper nonLinear activeStep={activeStep}>
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepButton color="inherit" onClick={handleStep(index)}>
                                {label}
                            </StepButton>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        </div>


    )
}