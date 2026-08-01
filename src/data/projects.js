// Each object maps directly to a ProjectCard.
const projects = [
  {
    title: 'Quantum Computing Fundamentals',
    status: 'completed',
    description:
      'A Jupyter notebook engineering 4 core quantum algorithms — superposition, entanglement, Bell states, and Deutsch–Jozsa — derived from mathematical first principles. Includes a quantum random number generator statistically validated across 600 measurement shots.',
    tech: ['Python', 'Qiskit', 'Qiskit Aer', 'Matplotlib', 'Jupyter'],
    link: 'https://github.com/alisonkricardo/quantum-computing-fundamentals',
  },
  {
    title: 'Limit Order Book Simulator',
    status: 'in-progress',
    description:
      'A limit order book matching engine implementing price-time priority order matching with partial fill handling across multiple resting orders, plus a basic market-making strategy using inventory-risk-based quote skewing.',
    tech: ['C++'],
    link: 'https://github.com/alisonkricardo',
  },
]

export default projects
