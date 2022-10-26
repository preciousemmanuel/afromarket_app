import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import ProductCard from "../Components/ProductCard";
import Colors from "../Config/Colors";
import { OutlineBtn } from "../Components/AppBtn";
import AppText, { BoldText, MeidumText } from "../Components/AppText";
import Card from "../Components/Card";
export default function MarketDetails({ navigation }) {
  const topProducts = [
    {
      id: 1,
      title: "Apple iphone 11",
      img: require("../assets/image5.jpg"),
      price: 45000,
    },
    {
      id: 5,
      title: "Apple iphone 11",
      img: require("../assets/image5.jpg"),
      price: 45000,
    },
    {
      id: 3,
      title: "Apple iphone 11",
      img: require("../assets/image5.jpg"),
      price: 45000,
    },
    {
      id: 4,
      title: "Apple iphone 11",
      img: require("../assets/image5.jpg"),
      price: 30000,
    },
  ];
  const ratingReviews = [
    {
      id: 1,
      rating: 4.2,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptates quisquam amet non veritatis inventore dolores assumenda repudiandae dicta voluptatem.",
      customer: "Jameson Iweala",
    },
    {
      id: 2,
      rating: 3.9,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptates quisquam amet non veritatis inventore dolores assumenda repudiandae dicta voluptatem.",
      customer: "Samson Iweala",
    },
    {
      id: 3,
      rating: 4.2,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptates quisquam amet non veritatis inventore dolores assumenda repudiandae dicta voluptatem dolores assumenda repudiandae dicta voluptatem dolores assumenda repudiandae dicta voluptatem.",
      customer: "John Iweala",
    },
  ];

  return (
    <>
      <ScrollView style={styles.list}>
        <Card
          img={require("../assets/afroimage5.png")}
          style={{
            backgroundColor: Colors.light,
            // width: "90%",
            padding: 10,
            justifyContent: "center",
            alignSelf: "center",
          }}
        />
        <View>
          <MeidumText
            style={{ fontSize: 20, paddingHorizontal: 20, paddingVertical: 5 }}
            text="Top Products"
          />
          <FlatList
            numColumns={2}
            data={topProducts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ProductCard
                handlePress={() => navigation.navigate("productDetails")}
                img={item.img}
                price={item.price}
                title={item.title}
              />
            )}
          />
        </View>
        <OutlineBtn
          style={{
            alignSelf: "center",
            width: "90%",
            padding: 10,
          }}
          title="View All Products"
          color={Colors.primary}
        />
        <View style={styles.rating}>
          <View style={styles.ratingTxt}>
            <MeidumText text="Ratings & Reviews" />
            <AppText text="View All" />
          </View>
          <FlatList
            data={ratingReviews}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={{ paddingVertical: 10 }}>
                <AppText text={item.review} />
                <MeidumText
                  text={item.customer}
                  style={{ fontSize: 16, paddingTop: 5 }}
                />
              </View>
            )}
          />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <OutlineBtn
          title="Contact Merchant"
          color={Colors.white}
          style={{ backgroundColor: Colors.primary, width: "49%" }}
          iconFam="chatbox-ellipses-outline"
          iconColor={Colors.white}
        />
        <OutlineBtn
          title="Add to Customers"
          color={Colors.white}
          style={{ backgroundColor: Colors.primary, width: "49%" }}
          icon="staro"
          iconColor={Colors.white}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  list: {
    width: "100%",
    flex: 1,
    backgroundColor: Colors.light,
  },
  rating: {
    padding: 20,
  },
  ratingTxt: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});
