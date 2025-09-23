import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="max-w-2xl mx-auto text-center">
        {/* Header Section with custom styles */}
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 text-shadow">
            Welcome to React + Tailwind CSS
          </h1>
          <p className="text-xl text-gray-600">
            This project demonstrates the integration of Tailwind CSS with a React application using Vite.
          </p>
        </header>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 custom-focus">
          <div className="flex flex-col items-center justify-center space-y-6">
            {/* Counter Display with custom animation */}
            <div className="text-6xl font-bold text-indigo-600 mb-4 bounce-soft">
              {count}
            </div>
            
            {/* Counter Buttons with custom styles */}
            <div className="flex gap-4 mb-6 flex-wrap justify-center">
              <button
                onClick={() => setCount(count - 1)}
                className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 custom-btn"
              >
                Decrement
              </button>
              
              <button
                onClick={() => setCount(0)}
                className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 custom-btn pulse-glow"
              >
                Reset
              </button>
              
              <button
                onClick={() => setCount(count + 1)}
                className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 custom-btn"
              >
                Increment
              </button>
            </div>

            {/* Feature Cards with custom hover effects */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="feature-card bg-blue-50 p-6 rounded-xl border border-blue-200">
                <div className="text-2xl mb-2">⚡</div>
                <h3 className="font-semibold text-gray-800 mb-2">Fast Setup</h3>
                <p className="text-gray-600 text-sm">Quick integration with Vite plugin</p>
              </div>
              
              <div className="feature-card bg-green-50 p-6 rounded-xl border border-green-200">
                <div className="text-2xl mb-2">🎨</div>
                <h3 className="font-semibold text-gray-800 mb-2">Utility First</h3>
                <p className="text-gray-600 text-sm">Build complex designs with simple classes</p>
              </div>
              
              <div className="feature-card bg-purple-50 p-6 rounded-xl border border-purple-200">
                <div className="text-2xl mb-2">📱</div>
                <h3 className="font-semibold text-gray-800 mb-2">Responsive</h3>
                <p className="text-gray-600 text-sm">Mobile-first responsive design</p>
              </div>
            </div>

            {/* Demo section for custom gradient text */}
            <div className="mt-8 p-4 bg-gray-100 rounded-lg">
              <h3 className="text-gradient text-2xl font-bold mb-2">
                Custom CSS Demo
              </h3>
              <p className="text-gray-600">
                This text uses a custom gradient defined in App.css!
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-gray-500 text-sm no-print">
          <p>React + Tailwind CSS Integration Project</p>
        </footer>
      </div>
    </div>
  )
}

export default App