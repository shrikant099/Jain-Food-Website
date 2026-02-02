export async function sendCustomerWhatsApp(order) {
    try {
        const payload = {
            customer_name: order.customer.name,
            phone: `91${order.customer.phone}`,
            order_id: order.orderId,
            train: order.customer.train,
            pnr: order.customer.pnr,
            coach: order.customer.coach,
            seat: order.customer.seat,

            items: order.items.map((i) => ({
                name: i.name,
                qty: i.qty,
                price: i.price,
            })),
            subtotal: order.price.subtotal,
            discount: order.price.discount,
            gst: order.price.gst,
            total_amount: order.price.total,
            payment_method: order.customer.payment,
            order_date: order.orderDate,
            message: `Hi ${order.customer.name}, your Jain food order (${order.orderId}) has been confirmed. Total ₹${order.price.total}. Thank you!`,
        };

        const res = await fetch(
            "https://app.zoepact.in/webhook/whatsapp-workflow/244812.321784.309555.1770013258",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            }
        );

        //  JSON assume mat karo
        const text = await res.text();

        return {
            status: res.status,
            ok: res.ok,
            response: text || "Zoepact Customer webhook hit successfully",
        };
    } catch (error) {
        return { error: error.message };
    }
};