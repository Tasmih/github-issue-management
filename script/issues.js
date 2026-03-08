const allBtn = document.getElementById("allBtn");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
let currentTab = "all";



const activeTab = (tab) => {
    currentTab = tab;

    // Reset all buttons
    allBtn.classList.remove("bg-[#3b82f6]", "text-white");
    allBtn.classList.add("bg-[#e4e4e7]", "text-[#64748b]");

    openBtn.classList.remove("bg-[#3b82f6]", "text-white");
    openBtn.classList.add("bg-[#e4e4e7]", "text-[#64748b]");

    closeBtn.classList.remove("bg-[#3b82f6]", "text-white");
    closeBtn.classList.add("bg-[#e4e4e7]", "text-[#64748b]");

    // Highlight active
    if(tab === "all") allBtn.classList.add("bg-[#3b82f6]", "text-white");
    if(tab === "open") openBtn.classList.add("bg-[#3b82f6]", "text-white");
    if(tab === "closed") closeBtn.classList.add("bg-[#3b82f6]", "text-white");

    loadCards();
};

// Event listeners
allBtn.addEventListener("click", () => activeTab("all"));
openBtn.addEventListener("click", () => activeTab("open"));
closeBtn.addEventListener("click", () => activeTab("closed"));

const loadCards = () => {
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        .then(res => res.json())
        .then(json => {
            let cards = json.data;

            // Filter based on tab
           if(currentTab === "open") cards = cards.filter(c => c.status.toLowerCase() === "open");
            if(currentTab === "closed") cards = cards.filter(c => c.status.toLowerCase() === "closed");

            displayCards(cards);
        })
        .catch(error => console.error("Error fetching issues:", error));
};


//load every single card on modal
const loadCardDetail =async(id)=>{
  const url=`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
 // console.log(url);
  const res = await fetch(url);
  const details = await res.json();
  displayCardDetail(details.data);
};

//display every single card on modal
const displayCardDetail =(card)=>{
//console.log(card);
const borderColor = card.status.toLowerCase() === "open" ? "border-green-500" : "border-purple-500";
const statusImage = card.status.toLowerCase() === "open"? "./assets/Open-Status.png": "./assets/Closed-Status .png";
const detailsDiv = document.getElementById("detailsContainer");

detailsDiv.innerHTML =` 
      <div class="space-y-3 p-3 shadow-sm h-full border-t-4 ${borderColor}">
        <div class="flex justify-between">
            <img src="${statusImage}" alt="${card.status}" class="w-6 h-6">

            <!--badge-->
           <div class="badge badge-soft badge-secondary ">${card.priority}</div>

        </div>
        <h3 class="text-[#1f2937] font-semibold text-[14px]">${card.title}</h3>
        <p class="text-[#64748b] text-[12px]">${card.description}</p>  
        <!--2 badges-->
        <div class=" flex gap-2">
            <div class="badge badge-soft badge-secondary"><img src="./assets/BugDroid.png" alt=""> BUG</div>
            <div class="badge badge-soft badge-warning text-[12px]"><img src="./assets/Lifebuoy.png" alt=""> HELP WANTED</div>   
        </div>
        
        <div class="mt-4 w-full  border-t border-t-gray-200 pt-2">
            <p class="text-[12px] text-[#64748b]">#${card.id} by ${card.author}</p>
             <p class="text-[12px] text-[#64748b]">${card.createdAt}</p>
            </div>
        </div>
          `;
       // detailsContainer.appendChild(detailsDiv);
document.getElementById("card_modal").showModal();
}

const displayCards =(cards)=>{
    console.log(cards);
    // get the container and empty it
    const cardsContainer = document.getElementById("cardsContainer");
  cardsContainer.innerHTML ="";

    // get into every  card
    for (let card of cards){
        const borderColor = card.status.toLowerCase() === "open" ? "border-green-500" : "border-purple-500";
        //  Image based on status
        const statusImage = card.status.toLowerCase() === "open" ? "./assets/Open-Status.png" : "./assets/Closed-Status .png";
            

        const cardDiv = document.createElement("div");

  // set innerhtml
          cardDiv.innerHTML= `
            <div id="card" class="space-y-3 p-3 shadow-sm h-full border-t-4 ${borderColor}">
                <div class="flex justify-between items-center">
                    <img src="${statusImage}" alt="${card.status}" class="w-6 h-6">
                    <div class="badge badge-soft badge-secondary">${card.priority}</div>
                </div>
                <h3 class="text-[#1f2937] font-semibold text-[14px]">${card.title}</h3>
                <p class="text-[#64748b] text-[12px]">${card.description}</p>  
                <div class="flex gap-2">
                    <div class="badge badge-soft badge-secondary"><img src="./assets/BugDroid.png" alt=""> BUG</div>
                    <div class="badge badge-soft badge-warning text-[12px]"><img src="./assets/Lifebuoy.png" alt=""> HELP WANTED</div>
                </div>
                <div class="mt-4 w-full border-t border-t-gray-200 pt-2 flex justify-between">
                    <p class="text-[12px] text-[#64748b]">#${card.id} by ${card.author}</p>
                    <p class="text-[12px] text-[#64748b]">${card.createdAt}</p>
                </div>
            </div>
        `;

        cardDiv.addEventListener("click", () => loadCardDetail(card.id));
        cardsContainer.appendChild(cardDiv);
    }
};


loadCards();