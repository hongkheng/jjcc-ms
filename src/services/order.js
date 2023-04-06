
function muleSoftOrderApi(orderRequest) {
  return new Promise((resolve) => {
    return resolve({
      orders: [{
        id: orderRequest?.orderId || 'defaultId',
        name: 'some product name'
      }]
    })
  })
}

async function getOrders(req, res, next) {
  try {
    const { orderId } = req.query
    const response = await muleSoftOrderApi({ orderId })

    return res.status(200).json({
      success: true,
      orders: response.orders
    })
  } catch(error) {
    return res.status(500).json({
      success: false,
      error
    })
  }

}

module.exports = getOrders
