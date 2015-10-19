# Sass/Gulp Brown Bag
#### Documentation: http://sass-lang.com/documentation/file.SASS_REFERENCE.html
### Installing Sass

 * You first need ruby (Mac users have it pre-installed)
 #### Windows
 Per the [Sass Installation Page](http://sass-lang.com/install):

 The fastest way to get Ruby on your Windows computer is to use [Ruby Installer](http://rubyinstaller.org/). It's a single-click installer that will get everything set up for you super fast.
The installer will also install a Ruby command line powershell application that will let you use the Ruby libraries.

### Compiling Sass in the Terminal (using watch)
#### Compile single files
```
sass --watch input.sass:output.css
```
input .sass being the sass file that you want to compile, and output.css being the name of the css file that you want to compile to. (In our example it was main.sass:main.css).
#### Compile directories to single file
```
sass --watch styles:./
```
styles being the name of the directory, and ./ being the root folder (where we ran sass in the terminal from).
If you don't want sass to compile a file (if you're importing it, for instance), add an underscore to the beginning of the file name "\_mixins.sass"

#### * If you don't want to use watch, leave it out of the command
```
sass styles:./
```
## Compiling with [Gulp](http://gulpjs.com/)
Gulp is a task-runner. It relies on [plugins](http://gulpjs.com/plugins/) to set up tasks to run for you.
### Installing
```
sudo npm install -g gulp
```
### Requiring Gulp
Just like we require node modules, we have to require the plugins that gulp will use in our gulpfile.js
```
var gulp = require('gulp');
var sass = require('gulp-sass');
```
Now we can define a task for Gulp to run
```
gulp.task('sass', function(done) {
    gulp.src('styles/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('./'))
        .on('end', done);
});
```

Now that the task is defined, we can set up the "default" task so that we can type gulp into the terminal and have it run our tasks.
```
gulp.task('default', ['sass']);
```
Gulp is configured to compile your sass to a file in the root of your project.
The file name will be the same as your .sass file with the .css extension. There is a plugin to change the name, though - [gulp-rename](https://npmjs.org/package/gulp-rename/).

### Variables
Variables are defined using '$'.
```
$reallyCoolBlue: #05E9FF
```
$reallyCoolBlue can now be used in the rest of the file.

### Mixins
Mixins are basically functions that can apply multiple style rules to the element that you use them on. Really handy if you use the same rules for transitions, and other effects.
```
@mixin fastTransition($property)
    transition: 100ms $property ease-in-out
```
```
@mixin hover($color1, $color2)
    color: $color1
    transition: 100ms color ease-in-out
    &:hover
        color: $color2
```
Now you can apply the mixin
```
header
    +hover(red, blue)
```
