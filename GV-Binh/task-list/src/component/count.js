import React, { useState, useEffect } from "react";
import { Button } from "antd";

export const CountNumber = () => {
  const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = count;
    }, [count])

  return (
    <div>
      <p>{count}</p>
      <Button type="primary" onClick={() => {setCount(count+1)}}>
        Cộng
      </Button>
    </div>
  );
};
