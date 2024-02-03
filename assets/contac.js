document.addEventListener("DOMContentLoaded", function() {
    var contactList = document.getElementById('contactList');
    var contacts = [
        { name: 'John Doe', phone: '4456-7890', email: 'john@gmail.com' },
        { name: 'Jane Doe', phone: '5654-3210', email: 'jane@gmail.com' },
        { name: 'Alice Smith', phone: '5555-5555', email: 'alice@gmail.com' },
        { name: 'Bob Johnson', phone: '2222-3333', email: 'bob@gmail.com' },
        { name: 'Emily Brown', phone: '8888-7777', email: 'emily@gmail.com' }
    ];

    contacts.forEach(function(contact) {
        var listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>Name:</strong> ${contact.name}<br>
            <span class="contact-info">
                <strong>Phone:</strong> ${contact.phone}<br>
                <strong>Email:</strong> ${contact.email}
            </span>
        `;
        contactList.appendChild(listItem);
    });
});
