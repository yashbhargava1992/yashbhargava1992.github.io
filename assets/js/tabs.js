function showTab(tabId) {
    // Hide all tabs
    let tabs = document.querySelectorAll(".tab-content");
    tabs.forEach(tab => tab.classList.remove("active"));

    // Remove active class from all buttons
    let buttons = document.querySelectorAll(".tab-btn");
    buttons.forEach(btn => btn.classList.remove("active"));

    // Show the selected tab and highlight the button
    document.getElementById(tabId).classList.add("active");
    event.currentTarget.classList.add("active");
}
