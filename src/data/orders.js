const orders = [
  {
    order_id: 62,
    total_amount: 200,
    is_paid: 0,
    paid_at: null,
    is_delivered: 0,
    delivered_at: null,
    payment_method: "COD",
    status: "Order Completed",
    createdAt: "2022-08-05T08:29:10.000Z",
    updatedAt: "2022-08-05T08:29:31.000Z",
    products: [
      {
        id: 2,
        title: "White and Gray Bluetooth Speaker on Brown Wooden Surface",
        price: 200,
        order_line: {
          orderline_id: 65,
          quantity: 1,
        },
      },
    ],
  },

  {
    order_id: 61,
    total_amount: 400.99,
    is_paid: 0,
    paid_at: null,
    is_delivered: 0,
    delivered_at: null,
    payment_method: "COD",
    status: "Order Completed",
    createdAt: "2022-07-28T15:21:03.000Z",
    updatedAt: "2022-07-28T15:21:08.000Z",
    products: [
      {
        id: 1,
        title: "Black Fujifilm Dslr Camera",
        price: 400.99,
        order_line: {
          orderline_id: 64,
          quantity: 1,
        },
      },
    ],
  },
  {
    order_id: 60,
    total_amount: 3998,
    is_paid: 0,
    paid_at: null,
    is_delivered: 0,
    delivered_at: null,
    payment_method: "COD",
    status: "Order Completed",
    createdAt: "2022-06-13T06:49:09.000Z",
    updatedAt: "2022-06-13T06:49:13.000Z",
    products: [
      {
        id: 3,
        title: "Round Michael Kors Chronograph Watch",
        price: 1999.99,
        order_line: {
          orderline_id: 63,
          quantity: 2,
        },
      },
    ],
  },
  {
    order_id: 59,
    total_amount: 10.09,
    is_paid: 1,
    paid_at: "2022-05-26T01:49:40.000Z",
    is_delivered: 1,
    delivered_at: "2022-05-26T01:54:41.000Z",
    payment_method: "Khalti",
    status: "Delivered",
    createdAt: "2022-05-26T01:47:42.000Z",
    updatedAt: "2022-05-26T01:54:41.000Z",
    products: [
      {
        id: 5,
        title: "Person Holding White Plastic Bottle",

        price: 10.09,
        order_line: {
          orderline_id: 62,
          quantity: 1,
        },
      },
    ],
  },

  {
    order_id: 53,
    total_amount: 1.99,
    is_paid: 1,
    paid_at: "2022-04-24T16:05:19.000Z",
    is_delivered: 0,
    delivered_at: null,
    payment_method: "Khalti",
    status: "Cancelled",
    createdAt: "2022-04-24T16:04:40.000Z",
    updatedAt: "2022-04-26T02:35:22.000Z",
    products: [
      {
        id: 8,
        title: "Coca Cola Can on Black Surface",
        price: 1.99,
        order_line: {
          orderline_id: 56,
          quantity: 1,
        },
      },
    ],
  },
  {
    order_id: 52,
    total_amount: 5.99,
    is_paid: 1,
    paid_at: "2022-04-24T16:01:27.000Z",
    is_delivered: 0,
    delivered_at: null,
    payment_method: "Khalti",
    status: "Order Completed",
    createdAt: "2022-04-24T16:00:51.000Z",
    updatedAt: "2022-04-24T16:01:27.000Z",
    products: [
      {
        id: 10,
        title: "Orange and CBD Product Beside Plant",
        price: 5.99,
        order_line: {
          orderline_id: 55,
          quantity: 1,
        },
      },
    ],
  },

  {
    order_id: 50,
    total_amount: 1700.98,
    is_paid: 0,
    paid_at: null,
    is_delivered: 0,
    delivered_at: null,
    payment_method: "COD",
    status: "Order Completed",
    createdAt: "2022-04-24T15:22:19.000Z",
    updatedAt: "2022-04-24T15:39:03.000Z",
    products: [
      {
        id: 11,
        title: "Black Blackbery Qwerty Phone",
        price: 850.49,
        order_line: {
          orderline_id: 53,
          quantity: 2,
        },
      },
    ],
  },

  {
    order_id: 48,
    total_amount: 382.45,
    is_paid: 0,
    paid_at: null,
    is_delivered: 0,
    delivered_at: null,
    payment_method: "COD",
    status: "Order Completed",
    createdAt: "2022-04-20T07:17:26.000Z",
    updatedAt: "2022-04-20T07:17:39.000Z",
    products: [
      {
        id: 7,
        title: "Woman's Hand Holding A Pine Forest Bottle",
        price: 76.49,
        order_line: {
          orderline_id: 50,
          quantity: 5,
        },
      },
    ],
  },

  {
    order_id: 45,
    total_amount: 2252.97,
    is_paid: 0,
    paid_at: null,
    is_delivered: 0,
    delivered_at: null,
    payment_method: null,
    status: "Cancelled",
    createdAt: "2022-04-13T12:24:55.000Z",
    updatedAt: "2022-04-13T15:24:06.000Z",
    products: [
      {
        id: 6,
        title: "Black and Silver Nikon Camera",
        price: 750.99,
        order_line: {
          orderline_id: 46,
          quantity: 3,
        },
      },
    ],
  },
  {
    order_id: 44,
    total_amount: 100.98,
    is_paid: 1,
    paid_at: "2022-04-24T03:29:41.000Z",
    is_delivered: 1,
    delivered_at: "2022-04-24T03:29:41.000Z",
    payment_method: "COD",
    status: "Delivered",
    createdAt: "2022-04-13T12:22:57.000Z",
    updatedAt: "2022-04-24T03:29:41.000Z",
    products: [
      {
        id: 4,
        title: "Clear Glass Perfume Bottle on Green Leaves and White Flower",
        price: 50.49,
        order_line: {
          orderline_id: 45,
          quantity: 2,
        },
      },
    ],
  },
  {
    order_id: 41,
    total_amount: 4801.96,
    is_paid: 0,
    paid_at: null,
    is_delivered: 0,
    delivered_at: null,
    payment_method: "COD",
    status: "Cancelled",
    createdAt: "2022-04-05T13:57:14.000Z",
    updatedAt: "2022-04-05T13:59:31.000Z",
    products: [
      {
        id: 2,
        title: "White and Gray Bluetooth Speaker on Brown Wooden Surface",
        price: 400.99,
        order_line: {
          orderline_id: 41,
          quantity: 2,
        },
      },
      {
        id: 3,
        title: "Round Michael Kors Chronograph Watch",
        price: 1999.99,
        order_line: {
          orderline_id: 42,
          quantity: 2,
        },
      },
    ],
  },
];

export default orders;
