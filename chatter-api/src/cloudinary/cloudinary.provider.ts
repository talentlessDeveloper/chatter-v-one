import { v2 } from 'cloudinary';
import { CLOUDINARY } from './constants';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: () => {
    return v2.config({
      cloud_name: 'dndffkm00',
      api_key: '283983195145314',
      api_secret: 'uD1pmuBIfR71Dxr7VyME8he94Nw',
    });
  },
};
