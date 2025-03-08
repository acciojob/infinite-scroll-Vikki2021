document.addEventListener("DOMContentLoaded", function () {
    const list = document.getElementById("infi-list"); // Make sure the ID matches

    function addListItems(count) {
        for (let i = 0; i < count; i++) {
            const listItem = document.createElement("li");
            listItem.textContent = `Item ${list.children.length + 1}`;
            list.appendChild(listItem);
        }
    }

    // Add initial 10 list items
    addListItems(10);

    list.addEventListener("scroll", function () {
        if (list.scrollTop + list.clientHeight >= list.scrollHeight - 5) {
            addListItems(2); // Add 2 more items when reaching the bottom
        }
    });
});
