import {
  FaCode,
  FaSitemap,
  FaChartLine,
  FaSquareRootAlt,
  FaToolbox,
} from 'react-icons/fa'

// Each category gets an icon + a flat list of skill labels rendered as pills.
const skills = [
  {
    category: 'Languages',
    icon: FaCode,
    items: ['Python', 'C++', 'JavaScript', 'HTML/CSS', 'Java'],
  },
  {
    category: 'Data Structures & Algorithms',
    icon: FaSitemap,
    items: ['Arrays', 'Trees', 'Graphs', 'Hash Maps', 'Dynamic Programming', 'Complexity Analysis'],
  },
  {
    category: 'Quantitative & Scientific Computing',
    icon: FaChartLine,
    items: ['Qiskit', 'Jupyter', 'Matplotlib', 'NumPy', 'pandas', 'Statistical Verification'],
  },
  {
    category: 'Mathematics',
    icon: FaSquareRootAlt,
    items: ['Linear Algebra', 'Probability & Statistics', "Bayes' Theorem", 'Combinatorics'],
  },
  {
    category: 'Tools',
    icon: FaToolbox,
    items: ['Git / GitHub', 'VS Code', 'Jupyter', 'Streamlit', 'Figma'],
  },
]

export default skills
