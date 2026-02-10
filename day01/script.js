const form = document.getElementById("profileForm");

form.addEventListener("submit", function(event){

    event.preventDefault(); // stops page reload

    // Getting values
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const blood = document.getElementById("blood").value;

    const gender = document.querySelector('input[name="gender"]:checked')?.value;

    const profileimage_male= "https://img.freepik.com/premium-vector/default-male-user-profile-icon-vector-illustration_276184-168.jpg";
    const profileimage_female="https://img.freepik.com/premium-vector/default-female-user-profile-icon-vector-illustration_276184-169.jpg";
    const profileimage_other="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg?semt=ais_hybrid&w=740&q=80";
    
    // Set profile image based on gender
    const profileImageElement = document.getElementById("profileImage");
    if (gender === "Male") {
        profileImageElement.src = profileimage_male;
    } else if (gender === "Female") {
        profileImageElement.src = profileimage_female;
    } else {
        profileImageElement.src = profileimage_other;
    }                           
    
    // Displaying values
    document.getElementById("displayName").textContent = name;
    document.getElementById("displayAge").textContent =  age;
    document.getElementById("displayGender").textContent = gender;
    document.getElementById("displayBlood").textContent =  blood;

    // Show card
    document.getElementById("cardOutput").style.display = "block";

    console.log(name, age, blood);

});



