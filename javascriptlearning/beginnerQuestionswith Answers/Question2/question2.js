function checkBoxStatus() {
    let checkboxes = document.getElementsByClassName("option");
    let selected = [];

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selected.push(checkboxes[i].value);
        }
    }

    if (selected.length === 0) {
        alert("Please select any checkbox");
    } else {
        alert("Checked: " + selected.join(", "));
    }
}
