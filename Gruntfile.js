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
    copy:  {
      main: {
        files: [
          {expand:true, src:['bower_components/jquery/jquery.js'], dest:'public/'}
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['jshint', 'copy']);

};