/*eslint-env browser*/
window.onload = load_employee_list;
var submit = document.getElementById("submit_btn");
submit.onclick=add_new_employee;
//preexisting list of employees that are present on loading the page
var employee_list = [
		["Pranay Mhatre", "CEO", 100],
		["Gaurav Burange", "CTO", 101],
		["Soumil Pandit", "Senior Software developer", 102],
		["Akash More", "Team Lead", 103],
		["Tanmay Bhawalkar", "HR", 104],
]
//function to clear out all the textbox values entered.
function clear_textbox(){
    document.getElementById("form_name").value="";
    document.getElementById("form_title").value="";
    document.getElementById("form_extension").value="";
}
//function that is triggered on clicking the delete button
function delete_emp(n) {
	employee_list.splice(n, 1);
	load_employee_list();
}
//this function generates the required html to display the table of employee
function load_employee_list() {
	var html_code = ""
	for (var i = 0; i < employee_list.length; i++) {
		var employee = employee_list[i];
		html_code += '<tr><td>' + employee[0] + '</td><td>' + employee[1] + '</td><td>' + employee[2] + 
		'</td><td><button onclick="delete_emp(' + i + ')">Delete</button></td></tr>';
	}
	document.querySelector("tbody").innerHTML = html_code;
	document.getElementById("count_of_emp").innerHTML = employee_list.length;
}
//pushes the newly entered values to the array of employee. also Writes a message to the span tag if the data in textbox is empty
function add_new_employee() {
	var emp_name = document.getElementById("form_name").value;
	var emp_title = document.getElementById("form_title").value;
	var emp_extension = document.getElementById("form_extension").value;
	
    if(emp_name.length==0){
		document.getElementById("form_name_span").innerHTML = "Employee name is empty.";
        return;
	}else{
		document.getElementById("form_name_span").innerHTML = "";
	}
	if(emp_title.length==0){
        document.getElementById("form_title_span").innerHTML = "Employee title is empty.";
        return;
	}else{
		document.getElementById("form_title_span").innerHTML = "";
	}
	if(emp_extension.length==0){
        document.getElementById("form_extension_span").innerHTML = "Employee extension is empty.";
        return;
    }else{
		document.getElementById("form_extension_span").innerHTML = "";
	}
    employee_list.push([emp_name, emp_title, emp_extension]);
    load_employee_list();
    clear_textbox();
}
