# Summary

Interactive registration form utilizing JavaScript custom validation messages.

## Reflections

How did event.preventDefault() help in handling form submission?

- It allowed me to prevent the page from reloading when the submit button is clicked so that I can run the functions of my choosing.

What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?

- HTML5 validation are handled by the web browser and will allow the form to be validated even if JavaScript is disabled. You might use both when accounting for different edge-cases like validating data loaded from local storage.

Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?

- I saved the trimmed username value to local storage, and when retrieving the data from local storage I validated it before adding username to the form to ensure that the loaded value is formatted correctly. Local storage should not be used for sensative data because it can be accessed by any scripts running on the page including malicious scripts.

Describe a challenge you faced in implementing the real-time validation and how you solved it.

- Browser form history / suggestions aren't triggering the form validation. I tried multiple methods including adding additional event listeners for "change" but it didn't resolve the issue.

How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?

- I wanted to display them on 'blur' but the instructions mentioned using the 'input' event. I set a custom message for each validity case that was being tested, and I ensured that details like pattern requirements were included in each custom validation message.
