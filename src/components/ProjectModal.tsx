import React, { useState, useEffect, useRef } from 'react';
import { Project } from '../types';
import { 
  X, 
  ExternalLink, 
  Github, 
  Play, 
  Calendar, 
  Code, 
  CheckCircle2, 
  CreditCard, 
  ArrowUpRight, 
  Plus, 
  Trash2, 
  RotateCcw, 
  Search, 
  HeartPulse, 
  Plane, 
  Sparkles,
  Trophy
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'simulator'>('overview');

  // Banking Simulator State
  const [bankingAccount, setBankingAccount] = useState({
    accountNumber: "ACC-8839201",
    holderName: "Avesh Kumar Maurya",
    balance: 48500.00,
    transactions: [
      { id: 'tx-1', type: 'Credit', amount: 25000.00, description: 'Salary Deposit - Tech Firm', date: '2026-07-20' },
      { id: 'tx-2', type: 'Debit', amount: 1500.00, description: 'AWS Cloud Hosting', date: '2026-07-22' },
      { id: 'tx-3', type: 'Credit', amount: 5000.00, description: 'Freelance Java API Consultation', date: '2026-07-24' }
    ]
  });
  const [bankAmountInput, setBankAmountInput] = useState('');
  const [bankDescInput, setBankDescInput] = useState('');

  // Snake Game State
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [snakeScore, setSnakeScore] = useState(0);
  const [snakeHighScore, setSnakeHighScore] = useState(12);
  const [gameRunning, setGameRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  // Task Bucket Simulator State
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Complete Spring Security OAuth2 Configuration', completed: true, category: 'Java' },
    { id: '2', title: 'Review Database Indexing for MySQL Queries', completed: false, category: 'Database' },
    { id: '3', title: 'Upload Certificates to Portfolio Showcase', completed: true, category: 'Portfolio' }
  ]);
  const [newTaskInput, setNewTaskInput] = useState('');

  // Reset modal state on project change
  useEffect(() => {
    setActiveTab('overview');
    setGameRunning(false);
    setGameOver(false);
  }, [project]);

  // Snake Game Loop Logic
  useEffect(() => {
    if (!gameRunning || project?.interactiveType !== 'snake-game' || activeTab !== 'simulator') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const gridSize = 15;
    const tileCount = canvas.width / gridSize;

    let snake = [{ x: 10, y: 10 }];
    let velocity = { x: 1, y: 0 };
    let food = { x: 5, y: 5 };
    let currentScore = 0;

    const generateFood = () => {
      food = {
        x: Math.floor(Math.random() * tileCount),
        y: Math.floor(Math.random() * tileCount)
      };
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          if (velocity.y !== 1) velocity = { x: 0, y: -1 };
          break;
        case 'ArrowDown':
          if (velocity.y !== -1) velocity = { x: 0, y: 1 };
          break;
        case 'ArrowLeft':
          if (velocity.x !== 1) velocity = { x: -1, y: 0 };
          break;
        case 'ArrowRight':
          if (velocity.x !== -1) velocity = { x: 1, y: 0 };
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    const interval = setInterval(() => {
      // Move snake head
      const head = { x: snake[0].x + velocity.x, y: snake[0].y + velocity.y };

      // Wall collision
      if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
        setGameOver(true);
        setGameRunning(false);
        clearInterval(interval);
        return;
      }

      // Self collision
      for (let i = 0; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
          setGameOver(true);
          setGameRunning(false);
          clearInterval(interval);
          return;
        }
      }

      snake.unshift(head);

      // Food collision
      if (head.x === food.x && head.y === food.y) {
        currentScore += 1;
        setSnakeScore(currentScore);
        setSnakeHighScore(prev => Math.max(prev, currentScore));
        generateFood();
      } else {
        snake.pop();
      }

      // Clear & Draw
      ctx.fillStyle = '#09090b';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw Food
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(food.x * gridSize + gridSize / 2, food.y * gridSize + gridSize / 2, gridSize / 2 - 2, 0, Math.PI * 2);
      ctx.fill();

      // Draw Snake
      ctx.fillStyle = '#10b981';
      snake.forEach((part, index) => {
        if (index === 0) ctx.fillStyle = '#059669';
        else ctx.fillStyle = '#10b981';
        ctx.fillRect(part.x * gridSize + 1, part.y * gridSize + 1, gridSize - 2, gridSize - 2);
      });

    }, 120);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [gameRunning, activeTab, project]);

  if (!project) return null;

  const handleDeposit = () => {
    const val = parseFloat(bankAmountInput);
    if (isNaN(val) || val <= 0) return;
    setBankingAccount(prev => ({
      ...prev,
      balance: prev.balance + val,
      transactions: [
        {
          id: `tx-${Date.now()}`,
          type: 'Credit',
          amount: val,
          description: bankDescInput.trim() || 'Online Deposit',
          date: new Date().toISOString().split('T')[0]
        },
        ...prev.transactions
      ]
    }));
    setBankAmountInput('');
    setBankDescInput('');
  };

  const handleWithdraw = () => {
    const val = parseFloat(bankAmountInput);
    if (isNaN(val) || val <= 0 || val > bankingAccount.balance) return;
    setBankingAccount(prev => ({
      ...prev,
      balance: prev.balance - val,
      transactions: [
        {
          id: `tx-${Date.now()}`,
          type: 'Debit',
          amount: val,
          description: bankDescInput.trim() || 'Online Withdrawal',
          date: new Date().toISOString().split('T')[0]
        },
        ...prev.transactions
      ]
    }));
    setBankAmountInput('');
    setBankDescInput('');
  };

  const handleAddTask = () => {
    if (!newTaskInput.trim()) return;
    setTasks(prev => [
      ...prev,
      { id: Date.now().toString(), title: newTaskInput.trim(), completed: false, category: 'Personal' }
    ]);
    setNewTaskInput('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-bold">
              <Code className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                {project.title}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {project.startDate} to {project.endDate}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6">
          {/* Project Image Banner */}
              <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent flex items-end p-6">
                  <div>
                    <span className="px-2.5 py-1 rounded bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h4 className="text-xl font-bold text-white mt-1">
                      {project.title}
                    </h4>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                  Detailed Description
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {project.detailedDescription || project.description}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                  Key Features & Architectural Highlights
                </h4>
                <ul className="grid grid-cols-1 gap-2">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-medium border border-zinc-200 dark:border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              


        </div>

        {/* Modal Footer Links */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-5 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
          <div className="flex gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-semibold hover:opacity-90 transition-opacity"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-bold hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
          >
            Close Dialog
          </button>
        </div>

      </div>
    </div>
  );
};
