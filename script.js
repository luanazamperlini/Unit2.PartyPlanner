//********************************** API URL *********************
const API_URL =
  "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2309-FTM-MT-WEB-PT/events";

//********************************* SELECTORS*********************

//state object is going to store everything
//A state is a JavaScript object that stores the dynamic data of a component and allows it to follow changes between renderings
const state = {
  events: [],
};

//******************** SELECTORS *********************

const eventsList = document.querySelector("#events");
const addEventForm = document.querySelector("#addEvent");

//******************** METHODS *********************
//Async stops the program to run to take its time to fetch all the data it needs.
//Whenever it is assigned, it returns some kind of promise

//CRUD METHODS:

//**************** GET Request or - Read part of the CRUD ************
//needs the async keyword, the function and the name of the function.
// async tells the server to wait while its collecting all th data it needs to respond.
async function getEvents() {
  //try/catch block:
  try {
    //fetch gets the initial data since we are only passing the URL
    //on inspect, we expect a ""true response", add the "await to have the time to collect all the data
    const response = await fetch(API_URL);
    //we only get a documentation in "json" that needs to be converted so we can get the actual data
    const json = await response.json();
    //we add "data" to specify what you want to return from the database
    console.log("json", json.data);
    state.events = json.data;
  } catch (error) {
    console.error(error, "There was an error /GET events");
  }
}
getEvents();

//******************** CREATE Request = POST **********************
// pass the objects you need on the page:name, date,time...)
async function createEvent(name, date, time, location, description) {
  try {
    //At this time we are sending information back. The "fetch" will need an argument because by default it is a "GET Request" and we are CREATING a Request. We need to add method and header.
    const response = await fetch(API_URL, {
      method: "POST",
      //inform the way you want the application to run. json.
      headers: { "Content-Type": "application/json" },
      //"JSON.stringify" converts the information into json.
      body: JSON.stringify({ name, date, time, location, description }),
    });

    const json = await response.json();
    if (json.error) {
      throw new error(json.message);
    }
  } catch (error) {
    console.error(error, "There was an error /POST events");
  }
}

createEvent(
  "Event Name",
  "2021-09-30",
  "12:00:00",
  "123 Street",
  "This is a description of the event."
);

//******************** UPDATE Request = PUT **********************

async function updateEvent(id, name, date, time, location, description) {
  try {
    //At this time we are sending information back. The "fetch" will need an argument because by default it is a "GET Request" and we are CREATING a Request. We need to add method and header.
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      //inform the way you want the application to run. json.
      headers: { "Content-Type": "application/json" },
      //"JSON.stringify" converts the information into json.
      body: JSON.stringify({ name, date, time, location, description }),
    });

    const json = await response.json();
    console.log("jason", json);
    if (json.error) {
      throw new Error(json.message);
    }
  } catch (error) {
    console.error(error, "There was an error /PUT events");
  }
}

updateEvent(
  2111,
  "Birthday Party",
  "10/20/24",
  "18:00",
  "Kid City Theater",
  "Special Surprise"
);

//******************** DELETE Request = DELETE**********************
async function deleteEvent(id) {
  try {
    const response = await fetch(`$API_URL/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Event could not be deleted!");
    }
  } catch (error) {
    console.error(error, "There was an error /DELETE event");
  }
}

deleteEvent(2431);
