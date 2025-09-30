import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">RecipeShare</h1>
            <div className="space-x-4">
              <button className="text-gray-600 hover:text-gray-900">Sign up</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Log in
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">My Plan For Today</h2>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-blue-600 h-4 rounded-full" style={{ width: '75%' }}></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">75% Complete</p>
        </div>

        {/* Recipe Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Featured Recipes */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Featured Recipes</h2>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <input type="checkbox" className="h-5 w-5 text-blue-600 rounded" />
                  <span className="text-gray-700">Recipe {item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Your Recipes */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Recipes</h2>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <input type="checkbox" className="h-5 w-5 text-blue-600 rounded" />
                  <span className="text-gray-700">My Recipe {item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Info */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            Building React Projects with Tailwind CSS
          </h3>
          <p className="text-blue-800">
            You will learn how to create a responsive and visually appealing Recipe Sharing Platform 
            using React and Tailwind CSS.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;