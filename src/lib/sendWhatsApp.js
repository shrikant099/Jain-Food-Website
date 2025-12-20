
export async function sendWhatsApp(order) {
    try {
        const MODE = process.env.WHATSAPP_MODE;
        const receiverNumber = MODE === "LIVE" ? process.env.WHATSAPP_CLIENT_NUMBER : process.env.WHATSAPP_TEST_NUMBER;

        const itemsText = order.items.map((i, idx) => `${idx + 1}. ${i.name} x ${i.qty} = ₹${i.total}`).join("\n");

        // Payload
        // const payload = {
        //     messaging_product: "whatsapp",
        //     to: receiverNumber, // 91xxxxxxxxxx
        //     type: "template",
        //     template: {
        //         name: "order_confirmation_v2",
        //         language: {
        //             code: "en_US"
        //         },
        //         components: [
        //             {
        //                 type: "body",
        //                 parameters: [
        //                     { type: "text", text: order.customer.name },
        //                     { type: "text", text: order.customer.phone },
        //                     { type: "text", text: order.orderId },
        //                     { type: "text", text: itemsText },
        //                     { type: "text", text: String(order.price.subtotal) },
        //                     { type: "text", text: String(order.price.discount) },
        //                     { type: "text", text: String(order.price.gst) },
        //                     { type: "text", text: String(order.price.total) },
        //                     { type: "text", text: order.customer.payment }
        //                 ]
        //             }
        //         ]
        //     }
        // };

        const payload = {
            messaging_product: "whatsapp",
            to: receiverNumber,
            type: "text",
            text: {
              body: `✅ New Order Received!
          
          Name: ${order.customer.name}
          Phone: ${order.customer.phone}
          Order ID: ${order.orderId}
          
          Items:
          ${itemsText}
          
          Subtotal: ₹${order.price.subtotal}
          Discount: ₹${order.price.discount}
          GST: ₹${order.price.gst}
          Total: ₹${order.price.total}
          
          Payment Mode: ${order.customer.payment}
          
          🙏 Thank you for choosing Agarwal Rabdiwala`
            }
          };

        // const payload = {
        //     messaging_product: "whatsapp",
        //     to: receiverNumber, // +91XXXXXXXXXX (tumhara verified number)
        //     type: "template",
        //     template: {
        //         name: "jasper_market_plain_text_v1",
        //         language: {
        //             code: "en_US",
        //         },
        //     },
        // };

        // Fetch
        const res = await fetch(
            `https://graph.facebook.com/v19.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            }
        );

        const data = await res.json();
        console.log("WhatsApp response:", data);

    } catch (error) {
        console.log(`Error sending whatsapp message: ${error}`);
        return;
    }
}