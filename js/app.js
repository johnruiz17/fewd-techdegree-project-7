const alertBanner = document.getElementById('alert');

//creates the alert banner content 
alertBanner.innerHTML = 
`
<div class="alert-banner">
  <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete.</p>
  <p class="alert-banner-close">x</p>
</div>
`;

//closes the alert banner if 'x' is clicked
alertBanner.addEventListener('click', function(event) {
  const element = event.target;
  if (element.className === "alert-banner-close") {
    alertBanner.style.display = 'none';
  }
});

//these are the different data sets that will be used in trafficData
const trafficCanvas = document.getElementById('traffic-chart');
const listItems = document.querySelectorAll('.traffic-nav li');
const hourly = [ ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm' , '8pm'], 
[25, 30, 15, 35, 20, 45, 20, 15, 35, 15, 20]];
const daily  =  [ ['Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], 
[220, 330, 300, 180, 250, 450, 300, 250, 400, 350, 200]];
const weekly = [ ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26',
'27-3', '4-10', '11-17', '18-24', '25-31'], [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500]];
const monthly = [ ['January', 'February', 'March', 'April', 'May', 'June', 
'July', 'August', 'September', 'October', 'November'], 
[8120, 5370, 4580, 6240, 3100, 5230, 7150, 10000, 9000, 6250, 7400 ]];


let trafficData = {
  labels: weekly[0],
  datasets: [{
    data: weekly[1],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
  }]
};

let trafficOptions = {
  aspectRatio: 2.5,
  animation: {
    duration: 0
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  },
  legend: {
    display: false
  }
};

let trafficChart = new Chart(trafficCanvas, {
  type: 'line',
  data: trafficData,
  options: trafficOptions
});

//displays new chart given one of the above arrays
function displayNewChart(arr) {
  trafficData = {
    labels: arr[0],
    datasets: [{
      data: arr[1],
      backgroundColor: 'rgba(116, 119, 191, .3)',
      borderWidth: 1,
    }]
  };
  trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
  });
}

//loops through list items and removes active class if it finds it 
function removeActiveClass() {
  for (let i = 0; i < listItems.length; i++) {
    let li = trafficListItems[i];
    if (li.className === "hourly active") {
      li.className = "hourly";
    } else if (li.className === "daily active") {
      li.className = "daily";
    } else if (li.className === "weekly active") {
      li.className = "weekly";
    } else if (li.className === "monthly active") {
      li.className = "monthly";
    }
  }
}

//changes traffic chart data using the above variables if a traffic navigation option is clicked
const trafficNav = document.querySelector('.traffic-nav');
const trafficListItems = document.querySelectorAll('.traffic-nav li');

trafficNav.addEventListener('click', function(event) {
  if (event.target.className === "hourly") {
    removeActiveClass();
    event.target.className = "hourly active"
    displayNewChart(hourly);
  } else if (event.target.className === "daily") {
    removeActiveClass();
    event.target.className = "daily active"
    displayNewChart(daily);
  } else if (event.target.className === "weekly") {
    removeActiveClass();
    event.target.className = "weekly active"
    displayNewChart(weekly);
  } else if (event.target.className === "monthly") {
    removeActiveClass();
    event.target.className = "monthly active" 
    displayNewChart(monthly);
  }
});

const dailyCanvas = document.getElementById('daily-chart');

const dailyData = {
  labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  datasets: [{
    labels: '# of hits',
    data: [75, 100, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
  }]
};

const dailyOptions = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  },
  legend: {
    display: false
  }
};

let dailyChart = new Chart(dailyCanvas, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
});

const mobileCanvas = document.getElementById('mobile-users-chart');

const mobileData = {
  labels: ['Desktop', 'Tablets', 'Phones'],
  datasets: [{
    label: '# of users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
      '#7477BF',
      '#78CF82',
      '#51B6C8'
    ]
  }]
};

const mobileOptions = {
  legend: {
    position: 'right',
    labels: {
      boxWidth: 20,
      fontStyle: 'bold'
    }
  }
};

