module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    jshint: {files: [
      'public/contactlist.js',
      'app.js'
    ] },

    copy: {main: {files: [{
      expand:true, 
      cwd:'bower_components/', 
      src:['jquery/jquery.js', 'fabric/fabric.js', 'bootstrap/dist/js/bootstrap.js'], 
      dest:'public/'
    } ] } },

    clean: ["bower_components"],

    'bower-install': {
      contactlist: {ignorePath:'bower_components/', html:'views/contactlist.hbs'},
      contact: {ignorePath:'bower_components/', html:'views/contact.hbs'},
      email: {ignorePath:'bower_components/', html:'views/email.hbs'}
    },
    
    // mochaTest: {test: {
    //   options: {reporter: 'spec'},
    //   src: ['test/**/*.js']
    // } },
    
    mocha_phantomjs: {all: ['test/**/*.html']},

    exec: {build_fabric: {
      cwd: "bower_components/fabric/",
      cmd: "node build.js modules=ALL"
    }},

    rename: {fabric: {
      src: 'bower_components/fabric/dist/all.js',
      dest: 'bower_components/fabric/fabric.js'
    }}

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-rename');
  grunt.loadNpmTasks('grunt-bower-install');
  //grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-mocha-phantomjs');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', ['jshint', 'exec:build_fabric', 'rename', 'bower-install', 'copy', 'mocha_phantomjs']);

};