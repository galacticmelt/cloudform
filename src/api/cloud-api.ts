import { CombinedFormForSubmit } from '../shared/common/types';
import { basicRequest } from './templates';

export const sendFormData = async (data: CombinedFormForSubmit) => {
  return await basicRequest
    .post('https://api.sbercloud.ru/content/v1/bootcamp/frontend', {
      body: JSON.stringify(data)
    })
    .json();
};
