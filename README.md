# Wonnova - Woost implementation example

This is an example app implementing Woost that includes the following APIs:

  - Woost Javascript API
  - Woost php SDK
  - Woost REST API

To install the needed dependencies you just have to run:

```
$ composer install
```

If you need composer, get it from here: [https://getcomposer.org/](https://getcomposer.org/)

To run it on a web server you need to configure a virtual host for apache and name it *woost-implementation.local*.

```
<VirtualHost *:80>
	
	ServerName woost-implementation.local

	ServerAdmin webmaster@localhost
	DocumentRoot PATH_TO_YOUR_PROJECT

	ErrorLog ${APACHE_LOG_DIR}/error.log
	CustomLog ${APACHE_LOG_DIR}/access.log combined

	<Directory "PATH_TO_YOUR_PROJECT">
                Options Indexes FollowSymLinks MultiViews
                Require all granted
                AllowOverride All
                Order allow,deny
                allow from all
        </Directory>

	
</VirtualHost>
```
In order to use the PHP SDK and the REST API you need to ask us for a private key.

## Contact

hello@wonnova.com
