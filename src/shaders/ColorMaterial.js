 // @refresh reset

import * as THREE from 'three'
import colors from '../assets/colors-100.json'
const colorNumber = 23;
const glsl = x => x[0];

export default {
  uniforms: {
    time: { value: 1.0 },
    color1: { value: new THREE.Color(colors[colorNumber][0]) },
    color2: { value: new THREE.Color(colors[colorNumber][1]) },
    color3: { value: new THREE.Color(colors[colorNumber][2]) },
  },

  vertexShader: glsl`
    varying vec3 vNormal;
    varying vec2 vUv;
    void main() {
      vUv = uv;
      vNormal = normal;
      gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4( position, 1.0 );
    }
  `,

  fragmentShader: glsl`
    uniform float time;
    varying vec3 vNormal;
    uniform vec3 color1;
    uniform vec3 color2;
    uniform vec3 color3;
    varying vec2 vUv;
    void main() {
      float c1 = abs(dot(vNormal, vec3(1.0, 0.0, 0.0)));
      float c2 = abs(dot(vNormal, vec3(0.0, 1.0, 0.0)));
      float c3 = abs(dot(vNormal, vec3(0.0, 0.0, 1.0)));

      vec3 finalColor = c1*color1 + c2*color2 + c3*color3;
      gl_FragColor.rgba = vec4(finalColor, 1.0);
    }
  `
}
