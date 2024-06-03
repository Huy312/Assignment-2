const fs = require("fs");

class Data {
    constructor(students, cources) {
        this.students = students;
        this.cources = cources;
    }
}

var dataCollection = null;

function initialize() {
    let studentDataFromFile;
    let courseDataFromFile;
    return new Promise((resolve, reject) => {

        fs.readFile("./data/students.json", "utf8", function (error, data) {
            if (error) {
                console.log(error);
                reject(error);
                return;
            }

            studentDataFromFile = JSON.parse(data);
            console.log(studentDataFromFile.length);
            console.log("DONE");
        }).then(() => {

            fs.readFile("./data/cources.json", "utf8", function (error, data) {
                if (error) {
                    console.log(error);
                    reject(error);
                    return;
                }

                courseDataFromFile = JSON.parse(data);
                console.log(courseDataFromFile.length);
                console.log("DONE");
            })
        })

        // getAllStudent()

        // .then(() => resolve(studentDataFromFile, courseDataFromFile))
        // .then((studentDataFromFile, courseDataFromFile) => {
        //     dataCollection = new Data(studentDataFromFile, courseDataFromFile)
        //     resolve("The operation was a success")
        //     //console.log(dataCollection.students)
        //     //getAllStudent()
        // })
        // .catch((error) => reject(error))
    }).then(() => {
        dataCollection = new Data(studentDataFromFile, courseDataFromFile)
        resolve("The operation was a success")
        console.log(dataCollection.students)
    })
}

function getAllStudent() {
    return new Promise(function (resolve, reject) {
        console.log(dataCollection.students);
        if (dataCollection.students.length > 0) {
            resolve(dataCollection.students);
        } else {
            reject("No results returned");
        }
    })
}

function getTAs() {
    return new Promise(function (resolve, reject) {
        let TAs;
        getAllStudent().then((students) => TAs = Array.from(students).filter(o => o.TA === true));
        if (students.length > 0) {
            resolve(students);
        } else {
            reject("No results returned");
        }
    })
}

function getCourses() {
    return new Promise(function (resolve, reject) {
        if (dataCollection.courses.length > 0) {
            resolve(dataCollection.courses);
        } else {
            reject("No results returned");
        }
    })
}

module.exports = { initialize, getAllStudent, getTAs, getCourses };