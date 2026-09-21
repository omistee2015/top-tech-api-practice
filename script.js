const customerList =
    document.getElementById("customerList");

const loadCustomers =
    document.getElementById("loadCustomers");

const customerForm =
    document.getElementById("customerForm");

const message =
    document.getElementById("message");


// GET REQUEST
loadCustomers.addEventListener("click", function () {

    fetch("https://jsonplaceholder.typicode.com/users")

        .then(function (response) {

            return response.json();

        })

        .then(function (data) {

            customerList.innerHTML = "";

            data.forEach(function (customer) {

                customerList.innerHTML += `

                    <div class="customer">

                        <h3>${customer.name}</h3>

                        <p>
                            Email: ${customer.email}
                        </p>

                        <p>
                            Phone: ${customer.phone}
                        </p>

                    </div>

                `;

            });

        })

        .catch(function (error) {

            console.log(error);

            customerList.innerHTML =
                "<p>Unable to load customers.</p>";

        });

});


// POST REQUEST
customerForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("customerName").value;

    const service =
        document.getElementById("customerService").value;

    const amount =
        document.getElementById("customerAmount").value;


    const customer = {

        name: name,

        service: service,

        amount: amount

    };


    fetch("https://jsonplaceholder.typicode.com/posts", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(customer)

    })

    .then(function (response) {

        return response.json();

    })

    .then(function (data) {

        console.log(data);

        message.textContent =
            "Customer sent successfully!";

        customerForm.reset();

    })

    .catch(function (error) {

        console.log(error);

        message.textContent =
            "Something went wrong.";

    });

});
