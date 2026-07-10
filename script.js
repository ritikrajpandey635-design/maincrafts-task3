
const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit", function(e){
e.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let message = document.getElementById("message").value.trim();

if(name==="" || email==="" || message===""){
alert("Please fill all fields");
return;
}

let submissions = JSON.parse(localStorage.getItem("submissions")) || [];

submissions.push({
name:name,
email:email,
message:message
});

localStorage.setItem("submissions", JSON.stringify(submissions));

alert("Data Saved Successfully");

form.reset();

});
}
const output = document.getElementById("output");

if(output){

let submissions = JSON.parse(localStorage.getItem("submissions")) || [];

submissions.forEach(function(item){

output.innerHTML += `
<div>
<h3>${item.name}</h3>
<p>${item.email}</p>
<p>${item.message}</p>
<hr>
</div>
`;

});

}