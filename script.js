// Create 10 rooms with 2 beds each
let rooms = [];

for (let i = 1; i <= 10; i++) {
    rooms.push({
        roomNumber: i,
        beds: [null, null] // 2 beds per room
    });
}

// Populate room dropdown
let roomSelect = document.getElementById("roomNumber");
rooms.forEach(room => {
    let option = document.createElement("option");
    option.value = room.roomNumber;
    option.text = "Room " + room.roomNumber;
    roomSelect.appendChild(option);
});

function allocateBed() {
    let name = document.getElementById("studentName").value;
    let roomNum = document.getElementById("roomNumber").value;

    if (name === "" || roomNum === "") {
        alert("Please enter all details");
        return;
    }

    let room = rooms.find(r => r.roomNumber == roomNum);

    for (let i = 0; i < 2; i++) {
        if (room.beds[i] === null) {
            room.beds[i] = name;
            alert("Bed allocated successfully!");
            displayRooms();
            return;
        }
    }

    alert("Room is full!");
}

function vacateBed() {
    let name = document.getElementById("vacateName").value;

    rooms.forEach(room => {
        for (let i = 0; i < 2; i++) {
            if (room.beds[i] === name) {
                room.beds[i] = null;
                alert("Bed vacated successfully!");
                displayRooms();
                return;
            }
        }
    });

    alert("Student not found!");
}

function displayRooms() {
    let display = document.getElementById("roomStatus");
    display.innerHTML = "";

    rooms.forEach(room => {
        let div = document.createElement("div");
        div.className = "room";
        div.innerHTML = `
            <strong>Room ${room.roomNumber}</strong><br>
            Bed 1: ${room.beds[0] || "Empty"}<br>
            Bed 2: ${room.beds[1] || "Empty"}
        `;
        display.appendChild(div);
    });
}

displayRooms();
