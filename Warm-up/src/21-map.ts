export {};

function tidyUpString(str: string) {
  return str.trim().toLowerCase().replace("/", "");
}

// You are allowed to edit this function
function capitalise(str: string) {
  return (
    str.trim().replace("/", "")[0].toUpperCase() +
    str.trim().replace("/", "").substring(1)
  );
}

const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
let mentorsTidy = mentors.map((element) => {
  return capitalise(element);
});

console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]
