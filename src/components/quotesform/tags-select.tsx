import tags from '@/lib/quotes/tags';
import Label from '@UI/label';
import makeAnimated from 'react-select/animated';
import CreatableSelect from 'react-select/creatable';

const animatedComponents = makeAnimated();

const TagsSelec = () => {
  return (
    <>
      <Label title='Tags' />
      <CreatableSelect
        placeholder='Write or select tag'
        instanceId={2}
        noOptionsMessage={() => 'No more options'}
        components={animatedComponents}
        isMulti
        isClearable
        name='tags'
        options={tags()}
        required
      />
    </>
  );
};

export default TagsSelec;
