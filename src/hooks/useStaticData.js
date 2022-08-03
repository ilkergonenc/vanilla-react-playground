import STATIC from '../app.static';

function useStaticData(keyBinding = '') {
  let query = STATIC;

  if (keyBinding.includes('.')) {
    keyBinding.split('.').forEach((key) => { query = query[key]; });
  } else {
    query = query[keyBinding];
  }

  return query;
}

export default useStaticData;
