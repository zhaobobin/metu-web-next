import { Request } from 'utils';

export const ossApi = {
  getOssToken: () => {
    return Request({
      url: '/oss/token',
      method: 'post',
    });
  },
};
