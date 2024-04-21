const firebaseConfig = {
    apiKey: "AIzaSyC4uXG_kt0odBztUbLtJmpORijmzThl2MM",
    authDomain: "foodflow-420911.firebaseapp.com",
    databaseURL: "https://foodflow-420911-default-rtdb.firebaseio.com",
    projectId: "foodflow-420911",
    storageBucket: "foodflow-420911.appspot.com",
    messagingSenderId: "525890054881",
    appId: "1:525890054881:web:4ca8667eda7ef2737265a0",
    measurementId: "G-DWZB59D1YH"
};

firebase.initializeApp(firebaseConfig);

var registerFormDB = firebase.database().ref("registerForm");
document.getElementById("registerForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    var formData = {
        orgName: getElementVal("orgName"),
        contactName: getElementVal("contactName"),
        email: getElementVal("email"),
        contactNumber: getElementVal("contactNumber"),
        password: getElementVal("password"),
        location: getElementVal("location"),
        orgType: getElementVal("orgType"),
        dietaryPreferences: getSelectedRadio("dietaryPreferences"),
        quantityNeeded: getElementVal("quantityNeeded")
    };
    saveMessages(
        formData.orgName,
        formData.contactName,
        formData.email,
        formData.contactNumber,
        formData.password,
        formData.location,
        formData.orgType,
        formData.dietaryPreferences,
        formData.quantityNeeded
    );

    // Reset the form after submission
    document.getElementById("registerForm").reset();
}

const saveMessages = (orgName, contactName, email, contactNumber, password, location, orgType, dietaryPreference, quantityNeeded) => {
    var newregisterForm = registerFormDB.push();
    newregisterForm.set({
        orgName: orgName,
        contactName: contactName,
        email: email,
        contactNumber: contactNumber,
        password: password,
        location: location,
        orgType: orgType,
        dietaryPreference: dietaryPreference,
        quantityNeeded: quantityNeeded
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};

const getSelectedRadio = (name) => {
    var radios = document.getElementsByName(name);
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
    return "";
};