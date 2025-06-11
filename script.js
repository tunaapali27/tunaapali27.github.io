// Wait for the entire HTML document to be loaded and parsed
document.addEventListener('DOMContentLoaded', () => {
    
    // Select all elements that function as a step (questions or results)
    const allSteps = document.querySelectorAll('.step');
    
    // Select all buttons that trigger a transition to another step
    const actionButtons = document.querySelectorAll('[data-target]');
    
    // Select all "Start Over" buttons
    const resetButtons = document.querySelectorAll('.reset-btn');

    /**
     * Hides all steps and shows only the one with the specified ID.
     * @param {string} stepId - The ID of the step to display.
     */
    const showStep = (stepId) => {
        // Hide all steps first
        allSteps.forEach(step => {
            step.classList.remove('active');
        });

        // Find the target step and show it
        const nextStep = document.getElementById(stepId);
        if (nextStep) {
            nextStep.classList.add('active');
        } else {
            console.error(`Error: Step with ID "${stepId}" not found.`);
        }
    };

    // Add a click event listener to every action button
    actionButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the ID of the next step from the button's 'data-target' attribute
            const targetId = button.dataset.target;
            
            // Call the function to display the target step
            showStep(targetId);
        });
    });

    // Add a click event listener to every reset button
    resetButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Reset the quiz by showing the first question ('q1')
            showStep('q1');
        });
    });

    // Initially, ensure only the first step ('q1') is visible when the app loads.
    // This is redundant if the HTML is set up correctly, but it's good practice.
    showStep('q1');
});