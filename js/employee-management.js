/*eslint-env browser*/
var submit = document.getElementById("submit");
submit.onclick=add_new_employee;
//submit.onclick=clear_textbox;
var employee_list = [
		["Pranay Mhatre", "CEO", 100],
		["Gaurav Burange", "CTO", 101],
		["Soumil Pandit", "Senior Software developer", 102],
		["Akash More", "Team Lead", 103],
		["Tanmay Bhawalkar", "HR", 104],
]

function clear_textbox(){
    document.getElementById("form_name").value="";
    document.getElementById("form_title").value="";
    document.getElementById("form_extension").value="";
}
function load_employee_list() {
	var html = ""
	for (var i = 0; i < employee_list.length; i++) {
		var employee = employee_list[i];
		html += '<tr><td>' + employee[0] + '</td><td>' + employee[1] + '</td><td>' + employee[2] + 
		'</td><td><button onclick="delete_emp(' + i + ')">Delete</button></td></tr>';
	}
	document.querySelector("tbody").innerHTML = html;
	document.getElementById("count_of_emp").innerHTML = employee_list.length;
}

function delete_emp(n) {
	employee_list.splice(n, 1);
	load_employee_list();
}

function add_new_employee() {
	var emp_name = document.getElementById("form_name").value;
	var emp_title = document.getElementById("form_title").value;
	var emp_extension = document.getElementById("form_extension").value;
	if (emp_name.length==0 || emp_title.length==0 || emp_extension.length==0){
        if(emp_name.length==0){
            window.alert("Employee name is empty.");
            return;
        }else if(emp_title.length==0){
            window.alert("Employee title is empty.");
            return;
        }else if(emp_extension.length==0){
            window.alert("Employee extension is empty.");
            return;
        }
        
    } 
	employee_list.push([emp_name, emp_title, emp_extension]);
    load_employee_list();
    clear_textbox();
}


window.onload = function () {
	load_employee_list();
}