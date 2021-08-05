// employeeRecord = ["Gray", "Worm", "Security", 1]

function createEmployeeRecord(employeeRecord){
    const employee = {
 //first element populates firstName 0
    firstName: employeeRecord[0],
//second element populates familyName 1
    familyName: employeeRecord[1],
//third element populates title 2
    title: employeeRecord[2],
//fourth element populates payPerHour 3
    payPerHour: employeeRecord[3],
//initializes a field, timeInEvents, to hold an empty Array
    timeInEvents: [],
//initializes a field, timeOutEvents, to hold an empty Array
    timeOutEvents: []
    }
    return employee
}

function createEmployeeRecords(employeeRecords){
    const recordsArray = employeeRecords.map(employee => createEmployeeRecord(employee))
    return recordsArray
}

function createTimeInEvent (employeeRecord, date){
    const timeIn = {
        type: 'TimeIn',
        date: date.split(' ')[0],
        hour: parseInt(date.split(' ')[1])
    }
    employeeRecord.timeInEvents.push(timeIn)
    return employeeRecord
}

function createTimeOutEvent (employeeRecord, date){
    const timeOut = {
        type: 'TimeOut',
        date: date.split(' ')[0],
        hour: parseInt(date.split(' ')[1])
    }
    employeeRecord.timeOutEvents.push(timeOut)
    return employeeRecord
}

function hoursWorkedOnDate (employeeRecord, date) {
    const dateComparisonIn = employeeRecord.timeInEvents.filter(timeInEvent => timeInEvent.date === date)
    const timeInHrs = dateComparisonIn[0].hour
    const dateComparisonOut = employeeRecord.timeOutEvents.filter(timeOutEvent => timeOutEvent.date === date)
    const timeOutHrs = dateComparisonOut[0].hour

   const hrsWorked = (timeOutHrs - timeInHrs)/100
   return hrsWorked
}

function wagesEarnedOnDate (employeeRecord, date) {
    const payRate = employeeRecord.payPerHour
    const wagesEarned = hoursWorkedOnDate(employeeRecord, date) * payRate
    return wagesEarned
}

function allWagesFor (employeeRecord) {
    const allDates = employeeRecord.timeInEvents.map(timeInEvent => timeInEvent.date)
    const allWages = allDates.map(date => wagesEarnedOnDate(employeeRecord, date))
    const sumAllWages = allWages.reduce((a,b) => a+b)
    return sumAllWages
}

function calculatePayroll(employeeRecords) {
    const allWagesEmployee = employeeRecords.map(employee => allWagesFor(employee))
    const sumAllEmployeeWages = allWagesEmployee.reduce((a,b) => a+b)
    return sumAllEmployeeWages
}

let employee = ["Julius", "Caesar", "General", 1000]
let timeIn = "0044-03-15 0900"
let timeIn2 = "0044-03-16 0900"
let timeOut = "0044-03-15 1100"
let timeOut2 = "0044-03-16 1100"
let employeeRecord = createEmployeeRecord(employee)
createTimeInEvent(employeeRecord, timeIn)
createTimeInEvent(employeeRecord, timeIn2)
createTimeOutEvent(employeeRecord, timeOut)
createTimeOutEvent(employeeRecord, timeOut2)

allWagesFor(employeeRecord)

