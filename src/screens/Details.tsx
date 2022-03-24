import React from "react";
import { NavProps } from "../utils/types";

type Props = NavProps;

const Details: React.FC<Props> = ({ navigation }) => {
  console.log(navigation);
  return <div>Details</div>;
};

export default Details;
