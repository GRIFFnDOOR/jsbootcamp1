module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: [
        'public/contactlist.js',
        'app.js'
      ]
    },
    copy: {
      main: {
        files: [
          {expand:true, cwd:'bower_components/jquery/', src:['jquery.js'], dest:'public/'}
        ]
      }
    },
    clean: ["bower_components"],
    'bower-install': {
      target: {
        html:'views/contactlist.hbs',
        ignorePath:'public/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-bower-install');

  grunt.registerTask('default', ['jshint', 'bower-install', 'copy']);

};