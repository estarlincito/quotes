import authors from '@/lib/quotes/authors';
import Label from '@UI/label';
import CreatableSelect from 'react-select/creatable';

const AuthorsSelec = async () => {
  return (
    <>
      <Label title='Author' />
      <CreatableSelect
        placeholder='Write or select author'
        instanceId={1}
        name='author'
        options={await authors()}
        required
      />
    </>
  );
};

export default AuthorsSelec;
