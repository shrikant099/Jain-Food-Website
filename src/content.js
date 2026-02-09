// Home 6 melas itmems
export const meals = [
    { name: "Veg Mini Thali", price: 179, img: "/home/Veg-Mini-thali.png", desc: "1 Sabji + Dal + Rice + 4 Roti + Salad" },
    { name: "testing", price: 1, img: "", desc: "" },
    { name: "Paneer Butter Masala", price: 290, img: "/home/paneer-butter-masala.png", desc: "Creamy paneer gravy served fresh (400ml)" },
    { name: "Veg Biryani", price: 162, img: "/home/veg-biryani-with-raita.png", desc: "Aromatic biryani cooked Jain friendly  (400ml)" },
    { name: "Chilli Paneer", price: 300, img: "/home/chilli-paneer.png", desc: "Paneer tossed in spicy Jain sauce  (400ml)" },
    { name: "Aloo Paratha ", price: 100, img: "/home/aloo-paratha-curd-combo.png", desc: "Stuffed paratha served with pickle (1pc)" },
    { name: "Veg Cheese Grill Sandwich", price: 119, img: "/home/veg-cheese-grill-sandwich.png", desc: "Cheesy grilled sandwich (3 slice)" },
];



// User Reviews (Updated)
export const reviews = [
    {
        name: "Rohit Sharma",
        order: "Veg Thali",
        review:
            "Ordered veg thali at Abu Road and it tasted absolutely fresh. The paneer sabzi was the highlight—soft, flavorful, and perfectly spiced.",
    },
    {
        name: "Priya Mehta",
        order: "Paneer Sabzi + Roti",
        review:
            "My order arrived hot and on time during my journey. Loved the smooth delivery experience at Abu Road. Worth the price!",
    },
    {
        name: "Abhishek Jain",
        order: "Aloo Paratha Combo",
        review:
            "Great taste, good portion size, and hygiene maintained. Really impressed with the quality.",
    },
    {
        name: "Neha Gupta",
        order: "Deluxe Veg Meal",
        review:
            "Food was a bit pricey but totally justified. The flavours were authentic, and the packaging kept everything warm till it reached my seat.",
    },
    {
        name: "Amit Verma",
        order: "Dal Chawal",
        review:
            "Very quick service! I ordered dal-chawal and it came hot. Simple meal but tasted like home-cooked food.",
    },
    {
        name: "Kavita Joshi",
        order: "Paneer Butter Masala",
        review:
            "Butter roti & paneer butter masala were creamy with perfect spice balance. Would definitely order again.",
    },
    {
        name: "Manish Singh",
        order: "Jain Thali",
        review:
            "Delivery boy was polite, and the meal arrived faster than expected. Great experience for a long journey.",
    },
    {
        name: "Ruchi Bhandari",
        order: "Rice Bowl",
        review:
            "Rice bowl was fresh and filling. Price felt reasonable considering the portion size and freshness.",
    },
    {
        name: "Sameer Patel",
        order: "Curd Rice",
        review:
            "Mene curd rice order kiya Abu Road se — khana bahut acha hai, they are giving very good service according to price and taste.",
    },
    {
        name: "Harshita Shah",
        order: "Khichdi + Kadhi",
        review:
            "Light, comforting, and perfect for long journeys. Wonderful taste!",
    },
];




