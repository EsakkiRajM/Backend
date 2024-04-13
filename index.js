const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 4000;
const { v4: uuid } = require('uuid');

app.use(bodyParser.json());

const roomDetails = [
    {
        roomId: uuid(),
        roomName: "No 1 room",
        noOfSeatsAvl: 10,
        amenities: ["ac", "food"],
        priceFor1Hour: 600
    },
    {
        roomId: uuid(),
        roomName: "No 2 room",
        noOfSeatsAvl: 8,
        amenities: ["ac", "food", "wifi"],
        priceFor1Hour: 800
    },
    {
        roomId: uuid(),
        roomName: "No 3 room",
        noOfSeatsAvl: 8,
        amenities: ["ac", "food", "wifi", "washing machine"],
        priceFor1Hour: 900
    }
];
const bookingDetails = [
    {
        roomId: uuid(),
        customerName: "Esakki Raj",
        date: "2024-04-13",
        starttime: "10.00",
        endtime: "11.00",
    },
    {
        roomId: uuid(),
        customerName: "Susi",
        date: "2024-04-12",
        starttime: "09.00",
        endtime: "11.00",
    },
    {
        roomId: uuid(),
        customerName: "Raj",
        date: "2024-04-11",
        starttime: "10.00",
        endtime: "11.00",
    }
];

app.get("/", (req, res) => {
    res.send("Server running successfully");
})

app.post("/createroom", (req, res) => {
    res.send(roomDetails);
    //console.log(req.body);
    roomDetails.push(
        {
            roomId: uuid(),
            roomName: req.body.roomName,
            noOfSeatsAvl: req.body.noOfSeatsAvl,
            amenities: req.body.amenities,
            priceFor1Hour: req.body.priceFor1Hour,
        }
    )
    console.log(roomDetails);
})

app.post("/bookingroom", (req, res) => {
    res.send(bookingDetails);
    //console.log(req.body);
    bookingDetails.push(
        {
            roomId: uuid(),
            customerName: req.body.customerName,
            date: req.body.date,
            starttime: req.body.starttime,
            endtime: req.body.endtime
        }
    )
    //console.log(bookingDetails);
})

app.post("/customerbookingdetails", (req, res) => {
        //res.send(customerwithBookings);
    const customerwithBookings = bookingDetails.map((booking) => {
        //console.log(booking.roomId);
        const room = roomDetails.find((room) => room.roomId.length == booking.roomId.length);
        // if(room) {
        //     console.log("working");
        //     console.log(room.roomName)
        // }
        return {
            roomName: room.roomName,
            bookedStatus: true, // For simplicity, assuming all bookings are active
            customerName: booking.customerName,
            date: booking.date,
            starttime: booking.starttime,
            endtime: booking.endtime,
          };
        });
        res.json(customerwithBookings);
})

app.post("/allcustomers", (req, res) => {
    //res.send(customerwithBookings);
const customerwithBookings = bookingDetails.map((booking) => {
    const room = roomDetails.find((room) => room.roomId.length == booking.roomId.length);
    return {
        roomName: room.roomName,
        customerName: booking.customerName,
        date: booking.date,
        starttime: booking.starttime,
        endtime: booking.endtime,
      };
    });
    res.json(customerwithBookings);
})

app.post("/listcustomers", (req, res) => {
    //res.send(customerwithBookings);
const customerwithBookings = bookingDetails.map((booking) => {
    const room = roomDetails.find((room) => room.roomId.length == booking.roomId.length);
    return {
        roomName: room.roomName,
        customerName: booking.customerName,
        date: booking.date,
        starttime: booking.starttime,
        endtime: booking.endtime,
      };
    });
    res.json(customerwithBookings);
})
app.get("/customerbookings", (req, res) => {
    
    const name  = req.query.name;
    const customerCount = bookingDetails.filter(booking => booking.customerName === name).length;
   
    
    const booking = bookingDetails.filter((booking) => {
        if(booking.customerName === name) {
            const listItems = {
                customerName: booking.customerName
         }
             return listItems;
        }
    })


    const bookingsCount = customerCount.toString();
    res.json({bookingsCount, booking}); // Send the count as a string

});

//

app.listen(port, () => {
    console.log(`Server started at ${port}`);
})


