import { applyMiddleware } from 'redux';

import tracksMiddleware from './tracks_middleware';

const masterMiddleware = applyMiddleware(
  tracksMiddleware,
);

export default masterMiddleware;
