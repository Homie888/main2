module.exports = function(grunt) {

  grunt.initConfig({
      sass: {
          options: {
              sourceMap: true
          },
          dist: {
              files: {
                  'style.css': 'sass/style.scss'
              }
          }
      },
      watch: {
        css: {
          files: 'sass/**/*.scss',
          tasks: ['sass'],
        },
      },
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};