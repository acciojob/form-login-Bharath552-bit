function getFormvalue(event) {
    //Write your code here
	event.preventDefault();
	const first=event.target.fname.value;
	const last=event.target.lname.value;
	alert(`${first} ${last}`)

}
