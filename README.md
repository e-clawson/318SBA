# 318SBA - SBA 318: 
Express Server Application

Version 1.0, 07/25/23
directions here (https://www.canva.com/design/DAFrinsqKgA/z9-LOsFAqZa9KH2uU-7z6A/edit) 

# About 

For this project, we are required to make a server application with Node and Express. So far, many of the labs and examples we've worked with have utilized data that includes users, comments, and posts. I wanted to try different data subject matter, so I decided to utilize my love for gardening to create a plant database. 

This project includes three data categories - Plants, USDA Hardiness Zone, and Classification 

Users will be able to look up plants by name, features, hardineess Zone, and Classification (more on what specific classifications later). Users will also be able to look up hardiness zones, their information, and plants suitable for those zones, and classifications with plants that belong to each. Users will also be able to add, edit, or delete plant information as they see fit. 

Plants will have Get, Post, Patch/Put, and Delete requests, while the other two will only have get. (for now)

# Installation 

To utilize this repo, please clone it to your local device, and type the following comands into your terminal to configure the project: 

git init
npm init
npm i express
npm i nodemon --save-dev

to start the nodemon server type the following into your terminal: 

npx nodemon 

to close out of nodemon use the commnad: 

cntrl ^ c 

The port designated for this project to run on is 3000, to utilize this port please use the following base url: 

http://localhost:3000/


# further resources 
for questions regarding the use of nodemon, please see the nodemon documentation: 
https://www.npmjs.com/package/nodemon 


# Introduction
This assessment measures your understanding of Node and Express and your capability to implement their features in a practical manner. You have creative freedom in the topic, material, and purpose of the web application you will be developing, so have fun with it! However, remember to plan the scope of your project to the timeline you have been given.

This assessment has a total duration of three (3) days. This is a take-home assessment.
due: Monday, Sept 9 - 8:00am 

You have three total days (including weekends and holidays) to work on this assessment. This assessment will be due at 5:00pm on the third day after it is assigned. Your instructor will provide you with at least four hours of class time to work on the assessment; during which time, you may discuss details of the project with your instructor, including the topic, scope, and implementation.

# Objectives
- Create a server application with Node and Express.
- Create a RESTful API using Express.
- Create Express middleware.
- Use Express middleware.
- Use a template engine to render views with Express.
- Interact with a self-made API through HTML forms.

# Submission
Submit the link to your completed assessment using the Start Assignment button on the Assignment page in Canvas.

Your submission should include a link to the GitHub repository for your project.

# Instructions
You will create a small Node and Express server application. The topic and content of this application is entirely up to you; be creative!

Your work will be graded according to the technical requirements listed in the following section. 
Creativity and effort always work in your favor, so feel free to go beyond the scope of the listed requirements if you have the time.

Keep things simple. Like most projects you will encounter, you should finish the absolute minimum requirements first, and then add additional features and complexity if you have the time to do so. This will also help you understand what you can get done in a specific allotment of time if you were to be asked to do something similar in the future.

Once you have an idea in mind, briefly discuss it with your instructors to determine if it is appropriate for the amount of time you have been given.

Since topic and content are secondary to functionality for this assessment, we have included some resources below for free content that you can use to populate your application. Once you have gotten your functionality in place, you can return and fill in the content with something interesting.

Resources for free content:
Text: Lipsum, a Lorem Ipsum text generator.
Images: Pexels, a resource for stock photos (and other media).
GIFs: Motion Elements, a resource for GIFs (and other media).

# Requirements
The requirements listed here are absolute minimums. Ensure that your application meets these requirements before attempting to further expand your features.

Create your application locally, and initialize a local git repo. Make frequent commits to the repo. When your application is complete, push your repo to GitHub and submit the link to the GitHub page using the submission instructions at the top of this document.

# Requirements(list)
- Create and use at least two pieces of custom middleware. (5%)
    - (1) created custom error-handling middleware in index.js on line 35 
- Create and use error-handling middleware. (5%)
    - (1) created custom error-handling middleware in index.js on line 35, used in plant name route get request in index.js on line 23
- Use at least three different data categories (e.g., users, posts, or comments). (5%)
    Created Plants, Zones, and Classification 
- Utilize reasonable data structuring practices. (5%)
    - placed all the data into its own folder
    - will place routes into their own files (maybe just plants routes since it will have all the rest)
- Create GET routes for all data that should be exposed to the client. (5%) 
    - created get routes for all data (index.js lines 15, 25, and 29)
- Create POST routes for data, as appropriate. At least one data category should allow for client creation via a POST request. (5%)
    will make for plants 
- Create PATCH or PUT routes for data, as appropriate. At least one data category should allow for client manipulation via a PATCH or PUT request. (5%)
    will make for plants 
- Create DELETE routes for data, as appropriate. At least one data category should allow for client deletion via a DELETE request. (5%)
    will make for plants 
- Include query parameters for data filtering, where appropriate. At least one data category should allow for additional filtering through the use of query parameters. (5%)
    Note: DO NOT use API keys; this makes it more difficult for instructors to grade finished projects efficiently. 
- Utilize route parameters, where appropriate.(5%)
- Adhere to the guiding principles of REST. (10%)
- Create and render at least one view using a view template and template engine. This can be a custom template engine or a third-party engine. (8%)
    If you are stuck on how to approach this, think about ways you could render the current state of your API's data for easy viewing.
- Use simple CSS to style the rendered views.
Note: This is not a test of design; it is a test of serving static files using Express. The CSS can be very simple. (2%)
- Include a form within a rendered view that allows for interaction with your RESTful API. (3%)
- Utilize reasonable code organization practices. (5%)
- Ensure that the program runs without errors (comment out things that do not work, and explain your blockers you can still receive partial credit). (10%) 
- Commit frequently to the git repository. (at least 8) (5%)
- include README file that contains a description of your application (2%)
- Level of effort displayed in creativity, presentation, and user experience. (5%)

# Bonus Objectives
The objectives listed here are not required. Ensure that your application meets the requirements above before attempting to further expand your features.
These bonus objectives cannot increase your overall score above 100%. Successful completion of these objectives can, however, make up for lost points above. Ensure your application works as outlined by the requirements above before attempting these objectives, time permitting.

- Include a practical usage of regular expressions within route paths.
Note: A forced, arbitrary usage of this technique will not earn you any bonus credit. This must be practical and sensible in order to be considered for credit. (1%)

- Research and effectively use at least one third-party Node package for practical, sensible purposes.
This cannot be a package that has been used in examples and lesson materials thus far. Step outside the box and be creative! (1%)

# Reflection (optional)

Once you have completed your project, answer the following questions to help solidify your understanding of the process and its outcomes, as well as improve your ability to handle similar tasks in the future.

- What could you have done differently during the planning stages of your project to make the execution easier?


- Were there any requirements that were difficult to implement? What do you think would make them easier to implement in future projects?


- What would you add to or change about your application if given more time?


- Use this space to make notes for your future self about anything that you think is important to remember about this process or that may aid you when attempting something similar. 


- 