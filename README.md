# Backtracking Algorithm Visualizer

An interactive React application that demonstrates backtracking algorithms through visual puzzle solving. Watch as the algorithms systematically explore solution spaces, backtrack when hitting dead ends, and eventually find solutions to classic computational problems.

## 🎯 Features

### 🏰 N-Queens Problem
- **Interactive Board Sizes**: Choose from 4×4, 6×6, or 8×8 chessboards
- **Visual Queen Placement**: See queens placed and removed in real-time
- **Conflict Detection**: Algorithm shows how it checks for queen attacks
- **Step Counting**: Track algorithm steps and backtrack operations

### 🧩 Sudoku Solver
- **Multiple Difficulty Levels**: Easy, Medium, Hard, and custom puzzles
- **Visual Cell Filling**: Watch numbers being tried and backtracked
- **Edit Mode**: Create your own puzzles to solve
- **Color-Coded Display**: Different colors for original clues vs. algorithm solutions

### ⚡ Algorithm Features
- **Adjustable Speed**: Control animation speed from 50ms to 1000ms
- **Real-time Statistics**: Monitor steps taken, backtracks, and current status
- **Educational Explanations**: Built-in algorithm explanation and characteristics
- **Responsive Design**: Works on desktop and mobile devices

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or create the project**:
   ```bash
   mkdir backtracking-visualizer
   cd backtracking-visualizer
   ```

2. **Initialize a new React project**:
   ```bash
   npx create-react-app . --template minimal
   ```

3. **Install required dependencies**:
   ```bash
   npm install lucide-react
   ```

4. **Install Tailwind CSS**:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

5. **Configure Tailwind CSS** in `tailwind.config.js`:
   ```javascript
   module.exports = {
     content: [
       "./src/**/*.{js,jsx,ts,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

6. **Add Tailwind directives** to `src/index.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

7. **Replace the contents of `src/App.js`** with the provided PuzzleSolver component code.

8. **Start the development server**:
   ```bash
   npm run dev
   ```

9. **Open your browser** and navigate to `http://localhost:3000`

## 🎮 How to Use

### N-Queens Problem
1. **Select Board Size**: Choose 4×4, 6×6, or 8×8 from the dropdown
2. **Adjust Speed**: Use the speed slider to control animation timing
3. **Start Solving**: Click the "Solve" button to begin visualization
4. **Watch the Algorithm**: Observe as queens are placed and backtracked
5. **View Statistics**: Monitor steps taken and backtracks in the stats panel

### Sudoku Solver
1. **Choose Difficulty**: Select Easy, Medium, Hard, or create a blank puzzle
2. **Edit Mode** (Optional): Click "Edit Puzzle" to create custom puzzles
   - Click any cell to enter numbers 1-9
   - Leave cells empty (0) for the algorithm to solve
   - Click "Apply Changes" when finished editing
3. **Start Solving**: Click "Start Solving" to begin visualization
4. **Speed Control**: Adjust animation speed with the slider
5. **Monitor Progress**: Watch the algorithm fill cells and backtrack when needed

## 🧠 Algorithm Details

### Backtracking Process
The visualizer demonstrates the core backtracking algorithm:

1. **Place/Try**: Attempt to place a piece or number at the current position
2. **Validate**: Check if the placement satisfies all constraints
3. **Recurse**: If valid, move to the next position and repeat
4. **Backtrack**: If invalid or no solution found, undo the placement and try the next option
5. **Complete**: Continue until solution is found or all possibilities are exhausted

### N-Queens Constraints
- No two queens can be in the same row
- No two queens can be in the same column  
- No two queens can be on the same diagonal

### Sudoku Constraints
- Each row must contain digits 1-9 exactly once
- Each column must contain digits 1-9 exactly once
- Each 3×3 box must contain digits 1-9 exactly once

## 🎨 Visual Elements

### Color Coding
- **N-Queens**: 
  - Light amber squares for the chessboard
  - Red squares with crown icons for placed queens
  
- **Sudoku**:
  - Gray squares for original puzzle clues
  - Blue animated squares for algorithm-filled numbers
  - Yellow hover effects in edit mode

### Statistics Panel
Both algorithms display:
- **Steps Taken**: Total number of placement attempts
- **Backtracks**: Number of times the algorithm had to undo moves
- **Current Status**: Ready, Solving, or Solved

## 🛠️ Technical Implementation

### Built With
- **React**: Frontend framework with hooks (useState, useEffect)
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for UI elements

### Key Components
- **State Management**: Uses React hooks for algorithm state and animation control
- **Async Algorithms**: Implements backtracking with async/await for smooth animations
- **Responsive Grid**: CSS Grid for dynamic board layouts
- **Animation Control**: Configurable delays between algorithm steps

### Performance Features
- **Efficient Rendering**: Minimal re-renders during animation
- **Memory Management**: Proper cleanup of timeouts and intervals
- **Responsive Design**: Adapts to different screen sizes

## 📚 Educational Value

This visualizer helps students and developers understand:
- **Constraint Satisfaction Problems**: How backtracking solves CSPs
- **Recursive Algorithms**: Practical application of recursion with backtracking
- **Algorithm Complexity**: Visual demonstration of exponential time complexity
- **Problem-Solving Strategies**: Systematic exploration vs. brute force

## 🎯 Use Cases

- **Computer Science Education**: Teaching backtracking algorithms
- **Algorithm Visualization**: Understanding recursive problem-solving
- **Interview Preparation**: Classic coding interview problems
- **Personal Learning**: Interactive way to grasp complex algorithms

## 🤝 Contributing

Feel free to enhance this visualizer by:
- Adding more puzzle types (e.g., Graph Coloring, Hamiltonian Path)
- Implementing additional optimization techniques
- Improving the user interface and animations
- Adding more detailed algorithm explanations

## 📝 License

This project is open source and available under the MIT License.

## 🚀 Future Enhancements

Potential improvements:
- **More Algorithms**: Knight's Tour, Graph Coloring, Subset Sum
- **Algorithm Comparison**: Side-by-side visualization of different approaches
- **Performance Metrics**: Time complexity analysis and comparisons
- **Export Features**: Save and share custom puzzles
- **Educational Mode**: Step-by-step explanations during solving

---

**Happy Learning!** 🎓 Watch algorithms come to life and gain deeper insights into the elegant world of backtracking!