import React, { useState } from "react";
import { Button, Stepper, Step, StepLabel } from "@material-ui/core";
import Dashboard from "../pages/Dashbord";
import BankDetail from "../pages/BankDetail";
import BussinessDetail from "../pages/BussinessDetail";
import PickupAddress from "../pages/PickupAddress";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

function getSteps() {
  return ["PickUp Address", "Bussiness Details", "Bank Details"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PickupAddress />;

    case 1:
      return <BussinessDetail />;

    case 2:
      return <BankDetail />;

    default:
      return "Unknown Error Occured!";
  }
}

export default function Multistep() {
  const [activeStep, setactiveStep] = useState(0);

  const steps = getSteps();

  const handleNext = () => {
    setactiveStep(activeStep + 1);
  };
  const handlePrev = () => {
    setactiveStep(activeStep - 1);
  };

  const methods = useForm();

  return (
    <>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => {
          return (
            <Step>
              <StepLabel>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === 3 ? (
        <Dashboard />
      ) : (
        <>
          <div>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit()}>
                {getStepContent(activeStep)}
                <Button
                  variant="contained"
                  color="secondary"
                  disabled={activeStep === 0}
                  onClick={handlePrev}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  type="submit"
                >
                  {activeStep === 2 ? "Finish" : "Next"}
                </Button>
              </form>
            </FormProvider>
          </div>
        </>
      )}
    </>
  );
}
