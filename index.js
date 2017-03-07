#!/usr/bin/env node

const UclApi = require('uclapi');
const program = require('commander');

const {
  getToken,
  getResource,
  writeAsStream
} = require('./lib');

program
  .arguments('<resource>')
  .option('--token <token>', 'Your UCL API token')
  .action(function (resource) {
    const token = getToken(program.token);
    const api = new UclApi({ token });
    getResource(resource, api)
      .then(writeAsStream)
      .catch(console.log);
  })
  .parse(process.argv);

module.exports = program;
