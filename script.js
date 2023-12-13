const API_URL =
  "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2309-FTB-MT-WEB-PT/events";

//********************SELECTORS*********************

//state object is going to store everything
//A state is a JavaScript object that stores the dynamic data of a component and allows it to follow changes between renderings
const state = {
  events: [],
};

const eventsList = document.querySelector("#events");
const addEventForm = document.querySelector("#addEvent");
//async stops the program to run to take its time to fetch all the data it needs. Whenever it is assigned, it returns some kind of promise

//Get Request - Read
async function getEvents() {
  try {
    //fetch/get the initial data
    const response = await fetch(API_URL);
    console.log("response", response);
    const json = await response.json();
    console.log("json", json.data);
    state.events = json.data;
  } catch (error) {
    console.error(error, "There was an error /GET EVENTS");
  }
}
getEvents();

//CRUD METHODS
//CREATE REQUEST - POST

async function createEvent(name, date, time, location, description) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, date, time, location, description }),
    });

    const json = response.json();

    //Error handling
    if (json.error) {
      throw new Error(json.message);
    }
  } catch (error) {
    console.error(error, "There was an error /POST EVENTS");
  }


  createEvent(Birthday));
}

// id: 1,
// eventName: "Event Name"
// date: "2021-09-30T00:00:00.000Z", // Date ISO string
// time: "12:00:00", // Time string
// location: "123 Street"
// description: "This is a description of the event.",

//delete button
//form with a submit button
//it should be added to the events list

















// getGuest();
// {
//   id: 1,
//   guestName: "Guest Name",
//   email: "guest@email.com",
//   phone: "123-456-7890"
// }

// getRSVP();
// {
//   id: 1,
//   guestId: 1, // Id of the attending guest
//   eventId: 1  // Id of the event being attended
// }
