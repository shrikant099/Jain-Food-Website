import twilio from "twilio";

const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

// Send Sms Funciton 
export async function sendOrderSms({ orderId, amount, phone }) {
    const message = `✅ Order Confirmed!\
    Order ID: ${orderId}
    Amount Paid: ₹${amount}
    
    Thank you for your order 🙏`;

    return await client.messages.create({
        body: message,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: `+91${phone}`
    })
};
