const eventForm = document.getElementById("eventForm");
const eventSchoolInput = document.getElementById("eventSchool");
const eventTitleInput = document.getElementById("eventTitle");
const eventDescriptionInput = document.getElementById("eventDescription");
const eventDateInput = document.getElementById("eventDate");
const eventGradeInput = document.getElementById("eventGrade");
const eventMediaInput = document.getElementById("eventMedia");
const mediaPreview = document.getElementById("mediaPreview");
const eventsContainer = document.querySelector(".events");
const notificationsList = document.getElementById("notifications");


let events = [];

// Function to preview selected media
eventMediaInput.addEventListener("change", () => {
    const file = eventMediaInput.files[0];
    mediaPreview.innerHTML = "";
    if (file) {
        const url = URL.createObjectURL(file);
        if (file.type.startsWith("image/")) {
            mediaPreview.innerHTML = `<img src="${url}" alt="Selected Image">`;
        } else if (file.type.startsWith("video/")) {
            mediaPreview.innerHTML = `<video src="${url}" controls></video>`;
        }
    }
});

// Function to create an event
function createEvent(event) {
    event.preventDefault(); 

    const school = eventSchoolInput.value.trim();
    const title = eventTitleInput.value.trim();
    const description = eventDescriptionInput.value.trim();
    const date = eventDateInput.value;
    const grade = eventGradeInput.value;
    const media = eventMediaInput.files[0];

    if (!school || !title || !description || !date || !grade) {
        alert("Please fill in all fields to create an event.");
        return;
    }

    const newEvent = {
        school,
        title,
        description,
        date,
        grade,
        mediaUrl: media ? URL.createObjectURL(media) : null,
        mediaType: media ? media.type : null,
    };

    events.push(newEvent);
    eventForm.reset();
    mediaPreview.innerHTML = ""; 

    renderEvents();
    sendNotification(newEvent);
}

// Function to render events
function renderEvents() {
    eventsContainer.innerHTML = "";

    events.forEach((event, index) => {
        const eventCard = document.createElement("div");
        eventCard.classList.add("event");

        let mediaContent = "";
        if (event.mediaUrl) {
            if (event.mediaType.startsWith("image/")) {
                mediaContent = `<img src="${event.mediaUrl}" alt="Event Image">`;
            } else if (event.mediaType.startsWith("video/")) {
                mediaContent = `<video src="${event.mediaUrl}" controls></video>`;
            }
        }

        eventCard.innerHTML = `
            ${mediaContent}
            <h3>${event.title}</h3>
            <p>${event.description}</p>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Grade:</strong> ${event.grade}</p>
            <p><strong>School:</strong> ${event.school}</p>
            <button onclick="deleteEvent(${index})" class="button" style="background: #e11d48;">Delete</button>
        `;

        eventsContainer.appendChild(eventCard);
    });
}

// Function to send a notification
function sendNotification(event) {
    const notificationItem = document.createElement("li");
    notificationItem.textContent = `New Event Created: ${event.title} for ${event.school} - ${event.grade}`;
    notificationsList.appendChild(notificationItem);
}

// Function to delete an event
function deleteEvent(index) {
    events.splice(index, 1);
    renderEvents();
}

// Attach event listener to the form
eventForm.addEventListener("submit", createEvent);
