fhnw.angularsolr (fhnw)
=========================

Get started with Plone + AngularJS (Yeoman powered) without any of the normal headaches associated with a manual setup.

Useful when you want to develop a single page web applications powered by Angular using Plone as backend.

How it works
------------

Before installing fhnw.angularsolr you need to:

* # install nodejs (suggested way NVM)
* $ npm install -g grunt-cli bower
* $ cd fhnw.angularsolr/fhnw.angularsolr/browser/angular
* $ bower install
* $ npm install
* $ grunt build

After that install the fhnw.angularsolr plugin and choose the more appropriate install profile:

* :default -> for production (htmlmin, image minification, concat+uglify/cssmin, uncss, cdnify)
* :devel -> suitable for development

Now you can visit your AngularJS single page web application:

* http://localhost:8080/Plone/@@angularstarter


.. figure:: https://raw.github.com/collective/fhnw.angularsolr/master/docs/screenshots/angularplone.png
    :figwidth: image

     Plone + Angular kickstarter. Bootstrap your AngularJS based single webapp applications with fhnw.angularsolr

You can extend this project and then clone it with::

    $ VENV/bin/fhnw.angularsolr_clone your.awesomeplugin

TODO
----

* test production vs devel layers
* makefile for init project

Links
-----

* for further details see http://davidemoro.blogspot.com/2014/09/plone-angularjs-yeoman-starter.html

Authors
-------

* Davide Moro <davide.moro@gmail.com> | @davidemoro | http://davidemoro.blogspot.it/

