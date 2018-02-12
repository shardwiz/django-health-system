<<<<<<< HEAD
function loadConfig(path) {
   var glob = require('glob');
   var object = {};
   var key;

   glob.sync('*', {cwd: path}).forEach(function(option) {
      key = option.replace(/\.js$/,'');
      object[key] = require(path + option);
   });

  return object;
}

module.exports = function(grunt) {
   grunt.loadTasks('grunt-tasks');

   require('time-grunt')(grunt);
   
   // Only load tasks when they are needed
   require('jit-grunt')(grunt, {
      ngtemplates: 'grunt-angular-templates'
   });

   var config = {
      pkg: grunt.file.readJSON('package.json'),
      env: process.env
   };

   grunt.util._.extend(config, loadConfig('./grunt-tasks/options/'));
   grunt.initConfig(config);
=======
function loadConfig(path) {
   var glob = require('glob');
   var object = {};
   var key;

   glob.sync('*', {cwd: path}).forEach(function(option) {
      key = option.replace(/\.js$/,'');
      object[key] = require(path + option);
   });

  return object;
}

module.exports = function(grunt) {
   grunt.loadTasks('grunt-tasks');

   require('time-grunt')(grunt);
   
   // Only load tasks when they are needed
   require('jit-grunt')(grunt, {
      ngtemplates: 'grunt-angular-templates'
   });

   var config = {
      pkg: grunt.file.readJSON('package.json'),
      env: process.env
   };

   grunt.util._.extend(config, loadConfig('./grunt-tasks/options/'));
   grunt.initConfig(config);
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
};