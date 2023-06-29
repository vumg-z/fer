'use client'

// @ts-ignore
import * as THREE from 'three';
import React, { useRef, useEffect } from 'react';
import Rectangle from './rectangle.js'

const Animation: React.FC = () => {
    const canvasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Set up your three.js scene and animation logic here
        // Example: Creating a rotating cube
        const canvas = canvasRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(
            window.innerWidth / -2,
            window.innerWidth / 2,
            window.innerHeight / 2,
            window.innerHeight / -2,
            1,
            1000
        );

        camera.position.z = 1;
        camera.position.x = 1;
        camera.position.y = 0;

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        // @ts-ignore
        canvas.appendChild(renderer.domElement);

        const paddingPercentage = 10; // Adjust the percentage as desired

        // Calculate the padding based on the screen size
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const paddingWidth = (screenWidth * paddingPercentage) / 100;
        const paddingHeight = (screenHeight * paddingPercentage) / 100;

        // Calculate the final width and height of the square
        const squareWidth = screenWidth - 2 * paddingWidth;
        const squareHeight = screenHeight - 2 * paddingHeight;

        // Create the geometry with the adjusted width and height
        const geometry = new THREE.PlaneGeometry(squareWidth, squareHeight);
        const material = new THREE.MeshBasicMaterial({
            color: 0xffffff, // Set the color to white
            side: THREE.DoubleSide, // Render both sides of the plane
            wireframe: false, // Render wireframe
        });

        const vertex = new THREE.Mesh(geometry, material);

        vertex.position.set(0, 0, -1);

        scene.add(vertex)

        // Clone the vertex mesh to create a smaller rectangle
        const rectangle = vertex.clone();
        rectangle.material = new THREE.MeshBasicMaterial({
            color: 0x000000, // Green color
            side: THREE.DoubleSide,
        });

        rectangle.scale.set(0.99, .99, 1); // Scale the rectangle to be 90% smaller
        rectangle.position.z = vertex.position.z + 1; // Set a higher Z-index for the rectangle
        rectangle.position.x = vertex.position.x - window.innerWidth / 2 + (paddingWidth + paddingWidth + squareWidth) / 2;
        
        scene.add(rectangle);

        // Clone the vertex mesh to create a smaller rectangle
        const rectangle2 = vertex.clone();
        rectangle2.material = new THREE.MeshBasicMaterial({
            color: 0x000000, // Green color
            side: THREE.DoubleSide,
        });

        rectangle2.scale.set(.99, .99, 1); // Scale the rectangle to be 90% smaller
        rectangle2.position.z = vertex.position.z + 1; // Set a higher Z-index for the rectangle
        rectangle2.position.x = vertex.position.x - window.innerWidth / 2 + (paddingWidth + paddingWidth + squareWidth) / 2;

        // scene.add(rectangle2);


        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
            console.log(camera.position.x, camera.position.y, camera.position.z)
        };

        animate();


        return () => {
            // Clean up the scene when the component is unmounted
            // @ts-ignore
            canvas.removeChild(renderer.domElement);
            scene.dispose();

        };
    }, []);

    return (
        <div ref={canvasRef} style={{ width: '100%', height: '100%' }} />
    );
};

export default Animation;
