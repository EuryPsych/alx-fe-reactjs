// src/App.jsx
import UserProfile from './components/UserProfile';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="w-full max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Advanced Interactivity with Tailwind CSS
          </h1>
          <p className="text-lg text-gray-600">
            UserProfile component with hover effects, transitions, and animations
          </p>
        </header>

        {/* UserProfile Component */}
        <UserProfile />

        {/* Interactive Features Demo */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Interactive Features Implemented
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-900 mb-3">✅ Hover Effects</h3>
              <ul className="text-sm text-blue-800 space-y-2">
                <li><code>hover:scale-110</code> - Image scales on hover</li>
                <li><code>hover:text-blue-500</code> - Heading color change</li>
                <li><code>hover:shadow-xl</code> - Enhanced card shadow</li>
                <li><code>hover:text-gray-800</code> - Paragraph color change</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-medium text-green-900 mb-3">✅ Transitions & Animations</h3>
              <ul className="text-sm text-green-800 space-y-2">
                <li><code>transition-all duration-300</code> - Smooth transitions</li>
                <li><code>ease-in-out</code> - Smooth timing function</li>
                <li><code>transform hover:-translate-y-1</code> - Card lift effect</li>
                <li><code>transition-colors duration-300</code> - Color transitions</li>
              </ul>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <h4 className="font-medium text-yellow-800 mb-2">How to Test:</h4>
            <p className="text-sm text-yellow-700">
              Hover over different elements to see the interactive effects:
              - Hover over the image to see it scale up
              - Hover over the heading to see color change
              - Hover over the card to see shadow enhancement and lift effect
            </p>
          </div>
        </div>

        {/* Additional Interactive Demo */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer text-center">
            <div className="text-2xl mb-2">✨</div>
            <p className="text-sm font-medium">Hover Effects</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer text-center">
            <div className="text-2xl mb-2">⚡</div>
            <p className="text-sm font-medium">Smooth Transitions</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer text-center">
            <div className="text-2xl mb-2">🎨</div>
            <p className="text-sm font-medium">Animations</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;