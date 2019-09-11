'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MatchMediaProvider = exports.setMatchMediaConfig = exports.matchMedia = undefined;

var _matchMedia = require('./matchMedia');

var _MatchMediaProvider = require('./MatchMediaProvider');

var _MatchMediaProvider2 = _interopRequireDefault(_MatchMediaProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.matchMedia = _matchMedia.matchMedia;
exports.setMatchMediaConfig = _matchMedia.setMatchMediaConfig;
exports.MatchMediaProvider = _MatchMediaProvider2.default;