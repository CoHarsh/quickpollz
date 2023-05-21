let data = localStorage.getItem("polldata");
data = JSON.parse(data);
// let data = {
//     surveytitle,
//     surveyquestion,
//     surveyoptions,
//     deadline,
//     visibility,
//     wanttopromote
// }

const pollform = document.getElementById("pollform");
const polltitle = document.getElementById("polltitletext");
const pollquestion = document.getElementById("pollquestiontext");
const polloptions = document.getElementById("polloptions");
const submitpoll = document.getElementById("submitpoll");

polltitle.innerHTML = data.surveytitle;
pollquestion.innerHTML = data.surveyquestion;
for(let i = 0; i < data.surveyoptions.length; i++) {
    const polloption = document.createElement("div");
    polloption.id = "polloption" + (i + 1);
    polloption.className = "polloption";
    const polloptionradio = document.createElement("input");
    polloptionradio.type = "radio";
    polloptionradio.name = "poll";
    polloptionradio.value = data.surveyoptions[i];
    polloptionradio.id = "polloption" + (i + 1) + "radio";
    polloptionradio.style.marginRight = "15px";
    polloptionradio.style.marginBottom = "15px";
    polloptionradio.className = "polloptionradio";
    const polloptiontext = document.createElement("label");
    polloptiontext.for = "polloption" + (i + 1) + "radio";
    polloptiontext.id = "polloption" + (i + 1) + "text";
    polloptiontext.className = "polloptiontext";
    polloptiontext.innerHTML = data.surveyoptions[i];
    polloptiontext.style.fontSize='1.2rem';
    polloption.appendChild(polloptionradio);
    polloption.appendChild(polloptiontext);
    polloptions.appendChild(polloption);
}

pollform.addEventListener("submit", (e) => {
    e.preventDefault();
    let ans;
    const polloptionradios = document.getElementsByClassName("polloptionradio");
    for(let i = 0; i < polloptionradios.length; i++) {
        if(polloptionradios[i].checked) {
            ans = polloptionradios[i].value;
        }
        if(i == polloptionradios.length - 1 && ans == undefined) {
            document.getElementById("pollerrortext").innerHTML = "Please select an option";
            return;
        }
    }
    pollform.innerHTML = "";
    const pollresult = document.createElement("h3");
    pollresult.id = "pollrsubmitack";
    pollresult.innerText = "Your response has been recorded!";
    pollresult.style.color = "rgba(0, 0, 0, 0.7)";
    pollresult.style.fontSize = "2rem";
    pollresult.className = "text-center";
    pollform.style.display = "flex";
    pollform.style.justifyContent = "center";
    pollform.style.alignItems = "center";
    pollform.appendChild(pollresult);

});