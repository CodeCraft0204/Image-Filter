// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounced version of load_myfilter
const debouncedLoadMyFilter = debounce((id, width, height) => {
    load_myfilter(id, width, height)
        .then(() => {
            // Handle success if needed
        }).catch(err => {
            console.error(err);
        });
}, 50); // Adjust the delay as needed