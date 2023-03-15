# ClassBuddi

<img src="src/images/ClassBuddi.png" alt="ClassBuddi logo" style="height:250 px; width:250px;"/>

## Overview

ClassBuddi is a web application designed to help UCLA students easily connect with like-minded
classmates in their CS courses.

Due to the large class sizes at UCLA, students often struggle to find peers who share similar
interests and personalities, making it challenging to form meaningful friendships and support
systems in the midst of demanding coursework. Classbuddi address this problem by allowing user
to create a profile page with interests and a brief introduction. More importantly, users can
filter and search for potential friends in their classes and connect with them through email
or social media.

## Features

### 1. Make your profile

Sign up using any gmail account and create your profile: enter your name, CS classes, year,
pronouns, interests, and social media handles.

### 2. Filter through a list of classmates to find peers with similiar interests.

Navigate to the classes you're interested in and you'll find a list of students that
you can filter based on year and interests.

### 3. Check peers profiles and get their preferred contact information

Once you're narrowed down the list of potential friends, look at their profiles
and get their prefered contact method.

## Running the App

Please run all the following commands on your terminal.

### Clone the Repository

`git clone https://github.com/jainsujay02/classbuddi`

Or, just download a zip directly through GitHub from the link above and extract it locally.

### Enter the directory

Once you're in the folder where you cloned the ClassBuddi repository.

`cd classbuddi`

### Install the dependencies

`npm install --legacy-peer-deps`

We are adding the --legacy-peer-deps option because we are using two different versions of MUI
leading to dependency conflicts. This option leads complete build resolution of these conflicts.
We are using two different versions because certain componenets that we are using are not yet
available in MUI V5.

### Run the app

`npm start`

This command should automatically redirect you to the broswer and open the application. If it
does not do so, please open your default browser, and type http://localhost:3000/.

### Explore and find friends!

Create an account, navigate to your CS classes and filter the list of students to find
potenial friends.