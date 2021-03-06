import React, { useState, useEffect } from "react";
import "../assets/css/orders.css";
import { db } from "../firebase";
import { useStateValue } from "../context";
import Order from "./Order";

export default function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="oreders__order">
        {orders?.map((order, index) => (
          <div key={index}>
            <Order key={index} order={order} />
          </div>
        ))}
      </div>
    </div>
  );
}
