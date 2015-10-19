var employeeArray = [];

$(document).ready(function(){
	$("#employeeinfo").submit(function(event){
		event.preventDefault();

		var values = {};

		console.log($("#employeeinfo").serializeArray());
		$.each($("#employeeinfo").serializeArray(), function(i, field){
			values[field.name] = field.value;
		})

		$("#employeeinfo").find("input[type=text]").val("");
		console.log(values);
		employeeArray.push(values);
		monthlySalaryTotal(employeeArray);
		appendDom(values);
	});
});

function appendDom(employee){
	console.log(employee);
	$("#employeeContainer").append("<div class='employee'></div>");
	var $el = $("#employeeContainer").children().last();

	$el.append("<p>" + employee.employeename + "</p>");
	$el.append("<p>" + employee.employeenumber + "</p>");
	$el.append("<p>" + employee.jobtitle + "</p>");
	$el.append("<p>" + employee.annualsalary + "</p>");
	//$el.append("<p>") + answer + "</p>");
};



//Step 1. Get the annual salary from each object in the employeeArray.
//So, I set up a function and within it I set up a for-loop, to loop through the array. 
//Then, I established var salary equal to the current index of the array's annual salary.

var annualSalarySum;
var monthlySalarySum;

function removeNonNumberic(str){
	var numericString = str.replace(/[^0-9]/g, '');
	return numericString;
};

function monthlySalaryTotal(array){
monthlySalarySum = 0;
for(var i=0; i<array.length; i++){
	console.log(employeeArray[i].annualsalary);
	var salary = (parseInt(removeNonNumberic(employeeArray[i].annualsalary)));
	//Step 2. Add the annual salaries together, putting them into the annualSalarySum variable.
	// var annualSalarySum = 0;
	// console.log("This is annualSalarySum:", annualSalarySum); This is not working.
	//Step 3. Divide the annualSalarySum by 12. I established a function to do this calculation call it here. 
	console.log(salary);
	monthlySalarySumCalc(salary);	
}
	console.log("Here is the monthly total: ", monthlySalarySum);
 // return annualSalarySum;
};

function monthlySalarySumCalc(salary){
monthlySalarySum += salary/12;
};

// var answer = monthlySalaryTotal(employeeArray);

// console.log("This is the answer:", answer);









