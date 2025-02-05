import React, { useEffect, useState } from "react";

function Counter({ count, prefix, isVisible }) {
    const [count, setCount] = useState(count);
    useEffect(() => {
        const interverlId = setInterval(() => {}, 1000);
    }, [isVisible]);
    return <div>{<span>{count}</span>}</div>;
}

export default Counter;
