import React, { useState } from "react"
import StepOne from "./StepOne"
import StepTwo from "./StepTwo"
import StepThree from "./StepThree"

const MultiStepForm = () => {
  console.log("MultiStepForm")
  const [activeStep, setactiveStep] = useState(1)
  console.log("activeStep", activeStep)
  return (
    <>
      {activeStep === 1 && <StepOne setactiveStep={setactiveStep} />}
      {activeStep === 2 && <StepTwo setactiveStep={setactiveStep} />}
      {activeStep === 3 && <StepThree setactiveStep={setactiveStep} />}
      {/* <StepOne step={{ activeStep, setactiveStep }} />
      <StepTwo step={{ activeStep, setactiveStep }} /> */}
    </>
  )
}

export default MultiStepForm