/// Alll Menu Items With Category And Price
export const menuCategories = [
    // ---------------- BULK THALI ----------------
    {
        name: "Bulk 3/5 Thali",
        items: [
            {
                name: "Mini Thali (5 Nos) + 5Pc Gulab Jamun",
                desc: "Seasonal veg + dal fry/tadka+rice+3 chapati + gulab jamun + salad + pickle",
                price: 800,
                img: "/menu/thalis/veg special thali.png"
            },
            {
                name: "Veg Special Thali (5 Nos)",
                desc: "Paneer butter masala + mix veg + dal fry/tadka + jeera rice + 3 butter chapati + curd + salad + pickle + gulab jamun",
                price: 1150,
                img: "/menu/thalis/Veg mini thali.png"
            },
            {
                name: "Aloo Paratha Curd Combo (5 Nos)",
                desc: "2pc aloo paratha + curd + salad + pickle",
                price: 450,
                img: "/menu/thalis/maharaja thali.png"
            },
            {
                name: "Mini Thali (3 Nos) + 3Pc Gulab Jamun",
                desc: "Seasonal veg + dal fry/tadka + rice + 3 chapati + gulab jamun + salad + pickle",
                price: 480,
                img: "/menu/thalis/jain special thali.png"
            },
            {
                name: "Jain Mini Thali (5 Nos) + 5Pc Gulab Jamun",
                desc: "Channa masala + dal fry/tadka + rice + chapati + salad + pickle",
                price: 800,
                img: "/menu/thalis/jain special thali.png"
            },
            {
                name: "Jain Special Thali (3 Nos)",
                desc: "Shahi paneer + channa + dal fry + jeera rice + butter chapati + curd + salad + pickle + papad + gulab jamun",
                price: 1200,
                img: "/menu/thalis/maharaja thali.png"
            }
        ]
    },

    // ---------------- THALIS ----------------
    {
        name: "Thalis",
        items: [
            {
                name: "Veg Mini Thali",
                desc: "Seasonal veg + dal fry/tadka + rice + chapati + gulab jamun + salad + pickle",
                price: 179,
                img: "/menu/thalis/Veg mini thali.png"
            },
            {
                name: "Jain Mini Thali",
                desc: "Channa masala + dal fry/tadka + rice + chapati + salad + pickle",
                price: 179,
                img: "/menu/thalis/jain mini thali.png"
            },
            {
                name: "Special Thali",
                desc: "Paneer butter masala + mix veg + dal fry + jeera rice + butter chapati + curd + salad + pickle + gulab jamun",
                price: 249,
                img: "/menu/thalis/veg special thali.png"
            },
            {
                name: "Jain Special Thali",
                desc: "Shahi paneer + channa + dal fry + jeera rice + butter chapati + curd + salad + pickle + papad + gulab jamun",
                price: 259,
                img: "/menu/thalis/jain special thali.png"
            },
            {
                name: "Maharaja Thali",
                desc: "Paneer butter masala + mix veg + jeera rice + dal fry + butter chapati + gulab jamun + papad + salad + pickle",
                price: 279,
                img: "/menu/thalis/maharaja thali.png"
            }
        ]
    },

    // ---------------- COMBOS ----------------
    {
        name: "Combos",
        items: [
            {
                name: "Dal Fry Thali With Roti",
                desc: "Dal fry + roti + salad + pickle",
                price: 171,
                img: "/menu/combos/dal-tadka-with-roti.png"
            },
            {
                name: "Dal Fry Thali With Rice",
                desc: "Dal fry + jeera rice + salad + pickle",
                price: 171,
                img: "/menu/combos/dal-fry-with-jeera-rice.png"
            },
            {
                name: "Chana Masala Thali With Roti",
                desc: "Channa + roti + salad + pickle",
                price: 181,
                img: "/menu/combos/channa-masala-with-roti.png"
            },
            {
                name: "Chana Masala Thali With Rice",
                desc: "Channa + jeera rice + salad + pickle",
                price: 181,
                img: "/menu/combos/chole-masala-with-rice.png"
            },

            {
                name: "Shahi Paneer + Roti",
                desc: "Shahi paneer + 3 roti + salad + pickle",
                price: 219,
                img: "/menu/combos/shahi-paneer-with-roti.png"
            },
            {
                name: "Shahi Paneer + Rice",
                desc: "Shahi paneer + jeera rice + salad + pickle",
                price: 219,
                img: "/menu/combos/shahi-paneer-with-rice.png"
            },
            {
                name: "Curd Rice Combo",
                desc: "Curd Rice",
                price: 149,
                img: "/menu/combos/curd-rice.png"
            },
            {
                name: "Aloo Paratha + Curd",
                desc: "Aloo paratha 2pc + curd + salad + pickle",
                price: 100,
                img: "/menu/combos/Aloo-paratha-with-curd.png"
            },

            // Paneer comboss
            {
                name: "Paneer Butter Masala + Roti",
                desc: "Paneer butter masala + roti + salad + pickle",
                price: 219,
                img: "/menu/combos/paneer-butter-masala-with-roti.png"
            },
            {
                name: "Paneer Chilly + Fried Rice",
                desc: "Paneer chilly + fried rice",
                price: 240,
                img: "/menu/combos/paneer-chilli-and-fried-rice.png"
            },
            {
                name: "Paneer Chilly + Noodles",
                desc: "Paneer chilly + noodles",
                price: 240,
                img: "/menu/combos/paneer-chilli-and-noodles.png"
            }
        ]
    },

    // ---------------- MAIN COURSE ----------------
    {
        name: "Main Course",
        items: [
            { name: "Paneer Butter Masala", desc: "500ml", price: 290, img: "/menu/main-course/Paneer-masala.png" },
            { name: "Matar Paneer", desc: "500ml", price: 290, img: "/menu/main-course/matar paneer.png" },
            { name: "Palak Paneer", desc: "500ml", price: 290, img: "/menu/main-course/Palak-Paneer.png" },
            { name: "Shahi Paneer", desc: "500ml", price: 290, img: "/menu/main-course/shahi paneer.png" },
            { name: "Mix Veg", desc: "500ml", price: 190, img: "/menu/main-course/shahi paneer.png" },
            { name: "Chana Masala", desc: "500ml", price: 190, img: "/menu/main-course/aloo-chole.png" },
            { name: "Aloo Dum", desc: "500ml", price: 190, img: "/menu/main-course/aloo dum.png" },
            { name: "Aloo Jeera", desc: "500ml", price: 162, img: "/menu/main-course/jeera aloo.png" },
            { name: "Aloo Matar", desc: "500ml", price: 190, img: "/menu/main-course/aloo matar.png" },
            { name: "Dal Fry", desc: "500ml", price: 162, img: "/menu/main-course/dal fry.png" },
            { name: "Dal Makhani", desc: "500ml", price: 170, img: "/menu/main-course/dal makhni.png" }
        ]
    },

    // ---------------- ROTI / NAAN ----------------
    {
        name: "Roti / Naan / Paratha",
        items: [
            { name: "Tawa Roti", desc: "1pc", price: 12, img: "/menu/roti/tawa-roti.png" },
            { name: "Butter Tawa Roti", desc: "1pc", price: 15, img: "/menu/roti/tawa-butter-roti.png" },
            { name: "Butter Paratha", desc: "1pc", price: 35, img: "/menu/roti/butter-paratha.png" },
            { name: "Tawa Paratha", desc: "1pc", price: 24, img: "/menu/roti/tawa-paratha.png" },
            { name: "Aloo Paratha", desc: "1pc", price: 65, img: "/menu/roti/tawa-roti.png" }
        ]
    },

    // ---------------- RICE ----------------
    {
        name: "Rice & Biryani",
        items: [
            { name: "Plain Rice", desc: "500ml", price: 100, img: "/menu/rice-biryani/plain-rice.png" },
            { name: "Jeera Rice", desc: "500ml", price: 129, img: "/menu/rice-biryani/jeera-rice.png" },
            { name: "Veg Pulao", desc: "500ml", price: 162, img: "/menu/rice-biryani/veg-pulao.png" },
            { name: "Masala Khichdi", desc: "500ml", price: 180, img: "/menu/rice-biryani/masala-khichdi.png" },
            { name: "Plain Khichdi", desc: "500ml", price: 160, img: "/menu/rice-biryani/plain-khichdi.png" },
            { name: "Veg Biryani With Raita", desc: "500ml", price: 165, img: "/menu/rice-biryani/veg-biryani-with-raita.png" }
        ]
    },

    // ---------------- CURD ----------------
    {
        name: "Curd & Raita",
        items: [
            { name: "Curd", desc: "250ml", price: 62, img: "/menu/curd-raita/plain curd.png" },
            { name: "Veg Raita", desc: "250ml", price: 80, img: "/menu/curd-raita/Veg raita.png" },
            { name: "Butter Milk", desc: "500ml", price: 45, img: "/menu/curd-raita/butter milk.png" }
        ]
    },

    // ---------------- ABU ROAD SPECIAL ----------------
    {
        name: "Abu Road Famous",
        items: [
            { name: "Makhaniya Lassi", desc: "300ml", price: 76, img: "/menu/abu-road/Makhaniya Lassi.png" },
            { name: "Nakshatra Rabdi", desc: "100gm cup", price: 67, img: "/menu/abu-road/Rabdi cup.png" },
            { name: "Khaman Dhokla", desc: "Full plate", price: 60, img: "/menu/abu-road/khaman dhokla.png" },
            { name: "Jalebi", desc: "100gm", price: 60, img: "/menu/abu-road/Jalebi.png" },
            { name: "Gulab Jamun", desc: "1pc", price: 25, img: "/menu/abu-road/Gulab jamun.png" }
        ]
    },

    // ---------------- CHINESE ----------------
    {
        name: "Chinese",
        items: [
            { name: "Veg Noodles", desc: "500ml", price: 140, img: "/menu/chinese/veg-noodles.png" },
            { name: "Veg Manchurian", desc: "500ml", price: 200, img: "/menu/chinese/veg-manchurian.png" },
            { name: "Chilli Paneer", desc: "500ml", price: 300, img: "/menu/chinese/chilly-paneer.png" },
            { name: "Veg Fried Rice", desc: "500ml", price: 167, img: "/menu/chinese/veg-fried-rice.png" },
            { name: "Manchurian Fried Rice", desc: "500ml", price: 248, img: "/menu/chinese/manchurian-fried-rice.png" },
            { name: "Paneer Fried Rice", desc: "500ml", price: 248, img: "/menu/chinese/paneer-fried-rice.png" }
        ]
    },

    // ---------------- SANDWICH & BURGER ----------------
    {
        name: "Sandwich & Burgers",
        items: [
            { name: "Veg Grill Sandwich", desc: "3 slice", price: 119, img: "/menu/sandwich-burger/Veg Grill Sandwich.png" },
            { name: "Aloo Masala Sandwich", desc: "3 slice", price: 100, img: "/menu/sandwich-burger/Aloo masala sandwich.png" },
            { name: "Veg Cheese Grill Sandwich", desc: "3 slice", price: 119, img: "/menu/sandwich-burger/Veg cheese grill sandwich.png" },
            { name: "Aloo Tikki Veg Burger", desc: "1pc", price: 100, img: "/menu/sandwich-burger/Aloo tiki veg burger.png" }
        ]
    },

    // ---------------- PIZZA ----------------
    {
        name: "Pizza",
        items: [
            { name: "Veg Paneer Cheese Pizza", desc: "8 inches", price: 248, img: "/menu/pizza-burger/Veg-Paneer-Cheese-Pizza.png" },
            { name: "Veg Cheese Pizza", desc: "8 inches", price: 229, img: "/menu/pizza-burger/Veg-Cheese-Pizza.png" },
            { name: "Onion Capsicum Cheese Pizza", desc: "8 inches", price: 229, img: "/menu/pizza-burger/Onion-Capsicum-Cheese-Pizza.png" }
        ]
    },

    // ---------------- SWEET / PAPAD ----------------
    {
        name: "Sweet · Papad · Salad",
        items: [
            { name: "Rasagulla", desc: "2pc", price: 45, img: "/menu/salad-papad/Rasagulla.png" },
            { name: "Green Salad", desc: "1pc", price: 58, img: "/menu/salad-papad/Green salad.png" },
            { name: "Roasted Papad", desc: "1pc", price: 19, img: "/menu/salad-papad/Roasted Papad.png" },
            { name: "Papad Fry", desc: "1pc", price: 29, img: "/menu/salad-papad/Fry Papad.png" }
        ]
    },

    // ---------------- JAIN SPECIAL ----------------
    {
        name: "Jain Special",
        items: [
            { name: "Jain Mini Thali", desc: "Channa + dal fry + rice + chapati + salad + pickle", price: 165, img: "/menu/jain-special/Jain mini thali.png" },
            { name: "Jain Special Thali", desc: "Shahi paneer + channa + dal fry + jeera rice + butter chapati + curd + salad + papad + gulab jamun", price: 230, img: "/menu/jain-special/Jain special thali.png" },
            { name: "Jain Channa Masala + Roti", desc: "Channa masala + roti + salad + pickle", price: 150, img: "/menu/jain-special/jain channa masala with roti.png" },
            { name: "Jain Paneer Masala + Roti", desc: "Paneer masala + roti + salad + pickle", price: 170, img: "/menu/jain-special/Jain paneer masala with roti.png" },
            { name: "Jain Mix Veg + Roti", desc: "Mix veg + roti + salad + pickle", price: 150, img: "/menu/jain-special/Jain mix veg with roti.png" },
            { name: "Jain Dal Fry + Rice", desc: "Dal fry + jeera rice + salad + pickle", price: 150, img: "/menu/jain-special/Jain dal fry with rice.png" },
            { name: "Jain Pizza", desc: "8 inches", price: 220, img: "/menu/jain-special/Jain veg cheese pizza.png" },
            { name: "Jain Veg Noodles", desc: "500ml", price: 150, img: "/menu/jain-special/Jain Chowmein.png" }
        ]
    }
];
