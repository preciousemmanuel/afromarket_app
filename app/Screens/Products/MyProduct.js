import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ProductItems } from "../../Components/OpenItems";
import Colors from "../../Config/Colors";
import axios from "axios";
const url = "https://afromarket-be-ekn6j.ondigitalocean.app/";

export default function MyProduct() {
  const [myProducts, setMyProducts] = useState(null);
  useEffect(() => {
    const HandleFetch = async () => {
      const { data } = await axios.get(
        `${url}afro-market/v1/product/get-all?limit=10&page=1`
      );
      setMyProducts(data.data.products.data.rows);
      console.log(data.data.products.data.rows);
    };
    HandleFetch();
    console.log(myProducts);
  }, []);

  return (
    <>
      <View style={styles.main}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={myProducts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ProductItems
              title={item.name}
              subTitle={item.price}
              label={item.category}
              imgSrc={item.images[0]}
              img
            />
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 10,
    // paddingTop: 10,
    flex: 1,
    backgroundColor: Colors.light,
  },
});
