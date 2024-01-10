// ==UserScript==
// @name        Questionable Questing Userscript
// @description removing the remaining replies and renaming the last page button
// @match       https://forum.questionablequesting.com/*
// ==/UserScript==

(function() {
    try {
        // Select the first element with the class 'u-dimmed' representing the 'remaining replies' section
let remainingReplies = document.querySelectorAll('.linkGroup')[1]

// Check if the 'remaining replies' section exists on the page
if (remainingReplies != null) {
    // Remove the 'remaining replies' section from the page if it's found
    remainingReplies.remove();
}
    } catch (error) {
        console.error("Error removing 'remaining replies' section:", error.message);
    }

})();

(function() {
    try {
        let navItems = document.querySelectorAll('.PageNav nav a');

navItems.forEach((item, index) => {
  if (item.textContent.includes('Next')) {
    let prevElement = navItems[index - 1];
    prevElement.textContent = 'Last';
  }
});
    } catch (error) {
        console.error("Error renaming page navigation buttons:", error.message);
    }
})();
