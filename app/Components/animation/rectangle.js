import * as THREE from 'three';

class Rectangle extends THREE.Mesh {
    constructor(squareHeight, squareWidth, color, x, y, z) {
        super();

        this.geometry = new THREE.PlaneGeometry(squareHeight, squareWidth);
        this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide });
        this.position.set(x, y, z);
        
        

    }

    animate(){
        this.rotation.x += 0.01;
        this.rotation.y += 0.01;
    }

}

export default Rectangle;
