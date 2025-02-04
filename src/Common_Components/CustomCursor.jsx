import React, { useEffect, useRef } from "react";

const CustomCursor = ({
    // List of selectors that trigger the hover effect.
    targets = ["button", "span", "li", ".hoverTarget"],
    customClass = "custom-cursor",
    dimensions = 50,
    opacity = 0.5,
    strokeColor = "#8ED1FC",
    fill = "#0076CE",
    hoverScale = 1.5,
    // Adjust smoothness for trailing effect (0.1 is a good starting point)
    smoothness = {
        movement: 0.5,
    },
    targetOpacity = 0.2,
}) => {
    // Refs to track positions and hover state.
    const cursorRef = useRef(null);
    const mouseX = useRef(0);
    const mouseY = useRef(0);
    const currentX = useRef(0);
    const currentY = useRef(0);
    const isHovered = useRef(false);

    // Update mouse position on move.
    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.current = e.clientX;
            mouseY.current = e.clientY;
        };

        // When hovering over target elements, set the flag.
        const handleMouseEnter = () => {
            isHovered.current = true;
        };
        const handleMouseLeave = () => {
            isHovered.current = false;
        };

        document.addEventListener("mousemove", handleMouseMove);
        // Attach event listeners to all matching target elements.
        targets.forEach((selector) => {
            document.querySelectorAll(selector).forEach((el) => {
                el.addEventListener("mouseenter", handleMouseEnter);
                el.addEventListener("mouseleave", handleMouseLeave);
            });
        });

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            targets.forEach((selector) => {
                document.querySelectorAll(selector).forEach((el) => {
                    el.removeEventListener("mouseenter", handleMouseEnter);
                    el.removeEventListener("mouseleave", handleMouseLeave);
                });
            });
        };
    }, [targets]);

    // Animate the cursor position and style.
    useEffect(() => {
        const animate = () => {
            // Smoothly transition to the mouse position.
            currentX.current +=
                (mouseX.current - currentX.current) * smoothness.movement;
            currentY.current +=
                (mouseY.current - currentY.current) * smoothness.movement;

            if (cursorRef.current) {
                // Determine if we are hovering over a target element.
                const scale = isHovered.current ? hoverScale : 1;
                const currentOpacity = isHovered.current
                    ? targetOpacity
                    : opacity;
                // Position the center of the cursor on the mouse pointer.
                cursorRef.current.style.transform = `translate3d(${
                    currentX.current - dimensions / 2
                }px, ${
                    currentY.current - dimensions / 2
                }px, 0) scale(${scale})`;
                cursorRef.current.style.opacity = currentOpacity;
            }
            requestAnimationFrame(animate);
        };
        animate();
    }, [dimensions, hoverScale, opacity, targetOpacity, smoothness.movement]);

    return (
        <div
            ref={cursorRef}
            className={customClass}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: dimensions,
                height: dimensions,
                backgroundColor: fill,
                border: `2px solid ${strokeColor}`,
                borderRadius: "50%",
                pointerEvents: "none", // Ensures the cursor doesn't block clicks.
                zIndex: 9999,
            }}
        />
    );
};

export default CustomCursor;
