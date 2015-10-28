# saturn
The Saturn Project.
# Setting up for Development
First install Development dependencies using:
```Bash
npm install --production
```
*You_may_have_to_run_with * ```sudo``` *if_you_are_on_a_Linux_distribution.*

```Bash
gulp
```
and run "nw" located in the dist folder.
Reminder: "nw" is only for testing purposes, building will download Node-Webkit and compile for you.
# Building
to build a release run:
```Bash
gulp build
```
