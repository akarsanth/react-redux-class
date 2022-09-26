import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./OrdersList.module.css";
import Order from "./Order";
import { listOrders } from "../../actions/orderActions";

class OrderList extends Component {
  componentDidMount() {
    this.props.listOrders();
  }

  render() {
    const { isLoading, orders, error } = this.props;

    let content;
    if (isLoading) {
      content = <p>Loading...</p>;
    }
    if (error) {
      content = <p>{error}</p>;
    }
    if (!isLoading && !error) {
      content = (
        <div className={classes["orders-table"]}>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Total</th>
                <th>Is Paid?</th>
                <th>Is Delivered?</th>
                <th>Status</th>
                <th>Payment Method</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => {
                return <Order order={{ ...order }} />;
              })}
            </tbody>
          </table>
        </div>
      );
    }

    return (
      <div className={classes.box}>
        <h1>Orders List</h1>
        {content}
      </div>
    );
  }
}

// Mapping state to props
function mapStateToProps(state) {
  const { isLoading, orders, error } = state.orderList;

  return {
    orders,
    isLoading,
    error,
  };
}

// here mapToStateToProps has been passed as first argument
// and as the second argument, a object with actions creators
export default connect(mapStateToProps, { listOrders })(OrderList);
