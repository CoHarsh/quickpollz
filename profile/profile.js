const data = [
    {
        "pollname":"What is your favorite color?",
        "pollid":"1",
        "pollcreated":"2021-04-01T00:00:00.000Z",
        "pollstatus":"active",
        "pollresponse":"50",
    },
    {
        "pollname":"What is your favorite food?",
        "pollid":"2",
        "pollcreated":"2021-04-01T00:00:00.000Z",
        "pollstatus":"active",
        "pollresponse":"50",
    },
    {
        "pollname":"What is your favorite animal?",
        "pollid":"3",
        "pollcreated":"2021-04-01T00:00:00.000Z",
        "pollstatus":"active",
        "pollresponse":"50",
    },
    {
        "pollname":"What is your favorite color?",
        "pollid":"4",
        "pollcreated":"2021-04-01T00:00:00.000Z",
        "pollstatus":"active",
        "pollresponse":"50",
    },
    
];


const tablebodyprofile = document.getElementById("table-body-profile");

function loadpollscreated() {
    const first = document.getElementById("first");
    const second = document.getElementById("second");
    const third = document.getElementById("third");
    // highlight the first button
    first.classList.add("active");
    second.classList.remove("active");
    third.classList.remove("active");
    const table = document.createElement("table");
    table.classList.add("table", "table-hover");
    table.setAttribute("id", "pollcreated-table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const th1 = document.createElement("th");
    th1.setAttribute("scope", "col");
    th1.innerHTML = "Name";
    const th2 = document.createElement("th");
    th2.setAttribute("scope", "col");
    th2.style.textAlign = "center";
    th2.innerHTML = "Date";
    const th3 = document.createElement("th");
    th3.setAttribute("scope", "col");
    th3.style.textAlign = "center";
    th3.innerHTML = "Responses";
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    thead.appendChild(tr);
    table.appendChild(thead);
    const tbody = document.createElement("tbody");
    tbody.setAttribute("id", "table-body-profile");
    table.appendChild(tbody);
    rightside.appendChild(table);

    for(let i=0;i<5;i++){
    data.forEach((poll) => {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        td1.innerHTML = poll.pollname;
        const td2 = document.createElement("td");
        td2.style.textAlign = "center";
        // convert this pollcreated to date in readble formate
        const date = new Date(poll.pollcreated);
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        td2.innerHTML = `${day}/${month}/${year}`;
        const td3 = document.createElement("td");
        td3.style.textAlign = "center";
        td3.innerHTML = poll.pollresponse;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tbody.appendChild(tr);
    });
}

}

const loadpollsresponded = () => {
    const first = document.getElementById("first");
    const second = document.getElementById("second");
    const third = document.getElementById("third");

    // highlight the second button
    first.classList.remove("active");
    second.classList.add("active");
    third.classList.remove("active");
    const table = document.createElement("table");
    table.classList.add("table", "table-hover");
    table.setAttribute("id", "pollcreated-table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const th1 = document.createElement("th");
    th1.setAttribute("scope", "col");
    th1.innerHTML = "Name";
    const th2 = document.createElement("th");
    th2.setAttribute("scope", "col");
    th2.style.textAlign = "center";
    th2.innerHTML = "Date";
    const th3 = document.createElement("th");
    th3.setAttribute("scope", "col");
    th3.style.textAlign = "center";
    th3.innerHTML = "Responses";
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    thead.appendChild(tr);
    table.appendChild(thead);
    const tbody = document.createElement("tbody");
    tbody.setAttribute("id", "table-body-profile");
    table.appendChild(tbody);
    rightside.appendChild(table);

    data.forEach((poll) => {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        td1.innerHTML = poll.pollname;
        const td2 = document.createElement("td");
        td2.style.textAlign = "center";
        const date = new Date(poll.pollcreated);
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        td2.innerHTML = `${day}/${month}/${year}`;
        const td3 = document.createElement("td");
        td3.style.textAlign = "center";
        td3.innerHTML = poll.pollresponse;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tbody.appendChild(tr);
    });

};

const loadeditprofile = () => {

    const first = document.getElementById("first");
    const second = document.getElementById("second");
    const third = document.getElementById("third");
    const rightside = document.getElementById("right-content");
    first.classList.remove("active");
    second.classList.remove("active");
    third.classList.add("active");

    const div = document.createElement("div");
    div.classList.add("d-flex", "justify-content-center");
    rightside.appendChild(div);

    const form = document.createElement("form");
    form.classList.add("form");
    form.setAttribute("id", "edit-profile-form");
    const div1 = document.createElement("div");
    div1.classList.add("form-group");
    const label1 = document.createElement("label");
    label1.setAttribute("for", "name");
    label1.innerHTML = "Name";
    const input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("id", "name");
    input1.classList.add("form-control");
    input1.setAttribute("placeholder", "Enter your name");
    input1.setAttribute("required", "");
    div1.appendChild(label1);
    div1.appendChild(input1);
    form.appendChild(div1);
    const div2 = document.createElement("div");
    div2.classList.add("form-group");
    const label2 = document.createElement("label");
    label2.setAttribute("for", "username");
    label2.innerHTML = "Username";
    const input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("id", "username");
    input2.classList.add("form-control");
    input2.setAttribute("placeholder", "Enter your username");
    input2.setAttribute("required", "");
    div2.appendChild(label2);
    div2.appendChild(input2);
    form.appendChild(div2);
    const div3 = document.createElement("div");
    div3.classList.add("form-group");
    const label3 = document.createElement("label");
    label3.setAttribute("for", "instagram");
    label3.innerHTML = "Instagram";
    const input3 = document.createElement("input");
    input3.setAttribute("type", "text");
    input3.setAttribute("id", "instagram");
    input3.classList.add("form-control");
    input3.setAttribute("placeholder", "Enter your instagram id");
    input3.setAttribute("required", "");
    div3.appendChild(label3);
    div3.appendChild(input3);
    form.appendChild(div3);
    const div4 = document.createElement("div");
    div4.classList.add("form-group");
    const label4 = document.createElement("label");
    label4.setAttribute("for", "password");
    label4.innerHTML = "Password";
    const input4 = document.createElement("input");
    input4.setAttribute("type", "password");
    input4.setAttribute("id", "password");
    input4.classList.add("form-control");
    input4.setAttribute("placeholder", "Enter your password");
    input4.setAttribute("required", "");
    div4.appendChild(label4);
    div4.appendChild(input4);
    form.appendChild(div4);

    const button = document.createElement("button");
    button.setAttribute("type", "submit");
    button.classList.add("btn", "btn-primary","aapdocolor","mt-5");
    button.innerHTML = "Submit";
    form.appendChild(button);
    div.appendChild(form);



    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const username = document.getElementById("username").value;
        const instagram = document.getElementById("instagram").value;
        const password = document.getElementById("password").value;
        const data = {
            name,
            username,
            instagram,
            password,
        };
        console.log(data);
    }
    );


}

window.addEventListener("load", () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const uname = document.getElementById("usersname");
    const usersusername = document.getElementById("usersusername");
    uname.innerText = user.name;
    usersusername.innerHTML = "@"+user.username;
    loadpollscreated();

});


const handlefirstclick = document.getElementById("first");
const handlesecondclick = document.getElementById("second");
const handlethirdclick = document.getElementById("third");
const rightside = document.getElementById("right-content");
handlefirstclick.addEventListener("click", () => {
    rightside.innerHTML = "";
    loadpollscreated();
});

handlesecondclick.addEventListener("click", () => {
    rightside.innerHTML = "";
    loadpollsresponded();
});

handlethirdclick.addEventListener("click", () => {
    rightside.innerHTML = "";
    loadeditprofile();
});


const logoutbut = document.getElementById("logoutbtn");
logoutbut.addEventListener("click", () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
});