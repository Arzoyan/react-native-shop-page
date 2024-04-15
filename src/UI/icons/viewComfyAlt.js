import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default ({color}) => (
  <View>
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M0 8V0H8V8H0ZM2 6H6V2H2V6ZM0 20V12H8V20H0ZM2 18H6V14H2V18ZM12 8V0H20V8H12ZM14 6H18V2H14V6ZM12 20V12H20V20H12ZM14 18H18V14H14V18Z"
        fill={color}
      />
    </Svg>
  </View>
);