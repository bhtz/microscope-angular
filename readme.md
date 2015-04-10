microscope-angular
==================

[![Join the chat at https://gitter.im/bhtz/microscope-angular](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/bhtz/microscope-angular?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

AngularJS (CommonJS/ Browserify) starter kit.

[![Build Status](https://travis-ci.org/bhtz/microscope-angular.svg?branch=master)](https://travis-ci.org/bhtz/microscope-angular)

![microscopejs](http://microscopejs.com/images/mcsp_bg.png)

Requirements
------------

* node
* npm
* grunt-cli

Node.js installation
--------------------

#### Install on OSX

Using homebrew:

	brew install node

#### Install on Linux (Ubuntu/Mint)

	sudo apt-get install python-software-properties python g++ make
	sudo add-apt-repository ppa:chris-lea/node.js
	sudo apt-get update
	sudo apt-get install nodejs

#### Install on Windows

[Download Node.js MSI](http://nodejs.org/download/)

Installation
------------

#### install global gulp (sudo on linux/OSX) :

	npm install gulp

#### install local dependencies (sudo on linux/OSX) :

	npm install

Commands
--------

#### display microscope-console workflow form:

	npm start

#### test (run gulp test):

	npm test

#### build:

	gulp build

* clean build directory.
* copy assets & templates in build directory.
* compile scripts source files to bundle.

#### release:

	gulp release
	
* validate source code (jsHint).
* clean build directory.
* copy assets & templates in build directory.
* compile scripts source files to bundle.
* uglify bundle.

#### test:

	gulp test
	
* validate source code (jsHint).

#### docs:

	gulp docs
	
* generate annoted code documentation (docco).

#### serve:

	grunt serve
	
* clean build directory.
* copy assets & templates in build directory.
* compile scripts source files to bundle.
* run local server with generated 'build/' directory as root.
* Watch for changes in source files (scripts & assets).

Roadmap
=======

* fix livereload
* sourcemap