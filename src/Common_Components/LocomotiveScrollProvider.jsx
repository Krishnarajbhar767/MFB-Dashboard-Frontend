// LocomotiveScrollProvider.js
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss"; // Make sure your build supports SCSS

const LocomotiveScrollProvider = ({ children }) => {
    const scrollRef = useRef(null);
    const locoScrollRef = useRef(null);
    const location = useLocation();

    // Initialize Locomotive Scroll when the component mounts
    useEffect(() => {
        if (scrollRef.current) {
            locoScrollRef.current = new LocomotiveScroll({
                el: scrollRef.current,
                smooth: true,
                // You can add more options here if needed
            });
        }
        // Clean up when component unmounts
        return () => {
            if (locoScrollRef.current) {
                locoScrollRef.current.destroy();
            }
        };
    }, []);

    // Reinitialize Locomotive Scroll on route change
    useEffect(() => {
        if (locoScrollRef.current) {
            // Option 1: Update the scroll instance if your content changes dynamically
            // locoScrollRef.current.update();

            // Option 2: Destroy and reinitialize for a fresh start (often more reliable)
            locoScrollRef.current.destroy();
            locoScrollRef.current = new LocomotiveScroll({
                el: scrollRef.current,
                smooth: true,
            });
        }
        // If you have animations or content that loads asynchronously,
        // you might want to add a slight delay before reinitializing.
    }, [location.pathname]);
    useEffect(() => {
        setTimeout(() => {
            if (locoScrollRef.current) {
                locoScrollRef.current.destroy();
                locoScrollRef.current = new LocomotiveScroll({
                    el: scrollRef.current,
                    smooth: true,
                });
            }
        }, 300); // 300ms delay
    }, [location.pathname]);
    return (
        <div ref={scrollRef} data-scroll-container>
            {children}
        </div>
    );
};

export default LocomotiveScrollProvider;
