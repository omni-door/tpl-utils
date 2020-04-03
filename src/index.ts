import exec from './exec';
import logPrefix, {
  setLogo,
  setBrand,
  getLogo,
  getBrand
} from './log_prefix';
import {
  logDetail,
  logEmph,
  logErr,
  logInfo,
  logSuc,
  logWarn,
  logTime,
  underline,
  italic
} from './logger';
import {
  getDependency,
  arr2str,
  intersection
} from './dependencies';
import node_version from './node_version';
import output_file from './output_file';
import spinner from './spinner';
import generate_tpl from './generate_tpl';

export { BUILD, PKJTOOL, PLUGINSTAGE, PROJECT_TYPE, STRATEGY, STYLE, LOGLEVEL, MARKDOWN, DEVSERVER, TESTFRAME, HASH } from './global.d';
export { default as exec } from './exec';
export { default as logPrefix,
  setLogo,
  setBrand,
  getLogo,
  getBrand
} from './log_prefix';
export {
  logDetail,
  logEmph,
  logErr,
  logInfo,
  logSuc,
  logWarn,
  logTime,
  underline,
  italic
} from './logger';
export {
  getDependency,
  arr2str,
  intersection
} from './dependencies';
export { default as node_version } from './node_version';
export { default as output_file } from './output_file';
export { default as spinner } from './spinner';
export { default as generate_tpl } from './generate_tpl';

export default {
  exec,
  logPrefix,
  setLogo,
  setBrand,
  getLogo,
  getBrand,
  logDetail,
  logEmph,
  logErr,
  logInfo,
  logSuc,
  logWarn,
  logTime,
  underline,
  italic,
  node_version,
  output_file,
  getDependency,
  arr2str,
  intersection,
  spinner,
  generate_tpl
};