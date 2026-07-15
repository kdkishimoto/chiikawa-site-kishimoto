document.addEventListener("DOMContentLoaded", () => {
    // -------------------------------------------------------------
    // FEATURE 1: DYNAMIC TIME-BASED GREETINGS (On Home Page)
    // -------------------------------------------------------------
    const greetingEl = document.getElementById("dynamic-greeting");
    if (greetingEl) {
        const hour = new Date().getHours();
        let greetingStr = "Hello!";
        
        if (hour < 12) {
            greetingStr = "Good morning, friend! ☀️";
        } else if (hour < 18) {
            greetingStr = "Good afternoon! 🌸";
        } else {
            greetingStr = "Good evening! 🌙";
        }
        greetingEl.textContent = greetingStr;
    }

    // -------------------------------------------------------------
    // FEATURE 2: TOGGLE ACCORDION MENU / STORY BOX (On Home Page)
    // -------------------------------------------------------------
    const toggleBtn = document.getElementById("toggle-story-btn");
    const storyBox = document.getElementById("story-box");

    if (toggleBtn && storyBox) {
        toggleBtn.addEventListener("click", () => {
            const isHidden = storyBox.classList.toggle("hidden");
            if (isHidden) {
                toggleBtn.textContent = "What is Chiikawa?";
            } else {
                toggleBtn.textContent = "Close Details";
            }
        });
    }

    // -------------------------------------------------------------
    // FEATURE 3: CONTACT FORM VALIDATION (On Contact Page)
    // -------------------------------------------------------------
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Stop native redirect

            // Grab elements
            const nameInput = document.getElementById("username");
            const emailInput = document.getElementById("email");
            const msgInput = document.getElementById("message");

            const nameError = document.getElementById("name-error");
            const emailError = document.getElementById("email-error");
            const msgError = document.getElementById("msg-error");
            const successBox = document.getElementById("success-message");

            // Reset Error Displays
            nameError.textContent = "";
            emailError.textContent = "";
            msgError.textContent = "";
            
            let isValid = true;

            // Name Validation
            if (nameInput.value.trim() === "") {
                nameError.textContent = "Please let us know your name!";
                isValid = false;
            }

            // Simple Email Check
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput.value.trim() === "") {
                emailError.textContent = "We need your email address to reply!";
                isValid = false;
            } else if (!emailRegex.test(emailInput.value.trim())) {
                emailError.textContent = "Oops! That format doesn't look quite right.";
                isValid = false;
            }

            // Message Validation
            if (msgInput.value.trim() === "") {
                msgError.textContent = "Don't leave the message empty!";
                isValid = false;
            }

            // Show success alert and reset inputs if all validations pass
            if (isValid) {
                successBox.classList.remove("hidden");
                contactForm.reset();
                
                // Hide Success Banner after 5 seconds
                setTimeout(() => {
                    successBox.classList.add("hidden");
                }, 5000);
            }
        });
    }
});