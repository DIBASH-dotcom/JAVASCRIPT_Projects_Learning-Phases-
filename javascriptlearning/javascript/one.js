function CheckAttendence() {

    let name =  document.getElementsByClassName("name");
    let presents = document.getElementsByClassName("present");
    

    let presentCount =0;
    let absentCount =0;

    let resultList = document.getElementById("result");
    resultList.innerHTML ="";

    for( let i=0; i<name.length; i++) {
        let studentName = name[i].value || "Unknown";

        if(presents[i].checked) {
            presentCount++;
            resultList.innerHTML += "<li>" +studentName+ "Prsent</li>";
        } 
        else {
            absentCount++;
            resultList.innerHTML += "<li>" +studentName+ "Absent</li>";
        }
    }
     document.getElementById("summary").innerText =
        "Present: " + presentCount + " | Absent: " + absentCount;

}