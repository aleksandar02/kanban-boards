import { useFormik } from 'formik';
import * as Yup from 'yup';

import TextField from '@mui/material/TextField';
import Button from './Button';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short *')
    .max(50, 'Too Long *')
    .required('Required field *'),
  description: Yup.string()
    .min(5, 'Too Short *')
    .max(1024, 'Too Long *')
    .required('Required field *'),
  status: Yup.number().required('Required field *'),
});

const AddCardForm = ({ addCard, editCard, formData, editForm }) => {
  const formik = useFormik({
    initialValues: formData,
    validationSchema,
    onSubmit: (values) => {
      if (editForm) {
        editCard(values);
        return;
      }

      addCard(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className='add-card-form'>
      <div className='display-flex'>
        <div className='input-group'>
          <TextField
            fullWidth
            variant='outlined'
            id='title'
            name='title'
            label='Title'
            value={formik.values.title}
            onChange={formik.handleChange}
          />
          <div className='text-danger'>
            {formik.errors.title && formik.touched.title
              ? formik.errors.title
              : null}
          </div>
        </div>
        <div className='input-group'>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Status</InputLabel>
            <Select
              labelId='status-label'
              id='status'
              name='status'
              variant='outlined'
              value={formik.values.status}
              label='status'
              onChange={formik.handleChange}
            >
              <MenuItem value={1}>To Do</MenuItem>
              <MenuItem value={2}>In Progress</MenuItem>
              <MenuItem value={3}>Done</MenuItem>
            </Select>
            <div className='text-danger'>
              {formik.errors.status && formik.touched.status
                ? formik.errors.status
                : null}
            </div>
          </FormControl>
        </div>
      </div>

      <div className='input-group'>
        <TextField
          id='description'
          name='description'
          label='Description'
          multiline
          fullWidth
          rows={6}
          variant='outlined'
          value={formik.values.description}
          onChange={formik.handleChange}
        />
        <div className='text-danger'>
          {formik.errors.description && formik.touched.description
            ? formik.errors.description
            : null}
        </div>
      </div>

      <div className='pull-right full-width'>
        <Button
          type='submit'
          buttonText={editForm ? 'Save Changes' : 'Create Card'}
          cssStyle='button add-card-button'
        />
      </div>
    </form>
  );
};

export default AddCardForm;
