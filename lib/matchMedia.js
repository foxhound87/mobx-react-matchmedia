'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setMatchMediaConfig = exports.matchMedia = undefined;

var _matchMediaMock = require('match-media-mock');

var _matchMediaMock2 = _interopRequireDefault(_matchMediaMock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var matchMedia = _matchMediaMock2.default.create();

var config = null;

var setMatchMediaConfig = function setMatchMediaConfig() {
  var req = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var isClient = typeof window !== 'undefined';

  if (!isClient && req) {
    config = {
      type: 'screen',
      width: req.params.width,
      height: req.params.height
    };
  }

  if (isClient && !req) {
    config = {
      type: 'screen',
      width: window.innerWidth, // eslint-disable-line
      height: window.innerHeight // eslint-disable-line
    };
  }

  if (config) matchMedia.setConfig(config);
};

exports.matchMedia = matchMedia;
exports.setMatchMediaConfig = setMatchMediaConfig;