#Angular1 setup-template creation.

Start up level template for angular 1.
Note:: 
Not included 
    1   unit testing package.
    2   client server folders.
    3   version managment files.
    4   grunt/gulp/webpack,yeoman.
This is not a development template or angular-seed


#setup::
##1.  create folder `setup-template`
by using cmd do these commands

```
> npm init
```
this command create package.json file in your direcotry

##2. To install angular1 core package.
```
> npm install angular
```
This command will crete node_modules direcoty with packages in it.
##3. To install angular router package.
```
> npm install angular-router
```
##4. To install angular third party ui-router package.
```
>npm install angular-ui-router
or by using exact version.
>npm info angular-ui-router
This command give latest version in its object.
>npm install angular-ui-router@0.4.2
```
##5. To Install jquery.
```
>npm install jqery
```
##6. To install bootstrap.
```
>npm install bootstrap
```
Note :: When you install the bootstrap package npm install its dependant packages as jquery and other.

##7. For writing code use sr/app folder and go with that.

We can also use bower tool for the same purpose.  
But bower is a client side tool for package managment. 
In above command replace npm with bower
When you want to install package with version by bower use hash symbol.(Shift + 3).
```
>bower init
>bower info angular
>bower search jquery
>bower install angular#1.6.0
```

