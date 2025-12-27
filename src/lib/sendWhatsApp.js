export async function sendWhatsApp(order) {
    try {
        const PHONE_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;
        const TOKEN = process.env.WHATSAPP_ACCESS_TOKEN;

        const orderDate = new Date()
            .toLocaleDateString("en-IN")
            .split("/")
            .join("-");

        const cleanText = (text) =>
            String(text)
                .replace(/\n/g, " ")
                .replace(/\t/g, " ")
                .replace(/\s{2,}/g, " ")
                .trim();
        const itemsText = order.items
            .map(i => `${i.name} x ${i.qty}`)
            .join(", ");

        const ownerNumber = process.env.WHATSAPP_OWNER_NUMBER.startsWith("91")
            ? process.env.WHATSAPP_OWNER_NUMBER
            : `91${process.env.WHATSAPP_OWNER_NUMBER}`;
        const customerNumber = `91${order.customer.phone}`;

        const buildPayload = (to) => ({
            messaging_product: "whatsapp",
            to,
            type: "template",
            template: {
                name: "order_confirmation_utility_v1",
                language: { code: "en" },
                components: [
                    {
                        type: "body",
                        parameters: [
                            { type: "text", text: cleanText(order.orderId) },                    // {{1}}
                            { type: "text", text: cleanText(order.customer.name) },              // {{2}}
                            { type: "text", text: cleanText(order.customer.phone) },             // {{3}}
                            { type: "text", text: cleanText(order.customer.payment) },           // {{4}}
                            { type: "text", text: cleanText(order.customer.train) },             // {{5}}
                            { type: "text", text: cleanText(order.customer.pnr) },               // {{6}}
                            { type: "text", text: cleanText(`${order.customer.coach}/${order.customer.seat}`) }, // {{7}}
                            { type: "text", text: cleanText(order.orderDate) },                  // {{8}}
                            { type: "text", text: cleanText(itemsText) },                        // {{9}}
                            { type: "text", text: cleanText(order.price.subtotal) },             // {{10}}
                            { type: "text", text: cleanText(order.price.discount) },             // {{11}}
                            { type: "text", text: cleanText(order.price.gst) },                  // {{12}}
                            { type: "text", text: cleanText(order.price.total) },                // {{13}}
                            { type: "text", text: cleanText(order.price.total) }                 // {{14}}
                        ]
                    }
                ]
            }
        });

        const buildOwnerTextPayload = (to) => ({
            messaging_product: "whatsapp",
            to,
            type: "text",
            text: {
                body: `New Order Received
          Order ID: ${order.orderId}
          Name: ${order.customer.name}
          Phone: ${order.customer.phone}
          Amount: ₹${order.price.total}`
            }
        });



        const url = `https://graph.facebook.com/v19.0/${PHONE_ID}/messages`;
        const headers = {
            Authorization: `Bearer ${TOKEN}`,
            "Content-Type": "application/json"
        };

        // OWNER
        const resOwner = await fetch(url, { method: "POST", headers, body: JSON.stringify(buildOwnerTextPayload(ownerNumber)) });
        const ownerData = await resOwner.json();
        console.log("Owner WhatsApp Status:", resOwner.status);
        console.log("Owner WhatsApp Response:", ownerData);

        // CUSTOMER
        const resCustomer = await fetch(url, { method: "POST", headers, body: JSON.stringify(buildPayload(customerNumber)) });
        const customerData = await resCustomer.json();
        console.log("Customer WhatsApp Status:", resCustomer.status);
        console.log("Customer WhatsApp Response:", customerData);

        return { success: true };

    } catch (err) {
        console.error("WhatsApp Error:", err);
        return { success: false };
    }
}


// export async function sendWhatsApp(order) {
//     try {
//         const PHONE_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;
//         const TOKEN = process.env.WHATSAPP_ACCESS_TOKEN;

//         const orderDate = new Date().toLocaleDateString("en-IN");

//         const itemsText = order.items
//             .map(i => `• ${i.name} x ${i.qty}`)
//             .join("\n");

//         const ownerNumber = process.env.WHATSAPP_OWNER_NUMBER;
//         const customerNumber = `91${order.customer.phone}`;

//         const buildTextPayload = (to) => ({
//             messaging_product: "whatsapp",
//             to,
//             type: "text",
//             text: {
//                 body: `✅ *Order Confirmed New Order Notification*

// 🆔 Order ID: ${order.orderId}

// 👤 Name: ${order.customer.name}

// 📞 Phone: ${order.customer.phone}

// $Payment Type: ${order.customer.payment}

// 🚆 Train: ${order.customer.train}

// 🪑 Coach/Seat: ${order.customer.coach}/${order.customer.seat}

// 🎟️ PNR: ${order.customer.pnr}

// 📅 Arrival Date: ${orderDate}

// 🍱 *Menu Items*
// ${itemsText}

// 💰 Order Total: ₹${order.price.subtotal}

// 🏷️ Discount: ₹${order.price.discount}
// 🧾 GST (5%): ₹${order.price.gst}

// 💵 *Final Amount: ₹${order.price.total}*
// 💵 *Amount To Collect: ₹${order.price.total}*

// Customer Note: provide salt with food`
//             }
//         });

//         const url = `https://graph.facebook.com/v19.0/${PHONE_ID}/messages`;
//         const headers = {
//             Authorization: `Bearer ${TOKEN}`,
//             "Content-Type": "application/json",
//         };

//         // SEND TO OWNER
//         await fetch(url, {
//             method: "POST",
//             headers,
//             body: JSON.stringify(buildTextPayload(ownerNumber)),
//         });

//         // SEND TO CUSTOMER
//         await fetch(url, {
//             method: "POST",
//             headers,
//             body: JSON.stringify(buildTextPayload(customerNumber)),
//         });

//         return { success: true };

//     } catch (err) {
//         console.error("WhatsApp Error:", err);
//         return { success: false };
//     }
// }
