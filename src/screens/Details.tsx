import React from "react";

import { NavProps } from "../utils/types";

type Props = NavProps;

const Details: React.FC<Props> = ({ navigation }) => {
  const ID = navigation.state.params?.itemId as string | undefined;

  console.log(navigation);
  return <div>Details - {ID}</div>;
};

export default Details;
