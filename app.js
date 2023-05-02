const paragraph = document.querySelector(".para");

const historyBtn = ()=>{
    paragraph.innerHTML = ` <h2>History</h2>
    <p>Saylani Welfare International Trust is a non-government organization (NGO) focusing primarily on feeding the poor and homeless. It was established in May 1999 and is headquartered at Bahdurabad, Karachi, Pakistan.It was founded and headed by spiritual and religious scholar Maulana Bashir Farooq Qadri. With an estimated monthly expenditure of Pakistani Rupees above 30 million, Saylani Trust provides food twice a day to more than 30,000 poor people through its 100 centers (generally known as Dastar-Khawan), most of them are serving in Karachi.</p>`
};

const visionBtn = ()=>{
    paragraph.innerHTML = ` <h2>Vision</h2>
    <p>The Vision of SMIT is to produce more than 10 lac IT developers in Pakstan to stablize the economy.</p>`
};

const goalsBtn = ()=>{
    paragraph.innerHTML = ` <h2>Goals</h2>
    <p>The major goal of Saylani is to remove poverty from  the country so they are offering free IT courses To the students to make the economy better.</p>`
};

window.addEventListener('DOMContentLoaded',()=>{
    historyBtn();
})

