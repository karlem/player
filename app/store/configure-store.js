if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configure-store.production'); // eslint-disable-line global-require
} else {
  module.exports = require('./configure-store.development'); // eslint-disable-line global-require
}
