generateHtml() 

function generateHtml()
{

    const bodyElement = document.querySelector("body");

    const sectionElement = document.createElement("section");

    const formElement = document.createElement("form");

    const h1Element = document.createElement("h1");

    let divElement = document.createElement("div");

    let labelValue;

    let inputElement1 ;

    let inputElement2 ;
    
    
    
    h1Element.textContent = "Youth Leadership Summit Registration Form";
    
    basicConstruction();
    
    function basicConstruction() {
        formElement.appendChild(h1Element);
        formElement.className="form-container";
        sectionElement.appendChild(formElement);
        sectionElement.className="container";
        bodyElement.appendChild(sectionElement);
    }

    let divClassName = "form-item";

    //name division
    labelValue = "Full Name";
    inputElement1 = generateInput("text","firstname");
    inputElement1.className="firstname group";
    inputElement2 = generateInput("text","lastname");
    inputElement2.className="lastname group";
    divElement = divCreation(labelValue,inputElement1,divClassName);
    divElement.appendChild(inputElement2);
    formElement.appendChild(divElement);
    // inputElement.className = "firstname group"
    
    //date divivsion
    inputElement1=generateInput("date","date-of-birth");
    labelValue= "Date of Birth"
    divElement = divCreation(labelValue,inputElement1,divClassName);
    formElement.appendChild(divElement);


    //email division
    inputElement1 = generateInput("email","email-address");
    labelValue= "Email Address"
    divElement = divCreation(labelValue,inputElement1,divClassName);
    formElement.appendChild(divElement);

    //Phone division
    inputElement1 = generateInput("number","phone-number");
    labelValue= "Phone Number"
    divElement = divCreation(labelValue,inputElement1,divClassName);
    formElement.appendChild(divElement);

    //education division
    inputElement1 = generateInput("text","education");
    labelValue= "School/College/Institution"
    divElement = divCreation(labelValue,inputElement1,divClassName);
    formElement.appendChild(divElement);

    //grade/year division
    inputElement1 = generateInput("text","year-of-education");
    labelValue= "Grade/Year"
    divElement = divCreation(labelValue,inputElement1,divClassName);
    formElement.appendChild(divElement);

    //submit division
    inputElement1 = generateInput("submit")
    divElement = document.createElement("div");
    divElement.appendChild(inputElement1);
    divElement.className="form-item";
    inputElement1.removeAttribute("class")
    inputElement1.removeAttribute("id")
    inputElement1.setAttribute("value" , "Submit")
    
    formElement.appendChild(divElement)
    

}

function divCreation(labelValue,inputElement1,divClassName) {
    const divElement =document.createElement("div");
    let labelElement = document.createElement("label");
    let brElement = document.createElement("br");
    labelElement.textContent =labelValue;

    divElement.appendChild(labelElement);
    divElement.appendChild(brElement);
    divElement.appendChild(inputElement1);
    divElement.className = divClassName;
    return divElement;

}

function generateInput(inputType , inputId)
{
    const inputElement = document.createElement("input");
    inputElement.type = inputType;
    inputElement.id = inputId;
    inputElement.className = inputId;
    return inputElement;
}