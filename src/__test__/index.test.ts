import { describe, it } from 'mocha';
import { expect } from 'chai';
import exec from '../exec';
import logPrefix, { setLogo, getLogo, setBrand, getBrand } from '../log_prefix';
import { logDetail, logEmph, logInfo, logErr, logWarn, logSuc, underline, italic } from '../logger';
import {
  getDependency,
  arr2str,
  intersection
} from '../dependencies';
import node_version from '../node_version';
import output_file from '../output_file';

describe('exec test', function () {
  it('type checking', function () {
    expect(exec).to.be.a('function');
  });
});

describe('log_prefix test', function () {
  it('type checking', function () {
    expect(logPrefix).to.be.a('function');
    expect(setLogo).to.be.a('function');
    expect(getLogo).to.be.a('function');
    expect(setBrand).to.be.a('function');
    expect(getBrand).to.be.a('function');
  });
});

describe('logger test', function () {
  it('type checking', function () {
    expect(logDetail).to.be.a('function');
    expect(logEmph).to.be.a('function');
    expect(logInfo).to.be.a('function');
    expect(logErr).to.be.a('function');
    expect(logWarn).to.be.a('function');
    expect(logSuc).to.be.a('function');
    expect(underline).to.be.a('function');
    expect(italic).to.be.a('function');
  });
});

describe('node_version test', function () {
  it('type checking', function () {
    expect(node_version).to.be.a('function');
  });
});

describe('output_file test', function () {
  it('type checking', function () {
    expect(output_file).to.be.a('function');
  });
});

describe('getDependency test', function () {
  it('type checking', function () {
    expect(getDependency).to.be.a('function');
  });
});

describe('arr2str test', function () {
  it('type checking', function () {
    expect(arr2str).to.be.a('function');
  });
});

describe('intersection test', function () {
  it('type checking', function () {
    expect(intersection).to.be.a('function');
  });
});