import { TextField } from '@mui/material';
import { FormikProps } from 'formik/dist/types';
import { TextFieldProps } from '@mui/material/TextField/TextField';

type TextInputFieldProps<T> = {
  name: keyof T;
  placeholder: string;
  label: string;
  formik: FormikProps<T>;
} & TextFieldProps;

export const TextInputField = <Values extends object>({
  placeholder,
  name,
  formik,
  label,
  ...rest
}: TextInputFieldProps<Values>) => {
  return (
    <TextField
      fullWidth
      type="text"
      variant="standard"
      label={label}
      name={name as string}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[name]}
      error={!!formik.errors[name]}
      helperText={formik.touched[name] && (formik.errors[name] as string)}
      placeholder={placeholder}
      {...rest}
    />
  );
};
