/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Huy Manh Le (Thomas Le) Student ID: hle37 Date: 2024/06/02
*
********************************************************************************/

const collegeData = require("./modules/collegeData.js")

function getAllStudent() {
    return collegeData.getAllStudent()
        .then((result) => {
            console.log("Successfully retrieved %s students", result.length)
            Promise.resolve()
        })
        .catch((result) => Promise.reject(result))
}

function getCourses() {
    return collegeData.getCourses()
        .then((result) => {
            console.log("Successfully retrieved %s courses", result.length)
            Promise.resolve()
        })
        .catch((result) => Promise.reject(result))
}

function getTAs() {
    return collegeData.getTAs()
        .then((result) => {
            console.log("Successfully retrieved %s TAs", result.length)
            Promise.resolve()
        })
        .catch((result) => Promise.reject(result))
}

collegeData.initialize()
    .then((result) => {
        getAllStudent();
        getCourses();
        getTAs();
    })
    .catch((result) => console.log(result))