let mobileChart = new Chart(mobileCanvas, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
});

//alerts the user that message was successfully sent if an existing member name was typed
//alerts the user if any information is missing if they have not filled out the form correctly
const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

send.addEventListener('click', function() {
  if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending")
  } else if (user.value === "") {
    alert("Please fill out user field before sending")
  } else if (message.value === "") {
    alert("Please fill out message field before sending")
  } else {
    alert(`Message successfully sent to ${user.value}`)
  }
});

//displays notifications if the bell icon is clicked
const notificationContainer = document.querySelector('.notification-container');
const dropdownContent = document.querySelector('.dropdown-content');

notificationContainer.addEventListener('click', function(event) {
  if (event.target.tagName === 'IMG') {
    if (dropdownContent.style.display === "none") {
      dropdownContent.style.display = "inherit";
    } else {
      dropdownContent.style.display = "none";
    }
  }
});

//removes notifications if the 'x' is clicked
const xList = document.querySelectorAll('.notification-close');
const icon = document.querySelector('.notification-container div');
const parent = icon.parentNode;
let count = 0;

for (let i = 0; i < xList.length; i++ ) {
  let x = xList[i];
  x.addEventListener('click', function(event) {
    const child = event.target.parentNode;
    dropdownContent.removeChild(child);
    count += 1;
    if (count === 3) {
      parent.removeChild(icon);
    }
  });
}

//this jQuery code provides a list of auto complete options as the user types a name in the 'message user' field
$("#userField").autocomplete({
  source: ["Victoria Chambers", "Dale Byrd", "Dawn Wood", "Dan Oliver"]
});

//adds an event listener to the checkboxes in the settings section of the page
//changes the classes of the toggleSwitch elements either on or off depending on their current class
//changes the class of the toggleButton elements either on or off depending on their current class 
const checkbox1 = document.querySelector('#toggle-1');
const toggleSwitch1 = document.querySelector('.toggle-switch-1 label');
const toggleButton1 = document.querySelector('.toggle-switch-1 div');
const checkbox2 = document.querySelector('#toggle-2');
const toggleSwitch2 = document.querySelector('.toggle-switch-2 label');
const toggleButton2 = document.querySelector('.toggle-switch-2 div');

checkbox1.addEventListener('change', function(){
  if (toggleSwitch1.className === "switch on") {
    toggleSwitch1.className = "switch off";
    toggleButton1.className = "toggle-button off-position";
  } else if (toggleSwitch1.className === "switch off") {
    toggleSwitch1.className = "switch on";
    toggleButton1.className = "toggle-button on-position";
  }
});

checkbox2.addEventListener('change', function(){
  if (toggleSwitch2.className === "switch on") {
    toggleSwitch2.className = "switch off";
    toggleButton2.className = "toggle-button off-position";
  } else if (toggleSwitch2.className === "switch off") {
    toggleSwitch2.className = "switch on";
    toggleButton2.className = "toggle-button on-position";
  }
});

//adds an event listener to the timezone form that gives the option that was clicked the selected attribute
//removes the selected attribute from the option that previously had it
const timezone = document.querySelector('#timezone');
const options = document.querySelectorAll('#timezone option');
const defaultOption = document.querySelector('.default-option');
const eastern = document.querySelector('.eastern');
const central= document.querySelector('.central');
const mountain = document.querySelector('.mountain');
const pacific = document.querySelector('.pacific');
const alaska = document.querySelector('.alaska');
const hawaii = document.querySelector('.hawaii');

function removeSelectedAttribute() {
  for (let i = 0; i < options.length; i++) {
    let currentOption = options[i];
    currentOption.removeAttribute('selected');
  }
}

