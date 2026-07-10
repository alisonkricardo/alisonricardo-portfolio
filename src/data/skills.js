import {
  FaGamepad,
  FaPaintBrush,
  FaCubes,
  FaCode,
  FaAtom,
  FaToolbox,
} from 'react-icons/fa'

// Each category gets an icon + a flat list of skill labels rendered as pills.
// Add/remove entries here — Skills.jsx just maps over this array.
const skills = [
  {
    category: 'Game Development',
    icon: FaGamepad,
    items: ['Godot 4', 'GDScript', 'Unity', 'Unreal Engine 5', 'itch.io'],
  },
  {
    category: 'Graphics & Shaders',
    icon: FaPaintBrush,
    items: ['GLSL', 'HLSL', 'Shadertoy', 'PBR', 'Real-time Rendering'],
  },
  {
    category: '3D & Technical Art',
    icon: FaCubes,
    items: ['Blender', 'Houdini', 'Substance 3D Painter', 'ZBrush'],
  },
  {
    category: 'Languages',
    icon: FaCode,
    items: ['Python', 'JavaScript', 'HTML/CSS', 'Java', 'C++'],
  },
  {
    category: 'ML / Quantum',
    icon: FaAtom,
    items: ['PyTorch', 'Hugging Face', 'Qiskit', 'Scikit-learn'],
  },
  {
    category: 'Tools',
    icon: FaToolbox,
    items: ['Git', 'VS Code', 'Jupyter', 'Figma'],
  },
]

export default skills
