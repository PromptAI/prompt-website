import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "twin.macro";

const ParallaxLayers = ({ layers }) => {
    const containerRef = useRef(null);
    const layersRef = useRef([]);

    useEffect(() => {
        const container = containerRef.current;
        const layerElements = layersRef.current;

        // 初始化每个图层的位置，移除了 scale 相关设置
        layerElements.forEach((layer, index) => {
            gsap.set(layer, {
                z: index * 20, // 减小 Z 轴距离，从 50 改为 20
                transformPerspective: 2000, // 增加透视距离，减小透视效果
            });
        });

        let mouseX = 0;
        let mouseY = 0;
        let currentX = 0;
        let currentY = 0;

        const handleMouseMove = (e) => {
            const rect = container.getBoundingClientRect();
            mouseX = e.clientX - rect.left - rect.width / 2;
            mouseY = e.clientY - rect.top - rect.height / 2;
        };

        const animate = () => {
            currentX += (mouseX - currentX) * 0.1;
            currentY += (mouseY - currentY) * 0.1;

            layerElements.forEach((layer, index) => {
                const depth = (layers.length - index) * 0.1; // 减小深度系数，从 0.15 改为 0.1
                gsap.set(layer, {
                    x: currentX * depth * 0.02,
                    y: currentY * depth * 0.02,
                    rotationY: currentX * depth * 0.01,
                    rotationX: -currentY * depth * 0.01,
                });
            });

            requestAnimationFrame(animate);
        };

        container.addEventListener("mousemove", handleMouseMove);
        animate();

        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
        };
    }, [layers]);

    return (
        <div 
            ref={containerRef}
            tw="relative flex items-center justify-center overflow-visible"
            style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
                height: "100%",
                width: "100%",
                filter: 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.15))'
            }}
        >
            {layers.map((layer, index) => (
                <img
                    key={index}
                    ref={(el) => (layersRef.current[index] = el)}
                    src={layer.src}
                    tw="absolute max-h-[80%] w-auto object-contain"
                    alt={`Layer ${index + 1}`}
                    style={{
                        zIndex: layers.length - index,
                        transformStyle: "preserve-3d",
                        filter: 'drop-shadow(0 0 2px rgba(0, 0, 0, 0.1))',
                        border: layer.border !== false ? '1px solid rgba(0, 0, 0, 0.05)' : 'none',
                        borderRadius: '8px'
                    }}
                />
            ))}
        </div>
    );
};

export default ParallaxLayers;
