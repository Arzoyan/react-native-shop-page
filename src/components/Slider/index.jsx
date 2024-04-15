import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
const { width } = Dimensions.get("window");

const Slideshow = ({ images, containerStyles }) => {
  return (
    <SliderBox
      images={images}
      ImageComponentStyle={
        containerStyles
          ? { ...containerStyles, width: width - 32 }
          : styles.container
      }
      autoplay
      circleLoop
      dotColor={"#000"}
      inactiveDotColor={"#fff"}
      dotStyle={styles.dots}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    width: width - 32,
    height: width - 32,
    resizeMode: "cover",
  },
  dots: {
    width: 8,
    height: 8,
    borderRadius: 5,
    padding: 0,
    margin: 0,
  },
});

export default Slideshow;
