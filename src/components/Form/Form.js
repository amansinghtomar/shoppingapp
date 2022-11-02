import React from "react";
import { Button } from "../Button/Button";
import Typography from "../Typography/Typography";
import { FormActionButton } from "./FormStyles";
import InputContainer from "./InputContainer";
import BackDrop from "../Backdrop/BackDrop";

function Form({
   formTitle,
   formFields,
   handleChange,
   onBlur,
   touched,
   errors,
   actionButtonTitle,
   handleActionButton,
   isValid,
   loading,
}) {
   return (
      <form method="post">
         <Typography variant="h2" align="center">
            {formTitle}
         </Typography>
         {formFields.map((inputData) => {
            return (
               <InputContainer
                  key={inputData.name}
                  handleChange={handleChange}
                  onBlur={onBlur}
                  inputData={inputData}
                  touched={touched}
                  errors={errors}
               />
            );
         })}
         <FormActionButton>
            <Button fullWidth rounded onClick={handleActionButton} disabled={isValid}>
               {actionButtonTitle}
            </Button>
         </FormActionButton>
         <BackDrop loading={loading} />
      </form>
   );
}

export default Form;
