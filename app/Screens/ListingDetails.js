import { FlatList, Image, StyleSheet, View, Modal } from "react-native";
import React, { useEffect, useState } from "react";
import AppText, { MeidumText } from "../Components/AppText";
import Colors from "../Config/Colors";
import AppBtn, { OutlineBtn } from "../Components/AppBtn";
import { SimpleLineIcons, Feather } from "@expo/vector-icons";
import { ProductItems } from "../Components/OpenItems";
import AppInput from "../Components/AppInput";
import axios from "axios";
import ActivityIndicator from "../Components/ActivityIndicator";

export default function ListingDetails({ route }) {
  const { id } = route.params;
  const [visible, setVisible] = useState(false);
  const [visibleTwo, setVisibleTwo] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentProduct, setCurrentProduct] = useState(null);
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
  const qualities = [
    {
      id: 1,
      quality: "BRAND",
      name: "Apple",
    },
    {
      id: 2,
      quality: "BRAND",
      name: "iPhone 11",
    },
    {
      id: 3,
      quality: "INTERNAL STORAGE",
      name: "64GB",
    },
    {
      id: 4,
      quality: "MAIN CAMERA",
      name: "Dual 12MP / 12MP",
    },
    {
      id: 5,
      quality: "SELFIE CAMERA",
      name: "7 MP (f/2.2)",
    },
    {
      id: 6,
      quality: "COLOR",
      name: "Green",
    },
  ];

  const apiEndpoint = "https://afromarket-be-ekn6j.ondigitalocean.app";
  useEffect(() => {
    setLoading(true);
    const getCurrentProduct = async () => {
      setLoading(true);
      const { data } = await axios.get(
        `${apiEndpoint}/afro-market/v1/product/get-one/${id}`
      );
      console.log(data.data, "current Product");
      setCurrentProduct(data.data);
      setLoading(false);
    };
    getCurrentProduct();
  }, []);
  if (loading) {
    return <ActivityIndicator visible={loading} />;
  }
  return (
    <>
      <View style={styles.prodDetails}>
        <FlatList
          ListHeaderComponent={
            <>
              <View>
                <View style={styles.imageNo}>
                  <AppText
                    text={currentProduct.images.length}
                    style={{ textAlign: "center" }}
                  />
                </View>
                <Image
                  source={{ uri: currentProduct.images[0] }}
                  style={styles.img}
                  resizeMode="contain"
                />
              </View>

              <View style={styles.txtCont}>
                <MeidumText
                  text={currentProduct.name}
                  style={{ fontSize: 23, textTransform: "capitalize" }}
                />
                <MeidumText
                  text={`₦${currentProduct.price
                    .toFixed(2)
                    .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`}
                  style={{
                    marginTop: 10,
                    color: Colors.primary,
                    fontSize: 23,
                  }}
                />
                <View style={styles.btnCont}>
                  <OutlineBtn
                    handlePress={() => setVisibleTwo(true)}
                    title="Make offer"
                    color={Colors.white}
                    style={{ backgroundColor: Colors.primary, width: "47%" }}
                    iconFam="chatbox-ellipses-outline"
                    iconColor={Colors.white}
                  />
                  <OutlineBtn
                    title="Contact merchant"
                    color={Colors.primary}
                    style={{ width: "49%" }}
                    iconName="phone"
                    iconColor={Colors.primary}
                  />
                </View>
              </View>
              <View style={styles.smallTxtCont}>
                <AppText
                  style={{ color: Colors.dark_light }}
                  text={currentProduct.description}
                />
              </View>
            </>
          }
          ListFooterComponent={
            <>
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
            </>
          }
          numColumns={2}
          data={qualities}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ index, item }) => (
            <View style={[{ width: "50%", paddingHorizontal: 20 }]}>
              <View style={{ paddingVertical: 10 }}>
                <MeidumText text={item.name} style={{ fontSize: 16 }} />
                <AppText text={item.quality} style={{ fontSize: 12 }} />
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.footer}>
        <OutlineBtn
          title="Add to cart"
          color={Colors.white}
          style={{ backgroundColor: Colors.primary, width: "47%" }}
          feather="shopping-cart"
          iconColor={Colors.white}
        />
        <OutlineBtn
          handlePress={() => setVisible(true)}
          title="Add to inventory"
          color={Colors.white}
          style={{ backgroundColor: Colors.primary, width: "49%" }}
          feather="shopping-bag"
          iconColor={Colors.white}
        />
      </View>
      <Modal visible={visible} transparent>
        <View style={styles.modal}>
          <View style={styles.top2}>
            <View>
              <Feather
                name="x-circle"
                size={20}
                onPress={() => setVisible((prevState) => !prevState)}
              />
            </View>
            <AppText
              text="Add to Inventory"
              style={{ fontWeight: "700", textAlign: "center" }}
            />
            <View />
          </View>
          <ProductItems
            title="iPhone 11 Green 64GB"
            subTitle="450,000"
            img
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          />
          <AppText
            text="How much are you willing to sell this product?"
            style={{ fontWeight: "700" }}
          />
          <AppInput placeholder="450,000" />
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              bottom: 5,
              width: "100%",
            }}
          >
            <OutlineBtn
              handlePress={() => {
                setVisible(false);
              }}
              title="Negotiate Cost Price"
              color={Colors.primary}
              style={{ borderColor: Colors.primary }}
            />
            <AppBtn
              handlePress={() => setVisible(false)}
              title="Add to Inventory"
              color={Colors.primary}
              style={{ marginTop: 20 }}
            />
          </View>
        </View>
      </Modal>
      <Modal visible={visibleTwo} transparent>
        <View style={styles.modal}>
          <View style={styles.top2}>
            <View>
              <Feather
                name="x-circle"
                size={20}
                onPress={() => setVisibleTwo((prevState) => !prevState)}
              />
            </View>
            <AppText
              text="Make Offer"
              style={{ fontWeight: "700", textAlign: "center" }}
            />

            <View />
          </View>
          <ProductItems
            title="iPhone 11 Green 64GB"
            subTitle="450,000"
            img
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          />
          <AppText
            text="How much are you willing to pay?"
            style={{ fontWeight: "700" }}
          />
          <AppInput placeholder="450,000" />
          <View
            style={{
              bottom: -20,
              width: "100%",
            }}
          >
            <AppBtn
              handlePress={() => setVisibleTwo(false)}
              title="Send Bid"
              color={Colors.primary}
              style={{ marginTop: 20 }}
            />
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  txtCont: {
    padding: 10,
    backgroundColor: Colors.white,
  },
  smallTxtCont: {
    padding: 15,
    backgroundColor: Colors.white,
    marginTop: 20,
  },
  img: {
    width: "100%",
    height: 267,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  btnCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingBottom: 10,
  },
  prodDetails: {
    backgroundColor: Colors.medium,
    flex: 1,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  rating: {
    padding: 20,
    backgroundColor: Colors.white,
    marginTop: 20,
  },
  ratingTxt: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  top2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  modal: {
    elevation: 40,
    width: "100%",
    height: "80%",
    backgroundColor: Colors.white,
    bottom: 0,
    position: "absolute",
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  imageNo: {
    width: 50,
    height: 25,
    borderRadius: 5,
    position: "absolute",
    bottom: 10,
    zIndex: 20,
    left: 10,
    backgroundColor: Colors.white,
  },
});
