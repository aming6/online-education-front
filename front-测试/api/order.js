import request from '@/utils/request'
export default {
    //gener order 
    generOrder(courseId) {
        return request({
            url: `/eduorder/order/createOrder/${courseId}`,
            method: 'post'
        })
    },
    //query order by orderId
    queryOrderInfo(orderId) {
        return request({
            url: `/eduorder/order/getOrderInfo/${orderId}`,
            method: 'post'
        })
    },
    //生成二维码的方法
    createNative(orderNo) {
        return request({
            url: `/eduorder/pay-log/createNative/${orderNo}`,
            method: 'get'
        })
    },
    //查询支付状态
    getPayStatus(orderNo) {
        return request({
            url: `/eduorder/pay-log/getPayStatus/${orderNo}`,
            method: 'get'
        })
    }

}