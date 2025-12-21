// export async function sendWhatsApp(order) {
//     try {
//         const PHONE_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;
//         const TOKEN = process.env.WHATSAPP_ACCESS_TOKEN;

//         const orderDate = new Date()
//             .toLocaleDateString("en-IN")
//             .split("/")
//             .join("-");

//         const itemsText = order.items
//             .map(i => `${i.name} x ${i.qty}`)
//             .join("\n");

//         const ownerNumber = process.env.WHATSAPP_OWNER_NUMBER;
//         const customerNumber = `91${order.customer.phone}`;

//         const buildPayload = (to) => ({
//             messaging_product: "whatsapp",
//             to,
//             type: "template",
//             template: {
//                 name: "order_confirmation_utility_v1",
//                 language: { code: "en_US" },
//                 components: [{
//                     type: "body",
//                     parameters: [
//                         { type: "text", text: order.orderId },             // {{1}}
//                         { type: "text", text: order.customer.name },       // {{2}}
//                         { type: "text", text: order.customer.phone },      // {{3}}
//                         { type: "text", text: order.customer.payment },    // {{4}}
//                         { type: "text", text: order.customer.train },      // {{5}}
//                         { type: "text", text: order.customer.pnr },        // {{6}}
//                         { type: "text", text: `${order.customer.coach}/${order.customer.seat}` }, // {{7}}
//                         { type: "text", text: orderDate },                 // {{8}}
//                         { type: "text", text: itemsText },                 // {{9}}
//                         { type: "text", text: order.price.subtotal },      // {{10}}
//                         { type: "text", text: order.price.discount },      // {{11}}
//                         { type: "text", text: order.price.gst },           // {{12}}
//                         { type: "text", text: order.price.total },         // {{13}}
//                         { type: "text", text: order.price.total }          // {{14}}
//                     ]
//                 }]
//             }
//         });

//         const url = `https://graph.facebook.com/v19.0/${PHONE_ID}/messages`;
//         const headers = {
//             Authorization: `Bearer ${TOKEN}`,
//             "Content-Type": "application/json"
//         };

//         // OWNER
//         await fetch(url, { method: "POST", headers, body: JSON.stringify(buildPayload(ownerNumber)) });

//         // CUSTOMER
//         await fetch(url, { method: "POST", headers, body: JSON.stringify(buildPayload(customerNumber)) });

//         return { success: true };

//     } catch (err) {
//         console.error("WhatsApp Error:", err);
//         return { success: false };
//     }
// }


export async function sendWhatsApp(order) {
    try {
        const PHONE_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;
        const TOKEN = process.env.WHATSAPP_ACCESS_TOKEN;

        const orderDate = new Date().toLocaleDateString("en-IN");

        const itemsText = order.items
            .map(i => `• ${i.name} x ${i.qty}`)
            .join("\n");

        const ownerNumber = process.env.WHATSAPP_OWNER_NUMBER;
        const customerNumber = `91${order.customer.phone}`;

        const buildTextPayload = (to) => ({
            messaging_product: "whatsapp",
            to,
            type: "text",
            text: {
                body: `✅ *Order Confirmed New Order Notification*

🆔 Order ID: ${order.orderId}

👤 Name: ${order.customer.name}

📞 Phone: ${order.customer.phone}

$Payment Type: ${order.customer.payment}

🚆 Train: ${order.customer.train}

🪑 Coach/Seat: ${order.customer.coach}/${order.customer.seat}

🎟️ PNR: ${order.customer.pnr}

📅 Arrival Date: ${orderDate}

🍱 *Menu Items*
${itemsText}

💰 Order Total: ₹${order.price.subtotal}

🏷️ Discount: ₹${order.price.discount}
🧾 GST (5%): ₹${order.price.gst}

💵 *Final Amount: ₹${order.price.total}*
💵 *Amount To Collect: ₹${order.price.total}*

Customer Note: provide salt with food`
            }
        });

        const url = `https://graph.facebook.com/v19.0/${PHONE_ID}/messages`;
        const headers = {
            Authorization: `Bearer ${TOKEN}`,
            "Content-Type": "application/json",
        };

        // SEND TO OWNER
        await fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify(buildTextPayload(ownerNumber)),
        });

        // SEND TO CUSTOMER
        await fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify(buildTextPayload(customerNumber)),
        });

        return { success: true };

    } catch (err) {
        console.error("WhatsApp Error:", err);
        return { success: false };
    }
}
