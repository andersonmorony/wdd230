const currentDate = new Date();
let amount;
let lastVisit;
const messageHtml = document.getElementById("message");
GetAmountVisit();
SetLastVisit();



function GetAmountVisit()
{
    const resp = localStorage.getItem("visitor");
    const respJson = JSON.parse(resp);

    amount = respJson != null ? respJson.amount: 0;
    lastVisit = respJson != null ? respJson.lastVisit: new Date();
    ChangeHTML();
}

function SetLastVisit()
{
    const data = { amount: amount + 1, lastVisit: new Date()}
    const JsonData = JSON.stringify(data);
    localStorage.setItem("visitor", JsonData);
}


function ChangeHTML()
{
    let text;

    if(amount == 0)
    {
        text = "Welcome! Let us know if you have any questions";
        messageHtml.innerHTML = text;
        return;
    }

    const diff = DifferentBetweenDates(currentDate, new Date(lastVisit));

    if(diff >= 1)
    {
        const dayAsText = diff > 1 ? "days" : "day";
        text = `You last visited ${diff} ${dayAsText} ago.`;
    }
    else
    {
        text = "Back so soon! Awesome!";
    }

    messageHtml.innerHTML = text;

}

function DifferentBetweenDates(current_date, lastVisit) {

    const diff = Math.abs(current_date - lastVisit);

    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    return days - 1;
}