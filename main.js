document.addEventListener('DOMContentLoaded', () => {
    // Ensure that the script runs after the DOM is fully loaded
    const itemContainers = document.querySelectorAll('.js-collapsible-body');

    const footerArrows = document.querySelectorAll('.footer-arrow');


    if (itemContainers.length === 0) {
        console.error('No elements with class .js-collapsible-button found.');
        return;
    }

    itemContainers.forEach(itemContainer => {
        itemContainer.addEventListener('click', () => {
            // Check if the containerDiv exists
            const containerDiv = itemContainer.querySelector('.collapsible-list');
            // Find the arrow element and toggle its rotation
            const arrow = itemContainer.querySelector('.footer-arrow');

                if (containerDiv) {
                    // Calculate the current height and apply the transition
                    if (containerDiv.style.maxHeight) {
                        // Collapse the section
                        containerDiv.style.maxHeight = null;
                        arrow.classList.remove('rotated');
                    } else {
                        // Expand the section
                        containerDiv.style.maxHeight = containerDiv.scrollHeight + "px";
                        arrow.classList.add('rotated');
                    }
            }

        });
    });

// Select elements
const tabletSelect = document.querySelector('.nav__items-switcher');
const tabletMenuContent = document.querySelector('.dropdown-list');
const tabletMenuArrow = document.querySelector('.arrow-container');

// Check if the elements exist
if (!tabletMenuContent) {
    console.error('No elements with class .dropdown-list found.');
} else if (!tabletMenuArrow) {
    console.error('No element with class .arrow-container found.');
} else if (!tabletSelect) {
    console.error('No element with class .nav__items-switcher found.');
} else {
    console.log('Elements successfully selected. Adding event listener.');

    // Add event listener
    tabletSelect.addEventListener('click', () => {
        // Check if tabletMenuArrow exists before modifying
        if (tabletMenuArrow) {
            // Toggle the menu height
            if (tabletMenuContent.style.maxHeight) {
                tabletMenuContent.style.maxHeight = null;
                tabletMenuArrow.classList.remove('rotated');
            } else {
                tabletMenuContent.style.maxHeight = tabletMenuContent.scrollHeight + "px";
                tabletMenuArrow.classList.add('rotated');
            }
        } else {
            console.error('No element with class .arrow-container found during click event.');
        }
    });
}

 // Select elements
 const mobileMenuButton = document.querySelector('.button-icon');
 const mobileMenu = document.querySelector('.mobile-menu');
 const body = document.body;

 // Add event listener
 mobileMenuButton.addEventListener('click', () => {
     // Toggle the 'show' class on the mobile menu
     mobileMenu.classList.toggle('show');

     // Toggle the 'is-active' class on the button
     mobileMenuButton.classList.toggle('is-active');

     // Lock or unlock scrolling
     if (mobileMenu.classList.contains('show')) {
         body.classList.add('no-scroll');
     } else {
         body.classList.remove('no-scroll');
     }
 });
});



