import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';

const SearchForm = ({ onSubmit }) => {
  const categories = [
    'Creatures',
    'Equipment',
    'Materials',
    'Monsters',
    'Treasure',
  ];

  return (
    <Formik initialValues={{ category: '', search: '' }} onSubmit={onSubmit}>
      <Form>
        <div className='flex justify-center gap-x-4 my-2 max-w-screen-sm mx-auto'>
          <Field
            as='select'
            name='category'
            className='border border-gray-400 rounded shadow focus:ring-offset-gray-400 p-2'
          >
            <option value='' defaultValue disabled hidden>
              Select a Category
            </option>
            {categories.map((ctg) => (
              <option key={ctg} value={ctg.toLowerCase()}>
                {ctg}
              </option>
            ))}
          </Field>
          <Field name='search'>
            {({ form: { submitForm }, field }) => (
              <input
                {...field}
                type='text'
                className='flex-1 p-2 border border-gray-400 rounded shadow'
                placeholder='Filter results'
                onChange={(e) => {
                  if (e.target.value === '') submitForm();

                  field.onChange(e);
                }}
              />
            )}
          </Field>
          <button
            type='submit'
            className='p-2 bg-white border border-blue-600 text-blue-600 rounded shadow hover:bg-blue-600 hover:text-white'
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default SearchForm;
