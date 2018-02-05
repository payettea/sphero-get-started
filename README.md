# sphero-get-started
Getting started with Sphero and VS code. This guide is intended to get you up and running using the Sphero JavaScript API's that have been developed by the Sphero team. This is not the easiest way to get code onto the Sphero robot however once setup the user will have a more powerful (professional) setup to develop for the Sphero. 

Beware with complexity comes issues, you will likely run into problems, this is part of the trade. 

Troubleshooting tips:
- Read the documents carefully. Devil can very well be in the details.  
- Google it, seriously. It's very rare that you will stumble upon an issue that someone has not already had and solved.

## Get The Tools

To be able to get Sphero running custom JavaScript code you will need to get several free tools. Note this is an advanced setup and not required if you use the out of the box Sphero app that can be downloaded from the various app stores. 

### Visual Studio Code  (VS CODE)

A very simple and powerful integrated development environment (IDE) built by Microsoft, and it's free!

Follow this [link](https://code.visualstudio.com/) to find the installers for linux and windows versions of VS code. 

### Install NodeJS and Node Package Manager

Node JS is a JavaScript application server, it comes with the Node Package Manager (NPM) which is a tool to manage and download JavaScript packages. We will be needing the Sphere node module. 

The installers for windows and linux can be found [here](https://code.visualstudio.com/)

Once installed test to make sure you have command line access to the NPM tool. 

 - Windows: open a command prompt and type 'npm --version'
 - Linux: open a bash shell and type 'npm --version'

 You should see a version response as the output. If you see any error there is an installation issue.

 ### Install Git (optional)
 The project code is stored on a Git Hub repository, it would be ideal to make use of the Git tool. This will allow you to pull the code onto your local machine, create branches of the code and push those branches to that remote repository. This is optional because it is also possible to simply browse to the Git Hub repostiory and download the code as a .zip file. 

 It's also worth mentioning that VS Code has great support for Git operations and makes using Git very easy.  

 ## Clone or Download Project Code

 The project sample code is located in this Git repository, theorectially you should be reading this from the repository. Just in case you are not it is located at https://github.com/payettea/sphero-get-started. 

 You will need to get the source code that is posted on the repository to see how to work with the Sphero.  

### Download Code in .zip File
- Browse to https://github.com/payettea/sphero-get-started
- On the right hand side there is a 'Clone or Download' button, press it
- Choose 'Download Zip'
- Once the .zip file is downloaded unpack it in a location that you will know how to find. *I recommend as best practice, creating a 'workspaces' directory on the machine you are using and creating a sub-directory for each new project. For example: <'SOME ROOT'>/workspaces/sphero-get-started. 

### Clone the Git Hub Repository Using Git
- Open VS Code


## Open Project in VS Code

## Download Node Modules

## Connect to Sphero Windows

## Connect to Sphero Linux

## Resources
 - Connect to Sphero using BLE address - https://github.com/hybridgroup/cylon-sphero/issues/59
 - 



 ## Dependencies
 - cylon.js 
