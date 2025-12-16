"use client";

import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import OrderStatusCard from "./components/OrderStatusCard";
import MenuHeader from "@/components/MenuHeader";
import ThankYouHeader from "./components/ThankYouHeader";

export default function ThankYouPage() {
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const storedOrder = sessionStorage.getItem("orderData");
        if (storedOrder) {
            setOrder(JSON.parse(storedOrder));
        }
    }, []);

    if (!order) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                Loading order details...
            </div>
        );
    }

    return (
        <>
            <ThankYouHeader />
            <section className="min-h-screen bg-[#fffaf3] px-4 py-12">

                <div className="max-w-3xl mx-auto space-y-6">


                    {/* SUCCESS */}
                    <div className="bg-white rounded-2xl shadow p-6 text-center">
                        <CheckCircle className="mx-auto text-green-600 w-14 h-14" />
                        <h1 className="text-2xl font-bold mt-3">
                            Thank you for your order!
                        </h1>
                        <p className="text-gray-600">
                            Your meal will be delivered soon.
                        </p>
                    </div>

                    {/* ORDER META */}
                    <div className="bg-white rounded-2xl shadow p-6 grid grid-cols-3 gap-4 text-sm">
                        <div>
                            <p className="text-gray-500">Order ID</p>
                            <p className="font-semibold">{order.orderId}</p>
                        </div>
                        <div>
                            <p className="text-gray-500">Order Date</p>
                            <p className="font-semibold">{order.orderDate}</p>
                        </div>
                        <div>
                            <p className="text-gray-500">Order Status</p>
                            <p className="font-semibold text-green-600">Placed</p>
                        </div>
                    </div>

                    <OrderStatusCard />
                    {/* ITEMS */}
                    <div className="bg-white rounded-2xl shadow p-6">
                        <h2 className="font-bold mb-4">Order Items</h2>

                        {order.items.map((item, i) => (
                            <div key={i} className="flex justify-between border-b py-2">
                                <span>{item.name} × {item.qty}</span>
                                <span>₹{item.total}</span>
                            </div>
                        ))}

                        <div className="pt-4 space-y-1 text-sm">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>₹{order.price.subtotal}</span>
                            </div>
                            <div className="flex justify-between text-green-600">
                                <span>Discount</span>
                                <span>- ₹{order.price.discount}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>GST (5%)</span>
                                <span>₹{order.price.gst}</span>
                            </div>
                            <div className="flex justify-between font-bold text-orange-600 text-lg">
                                <span>Total</span>
                                <span>₹{order.price.total}</span>
                            </div>
                        </div>
                        <hr className="mt-4" />
                        <h2 className="font-extrabold mt-2">Seat Details</h2>
                        <div className="mt-3">
                            <p className="p-1 text-gray-500">Train Number:&nbsp;{order.customer.train}</p>
                            <p className="p-1 text-gray-500">Coach Number:&nbsp;{order.customer.coach}</p>
                            <p className="p-1 text-gray-500">Seat Number:&nbsp;{order.customer.seat}</p>
                        </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="flex gap-4">
                        <a href="/" className="w-full bg-orange-600 text-white py-3 rounded-xl text-center">
                            Back to Home
                        </a>
                        <a href="/services/train-delivery" className="w-full border border-orange-600 text-orange-600 py-3 rounded-xl text-center">
                            Order Again
                        </a>
                    </div>

                </div>
            </section>
        </>
    );
}
