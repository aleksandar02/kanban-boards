import { useFormik } from 'formik';
import * as Yup from 'yup';

import TextField from '@mui/material/TextField';
import Button from './Button';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addCard } from '../redux/cards/card.actions';
import { editCard } from '../redux/cards/card.actions';

import { useSelector } from 'react-redux';

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short *')
    .max(50, 'Too Long *')
    .required('Required field *'),
  description: Yup.string()
    .min(5, 'Too Short *')
    .max(1024, 'Too Long *')
    .required('Required field *'),
  cardStatus: Yup.number().required('Required field *'),
});

const AddCardForm = () => {
  const dispatch = useDispatch();
  const initialModalData = useSelector((state) => state.modal.modalData);
  const populateModal = useSelector((state) => state.modal.populateModal);

  const formValues = initialModalData
    ? initialModalData
    : {
        title: '',
        description: '',
        cardStatus: '',
      };

  const formik = useFormik({
    initialValues: formValues,
    validationSchema,
    onSubmit: (values) => {
      if (populateModal) {
        dispatch(editCard(values));
        return;
      }

      dispatch(addCard(values));
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
              id='cardStatus'
              name='cardStatus'
              variant='outlined'
              value={formik.values.cardStatus}
              label='cardStatus'
              onChange={formik.handleChange}
            >
              <MenuItem value={1}>To Do</MenuItem>
              <MenuItem value={2}>In Progress</MenuItem>
              <MenuItem value={3}>Done</MenuItem>
            </Select>
            <div className='text-danger'>
              {formik.errors.cardStatus && formik.touched.cardStatus
                ? formik.errors.cardStatus
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
          buttonText={populateModal ? 'Save Changes' : 'Create Card'}
          cssStyle='button add-card-button'
        />
      </div>
    </form>
  );
};

export default AddCardForm;
