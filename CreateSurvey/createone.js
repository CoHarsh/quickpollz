
const isentervisibile = document.getElementById("enter-site-section");
window.addEventListener("load", () => {
    const issignin = localStorage.getItem("user");
    if (issignin) {
        isentervisibile.style.display = "none";
    }
});

const clearform = document.getElementById("clearform");
clearform.addEventListener("click", () => {
    localStorage.removeItem("createdata");
    window.location.reload();
});


const cancle = document.getElementById("raddkaro");
cancle.addEventListener("click", () => {
    localStorage.removeItem("createdata");
    window.location.href = "../index.html";
});


const addbutton = document.getElementById("addbutton");
    const submitbutton = document.getElementById("submitbutton");
    const createform = document.getElementById("createform");
    const surveyoptionscontainer = document.getElementById("surveyoptionscontainer");
    let cnt = 1;

    addbutton.addEventListener("click",(e) =>{
        let adddiv = document.createElement("div");
        adddiv.setAttribute("style","display: flex;justify-content: space-between;align-items: center;");
        let addinput = document.createElement("input");
        addinput.setAttribute("type","text");
        addinput.setAttribute("class","form-control mt-3");
        addinput.setAttribute("id",`surveyoptions${cnt}`);
        addinput.setAttribute("aria-describedby","surveyoptions");
        adddiv.appendChild(addinput);
        let addspan = document.createElement("span");
        addspan.setAttribute("class","material-icons");
        addspan.setAttribute("style","color: rgba(0, 0, 0, 0.5);cursor: pointer;margin-left:10px");
        addspan.setAttribute("id",`crossicon${cnt}`);
        addspan.innerHTML = "clear";
        adddiv.appendChild(addspan);
        surveyoptionscontainer.appendChild(adddiv);
        cnt++;
    });

    //on change any changes in the form save changes to local storage
    createform.addEventListener("change",(e)=>{
        let surveytitle = createform["surveytitle"].value;
        let surveyquestion = createform["surveyquestion"].value;
        let surveyoptions = [];
        for(let i=0;i<cnt;i++){
            if(createform[`surveyoptions${i}`].value == ""){
                continue;
            }
            surveyoptions.push(createform[`surveyoptions${i}`].value);
        }
        let deadline = createform["deadline"].value;
        let visibility = createform["exampleRadios"].value;
        let wanttopromote = createform["promotedradios"].value;
        let data = {
            surveytitle,
            surveyquestion,
            surveyoptions,
            deadline,
            visibility,
            wanttopromote
        }
        localStorage.setItem("createdata",JSON.stringify(data));
    })

    //on load of the page load the data from local storage
    window.addEventListener("load",(e)=>{
        let data = JSON.parse(localStorage.getItem("createdata"));
        if(data){
            if(data.surveytitle){
                createform["surveytitle"].value = data.surveytitle;
            }
            if(data.surveyquestion){
                createform["surveyquestion"].value = data.surveyquestion;
            }
            if(data.surveyoptions){
                // clear surveyoptionscontainer
                surveyoptionscontainer.innerHTML = "";
                cnt=0;
                for(let i=0;i<data.surveyoptions.length;i++){
                    let addinput = document.createElement("input");
                    addinput.setAttribute("type","text");
                    addinput.setAttribute("class","form-control mt-3");
                    addinput.setAttribute("id",`surveyoptions${i}`);
                    addinput.setAttribute("aria-describedby","surveyoptions");
                    addinput.setAttribute("value",`${data.surveyoptions[i]}`);
                    surveyoptionscontainer.appendChild(addinput);
                    cnt++;
                }
            }
            if(data.deadline){
                createform["deadline"].value = data.deadline;
            }
            if(data.visibility){
                createform["exampleRadios"].value = data.visibility;
            }
            if(data.wanttopromote){
                createform["promotedradios"].value = data.wanttopromote;
            }
        }
    })

    createform.addEventListener("submit",(e)=>{
        e.preventDefault();
        const createform = document.getElementById("createform");
        let surveytitle = createform["surveytitle"].value;
        if(surveytitle == ""){
            document.getElementById("errormessage").innerHTML = "Please enter a title";
            window.scrollTo(0,0);
            return;
        }
        let surveyquestion = createform["surveyquestion"].value;
        if(surveyquestion == ""){
            document.getElementById("errormessage").innerHTML = "Please enter a question";
            window.scrollTo(0,0);
            return;
        }
        let surveyoptions = [];
        for(let i=0;i<cnt;i++){
            if(createform[`surveyoptions${i}`].value == ""){
                document.getElementById("errormessage").innerHTML = "Please enter all the options";
                window.scrollTo(0,0);
                return;
            }
            surveyoptions.push(createform[`surveyoptions${i}`].value);

        }
        let deadline = createform["deadline"].value;
        if(deadline == ""){
            document.getElementById("errormessage").innerHTML = "Please enter a deadline";
            window.scrollTo(0,0);
            return;
        }
        let visibility = createform["exampleRadios"].value;
        let wanttopromote = createform["promotedradios"].value;
        let data = {
            surveytitle,
            surveyquestion,
            surveyoptions,
            deadline,
            visibility,
            wanttopromote
        }
        submitbutton.innerHTML = "Creating...";
        setTimeout(()=>{
            submitbutton.innerHTML = "Create";
        },2000);
        localStorage.removeItem("createdata")
        localStorage.setItem("polldata",JSON.stringify(data));
        createform.innerHTML="";
        const createpolltitle = document.getElementById("createpollhead");
        createpolltitle.style.display="none";
        let infodiv = document.createElement("div");
        infodiv.innerText="Poll Successfully created!";
        infodiv.className="mt-3 text-center";
        infodiv.style="display:flex;justify-content:center;align-item:center;flex-direction:column;font-size:2rem"
        let abox = document.createElement("a");
        abox.href="./poll.html";
        abox.innerText="your poll's link";
        infodiv.append(abox);
        createform.append(infodiv);
    })
