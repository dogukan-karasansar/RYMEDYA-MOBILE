import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {getOrder} from '../../services/orders/order';
import Header from '../../components/Header';
import BottomOrderControle from '../../components/BottomOrderControle';
import DownloadDesign from '../../components/DownloadDesign';
import {AcceptedOrderPage} from '../../components/AcceptedOrderPage';

function OrderDetail({navigation, route}) {
  const id = route.params.itemId;
  const [order, setOrder] = useState({});
  useEffect(() => {
    getOrder(id, setOrder);
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Header />
        <DownloadDesign image={order.images} />

        {order.status === 'pending' ? null : order.status === 'accepted' ? (
          <AcceptedOrderPage />
        ) : null}
        <View style={{position: 'absolute', bottom: 0}}>
          <BottomOrderControle order={order} setOrder={setOrder} setOrders={route.params.setOrders}/>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
  },
});

export default OrderDetail;
