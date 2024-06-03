const fs = require("fs");

class Data {
    constructor(students, courses) {
        this.students = students;
        this.courses = courses;
    }
}

var dataCollection = null;

function initialize() {
    let studentDataFromFile;
    let courseDataFromFile;

    return new Promise((resolve, reject) => {
        count = 2
        fs.readFile("./data/students.json", "utf8", function (error, data) {
            if (error) {
                console.log(error);
                reject(error);
                return;
            }

            studentDataFromFile = JSON.parse(data);

            count--;
            if (count === 0) {
                resolve([studentDataFromFile, courseDataFromFile]);
            }
        })

        fs.readFile("./data/cources.json", "utf8", function (error, data) {
            if (error) {
                console.log(error);
                reject(error);
                return;
            }

            courseDataFromFile = JSON.parse(data);

            count--;
            if (count === 0) {
                resolve([studentDataFromFile, courseDataFromFile]);
            }
        })
    }).then((list) => {
        this.dataCollection = new Data(list[0], list[1]);
        Promise.resolve("Initialization successful!")
    }).catch((error) => {
        Promise.reject(error)
    });
}

function getAllStudent() {
    return new Promise((resolve, reject) => {
        if (this.dataCollection.students.length > 0) {
            resolve(this.dataCollection.students);
        } else {
            reject("No results returned");
        }
    })
}

function getTAs() {
    return new Promise((resolve, reject) => {
        let TAs;
        this.getAllStudent()
            .then((students) => {
                TAs = Array.from(students).filter(o => o.TA === true);

                if (TAs.length > 0) {
                    resolve(TAs);
                } else {
                    reject("No results returned");
                }
            });
    })
}

function getCourses() {
    return new Promise((resolve, reject) => {
        if (this.dataCollection.courses.length > 0) {
            resolve(this.dataCollection.courses);
        } else {
            reject("No results returned");
        }
    })
}

module.exports = { initialize, getAllStudent, getTAs, getCourses };