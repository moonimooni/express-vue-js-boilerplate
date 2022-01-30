import { merge } from 'lodash';
import config from '../../config';

export default merge(config, JSON.parse(process.env.VUE_APP_CONFIG));
