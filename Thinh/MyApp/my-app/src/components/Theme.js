import React from "react";
import PropTypes from "prop-types";
function Theme({ colorbg }) {
  return (
    <>
      <div style={{ width: 100, height: 100, color: { colorbg } }}>
        <div>đỏ</div>
        <div>đen</div>
        <div>vàng</div>
      </div>
    </>
  );
}

export default Theme;
Theme.Prototype = {
  colorbg: PropTypes.string,
};
