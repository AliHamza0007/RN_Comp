import { View, Text, Image } from 'react-native'
import React from 'react'
import amazonPay from '../assets/amazon-pay.png'
import sendMoney from '../assets/send-money.jpg'
import payBill from '../assets/pay-bills.jpeg'
import scanQR from '../assets/scan-qr.jpeg'
const Services = () => {
  return (
    <View>
    

<View>

<View className="flex items-center justify-center">

  <Image src={amazonPay} className="w-22 h-20" />
  <Text className="text-center text-md">Amazon Pay</Text>
</View>

</View>

    </View>
  )
}

export default Services