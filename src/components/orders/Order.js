import React, { Component } from "react";

import classes from "./Order.module.css";

class Order extends Component {
  render() {
    const order = this.props.order;
    const {
      order_id,
      total_amount,
      createdAt,
      is_paid,
      is_delivered,
      status,
      payment_method,
    } = order;

    return (
      <tr>
        <td>{order_id}</td>
        <td>{createdAt.substring(0, 10)}</td>
        <td>{`$${total_amount}`}</td>
        <td>{is_paid === 0 ? "No" : "Yes"}</td>
        <td>{is_delivered === 0 ? "No" : "Yes"}</td>
        <td>{status}</td>
        <td>{payment_method}</td>
      </tr>
    );
  }
}

export default Order;
