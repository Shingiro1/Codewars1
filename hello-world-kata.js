// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => retur

function hello(name) {
  // Check if 'name' is missing, empty, or just spaces
  if (!name || name.trim() === '') {
    name = 'World'; // Default to 'World' with capital W
  } else {
    name = name.trim(); // Remove any leading/trailing whitespace

    // Capitalize the first letter, lowercase the rest
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }

  // Return the formatted greeting
  return `Hello, ${name}!`;
}

// Example calls:
console.log(hello());        // Hello, World!
console.log(hello(""));      // Hello, World!
console.log(hello("alice")); // Hello, Alice!
console.log(hello("BOB"));   // Hello, Bob!
