//npm run dev
import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Settings, Crown, Grid3X3 } from 'lucide-react';

const PuzzleSolver = () => {
  const [activeTab, setActiveTab] = useState('nqueens');
  const [isAnimating, setIsAnimating] = useState(false);
  const [speed, setSpeed] = useState(500);
  
  // N-Queens State
  const [boardSize, setBoardSize] = useState(8);
  const [queensBoard, setQueensBoard] = useState([]);
  const [queensSolution, setQueensSolution] = useState([]);
  const [queensSteps, setQueensSteps] = useState(0);
  const [queensBacktracks, setQueensBacktracks] = useState(0);
  
  // Sudoku State
  const [sudokuBoard, setSudokuBoard] = useState([]);
  const [sudokuSolution, setSudokuSolution] = useState([]);
  const [sudokuSteps, setSudokuSteps] = useState(0);
  const [sudokuBacktracks, setSudokuBacktracks] = useState(0);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editableBoard, setEditableBoard] = useState([]);

  // Initialize boards
  useEffect(() => {
    initializeNQueens();
    initializeSudoku();
  }, [boardSize]);

  const initializeNQueens = () => {
    const board = Array(boardSize).fill().map(() => Array(boardSize).fill(0));
    setQueensBoard(board);
    setQueensSolution([]);
    setQueensSteps(0);
    setQueensBacktracks(0);
  };

  const initializeSudoku = () => {
    // Super fast default puzzle - only 3 missing numbers in strategic positions
    const puzzle = [[0, 0, 0, 6, 7, 8, 0, 1, 2],
  [6, 7, 2, 1, 9, 5, 0, 0, 8],
  [1, 0, 0, 3, 4, 2, 0, 6, 7],
  [8, 5, 9, 7, 0, 1, 0, 2, 3],
  [4, 0, 0, 8, 0, 3, 7, 9, 1],
  [7, 1, 3, 9, 0, 4, 8, 5, 6],
  [0, 0, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 0, 3, 0],
  [3, 4, 0, 2, 0, 6, 1, 7, 0]
  ];
    setSudokuBoard(puzzle.map(row => [...row]));
    setEditableBoard(puzzle.map(row => [...row]));
    setSudokuSolution([]);
    setSudokuSteps(0);
    setSudokuBacktracks(0);
  };

  const loadEasyPuzzle = () => {
    // Easy puzzle with several missing numbers
    const easyPuzzle = [
    [0, 0, 0, 6, 7, 8, 0, 1, 2],
  [6, 7, 2, 1, 9, 5, 0, 0, 8],
  [1, 0, 0, 3, 4, 2, 0, 6, 7],
  [8, 5, 9, 7, 0, 1, 0, 2, 3],
  [4, 0, 0, 8, 0, 3, 7, 9, 1],
  [7, 1, 3, 9, 0, 4, 8, 5, 6],
  [0, 0, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 0, 3, 0],
  [3, 4, 0, 2, 0, 6, 1, 7, 0]

];


    setSudokuBoard(easyPuzzle.map(row => [...row]));
    setEditableBoard(easyPuzzle.map(row => [...row]));
    setSudokuSolution([]);
    setSudokuSteps(0);
    setSudokuBacktracks(0);
    setIsEditMode(false);
  };

  const loadMediumPuzzle = () => {
    // Medium difficulty puzzle
    const mediumPuzzle = [
       [3, 0, 6, 5, 7, 8, 4, 9, 0],
  [5, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 7, 6, 2, 9, 0, 3, 1],
  [0, 0, 3, 0, 1, 5, 9, 8, 0],
  [9, 0, 0, 0, 6, 3, 0, 0, 5],
  [0, 5, 0, 0, 9, 0, 6, 0, 0],
  [1, 3, 0, 0, 0, 0, 2, 5, 0],
  [6, 9, 2, 0, 0, 0, 0, 7, 4],
  [0, 0, 5, 2, 0, 6, 3, 0, 0]
    ];
    setSudokuBoard(mediumPuzzle.map(row => [...row]));
    setEditableBoard(mediumPuzzle.map(row => [...row]));
    setSudokuSolution([]);
    setSudokuSteps(0);
    setSudokuBacktracks(0);
    setIsEditMode(false);
  };

  const loadHardPuzzle = () => {
    // Harder puzzle with fewer clues
    const hardPuzzle =  [
       [3, 0, 6, 5, 0, 8, 4, 0, 0],
  [5, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 7, 0, 0, 0, 0, 3, 1],
  [0, 0, 3, 0, 1, 0, 0, 8, 0],
  [9, 0, 0, 8, 6, 3, 0, 0, 5],
  [0, 5, 0, 0, 9, 0, 6, 0, 0],
  [1, 3, 0, 0, 0, 0, 2, 5, 0],
  [0, 0, 0, 0, 0, 0, 0, 7, 4],
  [0, 0, 5, 2, 0, 6, 3, 0, 0]
    ];
    setSudokuBoard(hardPuzzle.map(row => [...row]));
    setEditableBoard(hardPuzzle.map(row => [...row]));
    setSudokuSolution([]);
    setSudokuSteps(0);
    setSudokuBacktracks(0);
    setIsEditMode(false);
  };

  const clearBoard = () => {
    const emptyBoard = Array(9).fill().map(() => Array(9).fill(0));
    setSudokuBoard(emptyBoard.map(row => [...row]));
    setEditableBoard(emptyBoard.map(row => [...row]));
    setSudokuSolution([]);
    setSudokuSteps(0);
    setSudokuBacktracks(0);
    setIsEditMode(true);
  };

  const handleCellEdit = (row, col, value) => {
    if (!isEditMode) return;
    
    const newBoard = editableBoard.map(r => [...r]);
    const numValue = parseInt(value) || 0;
    
    if (numValue >= 0 && numValue <= 9) {
      newBoard[row][col] = numValue;
      setEditableBoard(newBoard);
      setSudokuBoard(newBoard.map(r => [...r]));
    }
  };

  const applyCustomBoard = () => {
    setSudokuBoard(editableBoard.map(row => [...row]));
    setSudokuSolution([]);
    setSudokuSteps(0);
    setSudokuBacktracks(0);
    setIsEditMode(false);
  };

  // N-Queens Algorithm
  const isQueenSafe = (board, row, col) => {
    // Check column
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 1) return false;
    }
    
    // Check diagonal (top-left to bottom-right)
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 1) return false;
    }
    
    // Check diagonal (top-right to bottom-left)
    for (let i = row - 1, j = col + 1; i >= 0 && j < board.length; i--, j++) {
      if (board[i][j] === 1) return false;
    }
    
    return true;
  };

  const solveNQueensBacktrack = async (board, row, solution, onUpdate) => {
    if (row === board.length) {
      return [...solution];
    }
    
    for (let col = 0; col < board.length; col++) {
      if (isQueenSafe(board, row, col)) {
        // Place queen
        board[row][col] = 1;
        solution.push([row, col]);
        setQueensSteps(prev => prev + 1);
        
        if (onUpdate) {
          await onUpdate([...board], [...solution]);
          await new Promise(resolve => setTimeout(resolve, speed));
        }
        
        // Recursive call
        const result = await solveNQueensBacktrack(board, row + 1, solution, onUpdate);
        if (result) return result;
        
        // Backtrack
        board[row][col] = 0;
        solution.pop();
        setQueensBacktracks(prev => prev + 1);
        
        if (onUpdate) {
          await onUpdate([...board], [...solution]);
          await new Promise(resolve => setTimeout(resolve, speed));
        }
      }
    }
    
    return null;
  };

  // Sudoku Algorithm
  const isSudokuValid = (board, row, col, num) => {
    // Check row
    for (let j = 0; j < 9; j++) {
      if (board[row][j] === num) return false;
    }
    
    // Check column
    for (let i = 0; i < 9; i++) {
      if (board[i][col] === num) return false;
    }
    
    // Check 3x3 box
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;
    for (let i = boxRow; i < boxRow + 3; i++) {
      for (let j = boxCol; j < boxCol + 3; j++) {
        if (board[i][j] === num) return false;
      }
    }
    
    return true;
  };

  const solveSudokuBacktrack = async (board, onUpdate) => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === 0) {
          for (let num = 1; num <= 9; num++) {
            if (isSudokuValid(board, row, col, num)) {
              board[row][col] = num;
              setSudokuSteps(prev => prev + 1);
              
              if (onUpdate) {
                await onUpdate([...board.map(row => [...row])]);
                await new Promise(resolve => setTimeout(resolve, speed / 4));
              }
              
              if (await solveSudokuBacktrack(board, onUpdate)) {
                return true;
              }
              
              // Backtrack
              board[row][col] = 0;
              setSudokuBacktracks(prev => prev + 1);
              
              if (onUpdate) {
                await onUpdate([...board.map(row => [...row])]);
                await new Promise(resolve => setTimeout(resolve, speed / 4));
              }
            }
          }
          return false;
        }
      }
    }
    return true;
  };

  const solveNQueens = async () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    initializeNQueens();
    
    const board = Array(boardSize).fill().map(() => Array(boardSize).fill(0));
    const solution = [];
    
    const onUpdate = (newBoard, newSolution) => {
      setQueensBoard(newBoard.map(row => [...row]));
      setQueensSolution([...newSolution]);
    };
    
    const result = await solveNQueensBacktrack(board, 0, solution, onUpdate);
    
    if (result) {
      setQueensSolution(result);
    }
    
    setIsAnimating(false);
  };

  const solveSudoku = async () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    const board = sudokuBoard.map(row => [...row]);
    
    const onUpdate = (newBoard) => {
      setSudokuSolution(newBoard);
    };
    
    await solveSudokuBacktrack(board, onUpdate);
    setIsAnimating(false);
  };

  const renderNQueensBoard = () => {
    return (
      <div className="grid gap-1 p-4 bg-gray-100 rounded-lg" style={{gridTemplateColumns: `repeat(${boardSize}, 1fr)`}}>
        {queensBoard.map((row, i) =>
          row.map((cell, j) => (
            <div
              key={`${i}-${j}`}
              className={`w-8 h-8 border flex items-center justify-center text-lg font-bold
                ${(i + j) % 2 === 0 ? 'bg-amber-100' : 'bg-amber-200'}
                ${cell === 1 ? 'bg-red-400 text-white' : ''}
              `}
            >
              {cell === 1 && <Crown size={16} />}
            </div>
          ))
        )}
      </div>
    );
  };

  const renderSudokuBoard = () => {
    const displayBoard = sudokuSolution.length > 0 ? sudokuSolution : sudokuBoard;
    const originalBoard = sudokuBoard;
    
    return (
      <div className="inline-block bg-white p-6 rounded-xl shadow-lg border-4 border-gray-800">
        <div className="grid grid-cols-9 gap-0 bg-gray-800 p-1 rounded-lg">
          {displayBoard.map((row, i) =>
            row.map((cell, j) => (
              <div
                key={`${i}-${j}`}
                className={`w-10 h-10 border flex items-center justify-center text-base font-bold transition-all duration-200
                  ${(Math.floor(i / 3) + Math.floor(j / 3)) % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  ${originalBoard[i][j] === 0 && cell !== 0 ? 'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-900 animate-pulse' : ''}
                  ${originalBoard[i][j] !== 0 ? 'text-gray-800 font-black bg-gradient-to-br from-gray-50 to-gray-100' : ''}
                  ${j % 3 === 2 && j !== 8 ? 'border-r-4 border-r-gray-800' : 'border-r border-r-gray-300'}
                  ${i % 3 === 2 && i !== 8 ? 'border-b-4 border-b-gray-800' : 'border-b border-b-gray-300'}
                  ${isEditMode ? 'cursor-pointer hover:bg-gradient-to-br hover:from-yellow-100 hover:to-yellow-200 hover:scale-105' : ''}
                  border-l border-t border-l-gray-300 border-t-gray-300
                `}
              >
                {isEditMode ? (
                  <input
                    type="text"
                    value={cell === 0 ? '' : cell}
                    onChange={(e) => handleCellEdit(i, j, e.target.value)}
                    className="w-full h-full text-center text-base font-bold bg-transparent border-none outline-none"
                    maxLength="1"
                  />
                ) : (
                  cell !== 0 ? cell : ''
                )}
              </div>
            ))
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Backtracking Algorithm Visualizer</h1>
        <p className="text-gray-600">Interactive demonstration of backtracking algorithms for puzzle solving</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab('nqueens')}
            className={`px-6 py-3 rounded-md font-medium transition-all flex items-center gap-2 ${
              activeTab === 'nqueens' 
                ? 'bg-white text-blue-600 shadow-sm' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <Crown size={20} />
            N-Queens Problem
          </button>
          <button
            onClick={() => setActiveTab('sudoku')}
            className={`px-6 py-3 rounded-md font-medium transition-all flex items-center gap-2 ${
              activeTab === 'sudoku' 
                ? 'bg-white text-blue-600 shadow-sm' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <Grid3X3 size={20} />
            Sudoku Solver
          </button>
        </div>
      </div>

      {/* N-Queens Tab */}
      {activeTab === 'nqueens' && (
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">N-Queens Problem</h2>
            <p className="text-gray-600 text-center mb-6">
              Place {boardSize} queens on a {boardSize}×{boardSize} chessboard so that no two queens attack each other
            </p>
            
            {/* Controls */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium">Board Size:</label>
                <select 
                  value={boardSize} 
                  onChange={(e) => setBoardSize(parseInt(e.target.value))}
                  disabled={isAnimating}
                  className="px-3 py-1 border rounded"
                >
                  <option value={4}>4×4</option>
                  <option value={6}>6×6</option>
                  <option value={8}>8×8</option>
                </select>
              </div>
              
              <div className="flex items-center gap-2">
                <Settings size={16} />
                <label className="text-sm font-medium">Speed:</label>
                <input
                  type="range"
                  min="100"
                  max="1000"
                  value={speed}
                  onChange={(e) => setSpeed(parseInt(e.target.value))}
                  className="w-20"
                />
              </div>
              
              <button
                onClick={solveNQueens}
                disabled={isAnimating}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2"
              >
                {isAnimating ? <Pause size={16} /> : <Play size={16} />}
                {isAnimating ? 'Solving...' : 'Solve'}
              </button>
              
              <button
                onClick={initializeNQueens}
                disabled={isAnimating}
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 disabled:opacity-50 flex items-center gap-2"
              >
                <RotateCcw size={16} />
                Reset
              </button>
            </div>

            {/* Board and Stats */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 flex justify-center">
                {renderNQueensBoard()}
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Algorithm Stats</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Steps taken:</span>
                    <span className="font-mono">{queensSteps}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Backtracks:</span>
                    <span className="font-mono">{queensBacktracks}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Queens placed:</span>
                    <span className="font-mono">{queensSolution.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className={`font-medium ${
                      queensSolution.length === boardSize ? 'text-green-600' : 
                      isAnimating ? 'text-blue-600' : 'text-gray-600'
                    }`}>
                      {queensSolution.length === boardSize ? 'Solved!' : 
                       isAnimating ? 'Solving...' : 'Ready'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sudoku Tab */}
      {activeTab === 'sudoku' && (
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-3">Sudoku Solver</h2>
              <p className="text-gray-600 text-lg">
                Fill the 9×9 grid so that each row, column, and 3×3 box contains digits 1-9
              </p>
            </div>
            
            {/* Main Controls */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm">
                <Settings size={18} className="text-gray-500" />
                <label className="text-sm font-medium text-gray-700">Speed:</label>
                <input
                  type="range"
                  min="50"
                  max="500"
                  value={speed}
                  onChange={(e) => setSpeed(parseInt(e.target.value))}
                  className="w-24 accent-blue-600"
                />
                <span className="text-xs text-gray-500 font-mono">{speed}ms</span>
              </div>
              
              <button
                onClick={solveSudoku}
                disabled={isAnimating || isEditMode}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold hover:from-green-600 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                {isAnimating ? <Pause size={18} /> : <Play size={18} />}
                {isAnimating ? 'Solving...' : 'Start Solving'}
              </button>
              
              <button
                onClick={() => setIsEditMode(!isEditMode)}
                disabled={isAnimating}
                className={`px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg transform hover:scale-105 transition-all duration-200 ${
                  isEditMode 
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600' 
                    : 'bg-gradient-to-r from-purple-500 to-violet-600 text-white hover:from-purple-600 hover:to-violet-700'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isEditMode ? '✓ Apply Changes' : '✏️ Edit Puzzle'}
              </button>
              
              {isEditMode && (
                <button
                  onClick={applyCustomBoard}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-cyan-700 flex items-center gap-2 shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  🎯 Ready to Solve
                </button>
              )}
            </div>

            {/* Preset Puzzles */}
            <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Choose Difficulty Level</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  onClick={loadEasyPuzzle}
                  disabled={isAnimating || isEditMode}
                  className="px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-lg hover:from-green-200 hover:to-emerald-200 disabled:opacity-50 font-medium border-2 border-green-200 hover:border-green-300 transition-all duration-200"
                >
                  🟢 Easy 
                </button>
                <button
                  onClick={loadMediumPuzzle}
                  disabled={isAnimating || isEditMode}
                  className="px-4 py-2 bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 rounded-lg hover:from-yellow-200 hover:to-amber-200 disabled:opacity-50 font-medium border-2 border-yellow-200 hover:border-yellow-300 transition-all duration-200"
                >
                  🟡 Medium
                </button>
                <button
                  onClick={loadHardPuzzle}
                  disabled={isAnimating || isEditMode}
                  className="px-4 py-2 bg-gradient-to-r from-red-100 to-rose-100 text-red-800 rounded-lg hover:from-red-200 hover:to-rose-200 disabled:opacity-50 font-medium border-2 border-red-200 hover:border-red-300 transition-all duration-200"
                >
                  🔴 Hard
                </button>
                <button
                  onClick={clearBoard}
                  disabled={isAnimating}
                  className="px-4 py-2 bg-gradient-to-r from-gray-100 to-slate-100 text-gray-800 rounded-lg hover:from-gray-200 hover:to-slate-200 disabled:opacity-50 font-medium border-2 border-gray-200 hover:border-gray-300 transition-all duration-200"
                >
                  ⚪ Blank Canvas
                </button>
                <button
                  onClick={initializeSudoku}
                  disabled={isAnimating}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-lg hover:from-blue-200 hover:to-indigo-200 disabled:opacity-50 font-medium border-2 border-blue-200 hover:border-blue-300 transition-all duration-200 flex items-center gap-2"
                >
                  <RotateCcw size={14} />
                  Reset Default
                </button>
              </div>
            </div>

            {/* Board and Stats Layout */}
            <div className="flex flex-col xl:flex-row items-start justify-center gap-8">
              {/* Sudoku Board */}
              <div className="flex-shrink-0">
                {renderSudokuBoard()}
              </div>
              
              {/* Stats Panel */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 min-w-[280px]">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  📊 Algorithm Performance
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-700 font-medium">Steps Taken:</span>
                    <span className="font-mono text-xl font-bold text-blue-600">{sudokuSteps}</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span className="text-gray-700 font-medium">Backtracks:</span>
                    <span className="font-mono text-xl font-bold text-orange-600">{sudokuBacktracks}</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-gray-700 font-medium">Status:</span>
                    <span className={`font-bold text-lg ${
                      isAnimating ? 'text-blue-600 animate-pulse' : 'text-gray-600'
                    }`}>
                      {isAnimating ? '🔄 Solving...' : '✅ Ready'}
                    </span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold mb-3 text-gray-800">Legend:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-300 rounded font-bold flex items-center justify-center text-xs">8</div>
                      <span className="text-gray-700">Original clues</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-blue-300 rounded font-bold flex items-center justify-center text-xs text-blue-900">3</div>
                      <span className="text-gray-700">Algorithm solutions</span>
                    </div>
                    {isEditMode && (
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-gradient-to-br from-yellow-100 to-yellow-200 border-2 border-yellow-300 rounded font-bold flex items-center justify-center text-xs">?</div>
                        <span className="text-gray-700">Editable cells</span>
                      </div>
                    )}
                  </div>
                  
                  {isEditMode && (
                    <div className="mt-4 p-3 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg border border-yellow-200">
                      <p className="font-medium text-yellow-800 mb-1">✏️ Edit Mode Active</p>
                      <p className="text-yellow-700 text-sm">Click any cell to enter numbers (1-9) or leave empty</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Algorithm Explanation */}
      <div className="mt-8 bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">How Backtracking Works</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium mb-2">Algorithm Steps:</h4>
            <ol className="list-decimal list-inside space-y-1 text-gray-700">
              <li>Try placing a piece/number at the current position</li>
              <li>Check if the placement is valid according to constraints</li>
              <li>If valid, move to the next position recursively</li>
              <li>If invalid or no solution found, backtrack and try next option</li>
              <li>Repeat until solution is found or all possibilities exhausted</li>
            </ol>
          </div>
          <div>
            <h4 className="font-medium mb-2">Key Characteristics:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Explores solution space systematically</li>
              <li>Prunes invalid branches early (constraint satisfaction)</li>
              <li>Time complexity can be exponential in worst case</li>
              <li>Memory efficient - uses recursion stack</li>
              <li>Guaranteed to find solution if one exists</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuzzleSolver;