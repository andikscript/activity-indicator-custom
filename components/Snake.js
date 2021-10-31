import React, { createContext, useEffect, useState } from "react";
import { View } from "react-native";
import { ViewFlex } from "./snake/View";

const list = [
  {
    one: 850,
    two: 950,
    flex: "row",
  },
  {
    one: 1150,
    two: 1250,
    flex: "row-reverse",
  },
  {
    one: 1450,
    two: 1550,
    flex: "row",
  },
];

export const contextCondition = createContext(null);

export const Snake = ({colorFirst, colorSecond, transisition}) => {
  const [condition, setCondition] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCondition(!condition);
    }, 1550);
  }, [condition]);

  return (
    <View
      style={{
        flex: 1,
        marginTop: 30,
      }}>
      <contextCondition.Provider value={condition}>
        <Load
          color={condition ? colorFirst : colorSecond}
          size={20}
          transisition={transisition}
        />
      </contextCondition.Provider>
    </View>
  );
};

export const Load = ({ color, size, transisition }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View>
        {list.map((l, item) => (
          <ViewFlex
            one={l.one}
            two={l.two}
            size={size}
            flex={l.flex}
            color={color}
            transisition={transisition}
          />
        ))}
      </View>
    </View>
  );
};