function storeTimeZone() {
  if (timezone.value === 'Eastern Time (EDT)') {
    localStorage.setItem('timezone', 'Eastern Time (EDT)');
  } else if (timezone.value === 'Central Time (CDT)') {
    localStorage.setItem('timezone', 'Central Time (CDT)');
  } else if (timezone.value === 'Mountain Time (MDT)') {
    localStorage.setItem('timezone', 'Mountain Time (MDT)');
  } else if (timezone.value === 'Pacific Time (PDT)') {
    localStorage.setItem('timezone', 'Pacific Time (PDT)');
  } else if (timezone.value === 'Alaska Time (AKDT)') {
    localStorage.setItem('timezone', 'Alaska Time (AKDT)');
  } else if (timezone.value === 'Hawaii Time (HST)') {
    localStorage.setItem('timezone', 'Hawaii Time (HST)');
  }
}

//when the 'save' button is clicked 
//check each toggle button and store the 'on' or 'off' values in local storage
//run the removeSelectedAttribute function
//run the storeTimeZone function
const saveButton = document.querySelector('#save');
function storeValue(toggleSwitchName, string) {
  if (toggleSwitchName.className === "switch on") {
    localStorage.setItem(string, 'on');
  } else if (toggleSwitchName.className === "switch off") {
    localStorage.setItem(string, 'off');
  }
}

saveButton.addEventListener('click', function() {
  storeValue(toggleSwitch1, 'toggle-switch-1');
  storeValue(toggleSwitch2, 'toggle-switch-2');
  removeSelectedAttribute();
  storeTimeZone();
  alert('Settings saved')
});

//when the 'cancel' button is clicked, reset styles to their original states and clear all local storage 
const cancelButton = document.querySelector('#cancel');
cancelButton.addEventListener('click', function(event) {
  toggleSwitch1.className = "switch on";
  toggleButton1.className = "toggle-button on-position";
  toggleSwitch2.className = "switch on";
  toggleButton2.className = "toggle-button on-position";
  localStorage.clear();
  removeSelectedAttribute();
  defaultOption.setAttribute('selected', true);
  alert('Settings reset')
});


//when the page is loaded, if local storage exists adds the 
//apporpriate classes to the toggleSwitch and toggleButton elements
if (localStorage.getItem('toggle-switch-1') === 'on') {
  //add the "switch on" class to toggleSwitch1 and the "toggle-button on-position" class to toggleButton1
  toggleSwitch1.className = "switch on";
  toggleButton1.className = "toggle-button on-position";
} else if (localStorage.getItem('toggle-switch-1') === 'off') {
  //add the "switch off" class to toggleSwitch1 and the "toggle-button off-position" class to toggleButton1
  toggleSwitch1.className = "switch off";
  toggleButton1.className = "toggle-button off-position";
}

if (localStorage.getItem('toggle-switch-2') === 'on') {
  //add the "switch on" class to toggleSwitch2 and the "toggle-button on-position" class to toggleButton2
  toggleSwitch2.className = "switch on";
  toggleButton2.className = "toggle-button on-position";
} else if (localStorage.getItem('toggle-switch-2') === 'off') {
  //add the "switch off" class to toggleSwitch2 and the "toggle-button off-position" class to toggleButton2
  toggleSwitch2.className = "switch off";
  toggleButton2.className = "toggle-button off-position";
}

//uses local storage as a condition to check if the localStorage value matches any of the 6 time zone options
//if there is a match adds the selected class to that option 
if (localStorage.getItem('timezone') === 'Eastern Time (EDT)') {
  eastern.setAttribute('selected', true);
} else if (localStorage.getItem('timezone') === 'Central Time (CDT)') {
  central.setAttribute('selected', true);
} else if (localStorage.getItem('timezone') === 'Mountain Time (MDT)') {
  mountain.setAttribute('selected', true);
} else if (localStorage.getItem('timezone') === 'Pacific Time (PDT)') {
  pacific.setAttribute('selected', true);
} else if (localStorage.getItem('timezone') === 'Alaska Time (AKDT)') {
  alaska.setAttribute('selected', true);
} else if (localStorage.getItem('timezone') === 'Hawaii Time (HST)') {
  hawaii.setAttribute('selected', true);
}