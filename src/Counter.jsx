import React from "react";
export default function Counter(props) {
  return (
    <div
      onClick={() => {props.counterPlusOne(props.num)}}>
      Counter {props.num}
    </div>
  );
}
