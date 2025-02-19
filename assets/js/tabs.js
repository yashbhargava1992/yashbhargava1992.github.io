function showTab(tabId) {
    // Hide all tab contents
    let tabs = document.querySelectorAll(".tab-content");
    tabs.forEach(tab => tab.classList.remove("active"));

    // Remove active class from all buttons
    let buttons = document.querySelectorAll(".tab-btn");
    buttons.forEach(btn => btn.classList.remove("active"));

    // Show the selected tab and highlight the button
    document.getElementById(tabId).classList.add("active");
    event.currentTarget.classList.add("active");

    // Change the sidebar image based on the selected tab
    // let sidebarImage = document.getElementById("sidebar-img");

    // if (tabId === "proj1") {
    //     sidebarImage.src = "images/fulls/bh_spin.png"; // Replace with your actual image path
    // } else if (tabId === "proj2") {
    //     sidebarImage.src = "images/fulls/ns_accretion.jpg"; // Replace with your actual image path
    // } else if (tabId === "proj3") {
    //     sidebarImage.src = "images/fulls/wd_nova.png"; // Replace with your actual image path
    // }

    let header = document.getElementById("header");

    if (tabId === "proj1") {
        header.style.backgroundImage = "url('images/fulls/bh_spin.png')"; // Replace with your actual image
    } else if (tabId === "proj2") {
        header.style.backgroundImage = "url('images/fulls/ns_accretion.jpg')"; // Replace with your actual image
    } else if (tabId === "proj3") {
        header.style.backgroundImage = "url('images/fulls/wd_nova.png')"; // Replace with your actual image
    }
}
