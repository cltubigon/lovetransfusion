import React, { useState } from "react"
import StepOne from "./StepOne"
import StepTwo from "./StepTwo"
import StepThree from "./StepThree"
import StepFour from "./StepFour"

const MultiStepForm = () => {
  console.log("MultiStepForm")
  const [activeStep, setactiveStep] = useState(1)
  return (
    <>
      {activeStep === 1 && <StepOne setactiveStep={setactiveStep} />}
      {activeStep === 2 && <StepTwo setactiveStep={setactiveStep} />}
      {activeStep === 3 && <StepThree setactiveStep={setactiveStep} />}
      {activeStep === 4 && <StepFour setactiveStep={setactiveStep} />}
    </>
  )
}

export default MultiStepForm
