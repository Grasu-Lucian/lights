import React from "react";
import { useState } from "react";
import { useEffect } from "react";
export default function Decorations(props) {
  const [color, SetColor] = useState({
    boxShadow: " 0px 0px 60px 55px transparent",
  });
  useEffect(() => {
    if (props.val === true) {
      if (props.digit % 4 === 1) {
        SetColor({
          transition: " ease 1s",
          boxShadow: " 0px 0px 60px 55px green",
        });
      }
      if (props.digit % 4 === 2) {
        SetColor({
          transition: " ease 1s",
          boxShadow: " 0px 0px 60px 55px blue",
        });
      }
      if (props.digit % 4 === 3) {
        SetColor({
          transition: " ease 1s",
          boxShadow: " 0px 0px 60px 55px yellow",
        });
      }
      if (props.digit % 4 === 0) {
        SetColor({
          transition: " ease 1s",
          boxShadow: " 0px 0px 60px 55px red",
        });
      }
    } else {
      SetColor({
        transition: " ease 1s",
        boxShadow: " 0px 0px 60px 55px transparent",
      });
    }
  }, [props.val]);
  return (
    <div className="total">
      <div className="string"></div>
      <div className="light">
        <div className="connecter"></div>
        <div className="connecter1"></div>

        <div className="light-bulb">
          <div className="top" style={color}>
            {" "}
          </div>
        </div>
      </div>
    </div>
  );
}
