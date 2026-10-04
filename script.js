// SAMPLE SHIPMENT DATABASE

const shipments = {

    "SC1001": {

        customer: "Kavya Reddy",

        destination: "Chennai",

        courier: "Express Delivery",

        status: "Out for Delivery",

        date: "04 October 2026"

    },


    "SC1002": {

        customer: "Rahul Sharma",

        destination: "Bangalore",

        courier: "Standard Delivery",

        status: "In Transit",

        date: "03 October 2026"

    },


    "SC1003": {

        customer: "Priya Nair",

        destination: "Hyderabad",

        courier: "Express Delivery",

        status: "Delivered",

        date: "02 October 2026"

    },


    "SC1004": {

        customer: "Arjun Kumar",

        destination: "Mumbai",

        courier: "Standard Delivery",

        status: "Processing",

        date: "04 October 2026"

    }

};


// TRACK PACKAGE

function trackPackage() {

    const input =
        document
        .getElementById("trackingInput")
        .value
        .trim()
        .toUpperCase();


    const result =
        document.getElementById(
            "trackingResult"
        );


    if (input === "") {

        result.innerHTML = `

            <p>
                Please enter a tracking number.
            </p>

        `;

        return;
    }


    const shipment =
        shipments[input];


    if (!shipment) {

        result.innerHTML = `

            <h3>
                Tracking ID Not Found
            </h3>

            <p>
                Please check the tracking number
                and try again.
            </p>

        `;

        return;
    }


    result.innerHTML = `

        <h3>
            ${input}
        </h3>

        <p>
            <strong>
                Customer:
            </strong>

            ${shipment.customer}
        </p>

        <p>
            <strong>
                Destination:
            </strong>

            ${shipment.destination}
        </p>

        <p>
            <strong>
                Service:
            </strong>

            ${shipment.courier}
        </p>

        <p>
            <strong>
                Last Updated:
            </strong>

            ${shipment.date}
        </p>

        <span class="status">
            ${shipment.status}
        </span>

    `;

}


// SCROLL TO TRACKING

function goToTracking() {

    document
        .getElementById("tracking")
        .scrollIntoView({
            behavior: "smooth"
        });

}