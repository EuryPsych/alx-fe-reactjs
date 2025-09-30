import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                <a href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                  RecipeShare
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <nav className="hidden md:flex space-x-6">
                  <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
                  <a href="/add-recipe" className="text-gray-700 hover:text-blue-600 font-medium">Add Recipe</a>
                  <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Categories</a>
                  <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
                </nav>
                <div className="flex items-center space-x-4">
                  <button className="text-gray-600 hover:text-gray-900 font-medium">Sign up</button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium">
                    Log in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} />
        </Routes>

        <footer className="bg-white border-t mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center text-gray-600">
              <p>&copy; 2024 RecipeShare. Built with React & Tailwind CSS.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;