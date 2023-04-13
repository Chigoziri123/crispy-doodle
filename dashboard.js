
var roomDetails = [{id: 1, name: "Bed Footer", image: "./assets/BedFooter.png" , booked: false, cost : "$40 per night"},
{id: 2, name: "Double Bedder", image: "./assets/DoubleBedder.jpg" , booked: false, cost : "$ 80 per night"},
{id: 3, name: "King's Suite", image: "./assets/KingSuite.png" , booked: true, cost : "$ 120 per night"},
{id: 4, name: "Minimalistic Mimic", image:"./assets/MinimalisticMimic.jpg" , booked: false, cost : "$ 100 per night"},
{id: 5, name: "Queen Suite", image: "./assets/Queen's Suite.png" , booked: true, cost : "$ 120 per night"},
{id: 6, name: "Seaside View", image: "./assets/SeasideView.png" , booked: false, cost : "$ 140 per night"},
{id: 7, name: "Single Bedder", image: "./assets/SingleBedder.png" , booked: true, cost : "$ 20 per night"},
{id: 8, name: "Wooden Wonder", image: "./assets/WoodenWonder.jpg" , booked: true, cost : "$ 60 per night"}
]

//Initials
var firstName = "Chigoziri";
var surName = "Anuna";
let initial = firstName.charAt(0) + surName.charAt(0);
document.getElementById("initials").innerText = initial;

//Retrieving HTML element IDs & assigning them to variables.
var addRoom = document.getElementById("addRoom");
var detailsRoom = document.getElementById("detailsRoom");
var bookedRooms = document.getElementById("bookedRooms");
var availRooms = document.getElementById("availRooms")

//User Details

/* users = [{userName: "Anuna Samuel", email: "anuna.s@bullseyemanpower.com", password: 123456}]
const showInitials = document.getElementById("showInitials")
const dashBoard = document.getElementById("dashBoard")
const form1 = document.getElementById("form1")
const formButton = document.getElementById("login") */


/*formButton.addEventListener('clicked',(e)=>{

    e.preventDefault()
    e.stopImmediatePropagation()

    currentUser = users[0]

    alert(JSON.stringify(currentUser))

    var data = new FormData (document.getElementById(form1))
    
    var email = data.get("email")
    var password = data.get("password")

    if (email === currentUser.email && password ===currentUser.password){
       
        fullName = currentUser.name.split(' ')
        initial = fullName[0].charAt(0) + fullName[1].charAt(0)
        document.getElementById("initials").innerText = initial.toUpperCase()
        dashBoard.classList.replace('hidden','block')
        showInitials.style.display = "none"

    }else{
        document.getElementById("errorOutput").innerText = "Incorrect user details. Try again"
    }

} )*/

detailsRoom.addEventListener('click', (e)=>{
    //This function returns all hotel rooms once without repeat.
    e.preventDefault()
    //This function removes all hotel rooms from the display menu.
    cleardisPlay
    //This function displays all the rooms on the disPlay element
    showRooms(roomDetails)
})

bookedRooms.addEventListener('click', (e)=> {
    e.preventDefault()
    
    cleardisPlay

    bookedRooms = roomDetails.filter((roomDetail)=>roomDetail.booked === true)

    showRooms(bookedRooms)
})

availRooms.addEventListener('click', (e)=>{
    e.preventDefault()

    e.cleardisPlay

    availRooms = roomDetails.filter((roomDetail)=>roomDetail.booked === false)

    showRooms(availRooms)
})

const showRooms=(roomDetails)=>{
    for (let roomDetail of roomDetails) {
        //Declaring a variable to display hotel room information 
        const disPlay = document.getElementById("disPlay")
        disPlay.className = "text-black text-bold mt-28 ml-96 h-48 rounded-md bg-gray-400"
        
        //Creating an image element to contain hotel room pictures
        const image = document.createElement("img")
        image.className = "h-24 w-24 m-4"
        image.src = roomDetail.image;

        //Creating a div element to contain hotel room information
        const roomInfo = document.createElement("div")
        roomInfo.className = "font-semibold text-center mt-2"

        //Creating a paragraph element that shows the hotel room name.
        const roomName = document.createElement("p")
        roomName.className = "font-light mb-2"
        roomName.innerText = roomDetail.name;

        //Creating a paragraph element to show the cost of each hotel room
        const roomCost = document.createElement("p")
        roomCost.className = "font-light"
        roomCost.innerText = roomDetail.cost;

        // Creating a paragraph element to show available and booked rooms.
        const roomStatus = document.createElement("p");
        roomStatus.className = `border-solid rounded-md font-light text p-2 mt-2 ${roomDetail.booked? 'bg-yellow-600' : 'bg-green-600'}`;
        roomStatus.innerText = `${roomDetail.booked? 'Available' : 'Booked'}`;

        //Appending the room name, room cost and availability to room information container
        roomInfo.appendChild(roomName)
        roomInfo.appendChild(roomCost)
        roomInfo.appendChild(roomStatus)

        disPlay.appendChild(roomInfo)
        disPlay.appendChild(image)
        disPlay.appendChild(btn)
    }
}

const cleardisPlay=()=>{

    while (disPlay.hasChildNodes()){
        disPlay.removeChild(disPlay.firstChild)
    }
}

// Filtering an Array
const btn = document.createElement("button")
var removeRoom

btn.innerText = "Delete"

btn.addEventListener("click", removeRoom )

// const removeRoom = (roomDetails, room Id)=>{

//     newRooms = roomDetails.filter((room) => {

//         return roomDetails.id !== roomId
//     })

    