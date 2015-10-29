[![Dependency Status](https://david-dm.org/bennettjohnson/saturn.svg)](https://david-dm.org/bennettjohnson/saturn)
[![devDependency Status](https://david-dm.org/bennettjohnson/saturn/dev-status.svg)](https://david-dm.org/bennettjohnson/saturn#info=devDependencies)
# saturn

[![Join the chat at https://gitter.im/bennettjohnson/saturn](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/bennettjohnson/saturn?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
The Saturn Project.
# Setting up for Development
First install Development dependencies using:
```Bash
npm install --production
```
Reminder: *You may have to run with* ```sudo``` *if you are on a Linux distribution.*

Next, run gulp
```Bash
gulp
```
Next, run "nw" located in the dist folder.

Reminder: *"nw" is only for testing purposes, building will download Node-Webkit and compile for you.*


Happy Coding!
# Building
to build a release run:
```Bash
gulp build
```
