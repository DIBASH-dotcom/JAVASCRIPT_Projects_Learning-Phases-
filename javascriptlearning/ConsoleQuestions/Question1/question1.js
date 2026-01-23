let  viewersName=["Dibash Magar","Niraj Thapa","Nabin Karki","Dilip Khattri", "Rachhna Karki"];
let  viewersPresent=[true,true,true,true,true];

let viewersPresentCount=0;

// count present  viewes
for(let i=0; i<viewersName.length; i++) {
    if(viewersPresent[i]) {
        viewersPresentCount++;
    }
}

//decsion

if(viewersPresentCount>=4) {
    console.log("movie starts")
} else {
    console.log("insuffecient viwers");
}

// print the viwers status present or absent

let statusOfViewer= 0;
 while(statusOfViewer<viewersName.length) {
    console.log(viewersName[statusOfViewer]+"is"+(viewersPresent[statusOfViewer]? "Present" : "Absent"))
    statusOfViewer++;
 }

 // check confirmation message

 let viewersConfirmation=0;

 do{
    console.log("Checked Confirmation for" +viewersPresent[viewersConfirmation]);
 }
 while(viewersConfirmation<viewersName.length);

 // switch condition 

 switch(viewersPresentCount) {
    case 5:
        console.log("HouseFull");
        break;

        case 4:
            console.log("maximum");
            break;

            case 3:
                case 2:
                console.log("minimum")
                break;

                default :
                    console.log("not allwoed ")
                

 }
