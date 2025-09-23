// src/App.jsx
import UserProfile from './components/UserProfile'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            Responsive Design with Tailwind CSS
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            This UserProfile component adapts to different screen sizes using Tailwind's responsive utilities
          </p>
        </header>

        {/* UserProfile Component */}
        <UserProfile />

        {/* Responsive Features Demo */}
        <div className="mt-8 sm:mt-12 bg-white rounded-lg shadow-md p-4 sm:p-6 max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
            Responsive Breakpoints Demonstration
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 text-sm sm:text-base">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-900 mb-2">Small Screens ( 640px)</h3>
              <ul className="list-disc list-inside space-y-1 text-blue-800">
                <li>Padding: p-4</li>
                <li>Max width: max-w-xs (320px)</li>
                <li>Image: 96px × 96px</li>
                <li>Heading: text-lg</li>
                <li>Text: text-sm</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-medium text-green-900 mb-2">Medium+ Screens (≥ 768px)</h3>
              <ul className="list-disc list-inside space-y-1 text-green-800">
                <li>Padding: p-8</li>
                <li>Max width: max-w-sm (384px)</li>
                <li>Image: 144px × 144px</li>
                <li>Heading: text-xl</li>
                <li>Text: text-base</li>
              </ul>
            </div>
          </div>

          {/* Screen Size Indicator */}
          <div className="mt-6 p-3 bg-gray-100 rounded-lg text-center">
            <div className="flex justify-center space-x-4 text-xs sm:text-sm">
              <span className="bg-red-200 px-2 py-1 rounded sm:hidden">Mobile (sm)</span>
              <span className="bg-yellow-200 px-2 py-1 rounded hidden sm:inline md:hidden">Tablet (md)</span>
              <span className="bg-green-200 px-2 py-1 rounded hidden md:inline lg:hidden">Desktop (lg)</span>
              <span className="bg-blue-200 px-2 py-1 rounded hidden lg:inline xl:hidden">Large (xl)</span>
              <span className="bg-purple-200 px-2 py-1 rounded hidden xl:inline">Extra Large (2xl)</span>
            </div>
          </div>
        </div>

        {/* Multiple UserProfiles for Grid Demo */}
        <div className="mt-12">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 text-center mb-6">
            Responsive Grid Layout
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Multiple profile cards to demonstrate grid responsiveness */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-100 p-4 rounded-lg shadow">
                <img 
                  src={`https://via.placeholder.com/150?text=User+${item}`} 
                  alt={`User ${item}`}
                  className="rounded-full w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3"
                />
                <h4 className="text-base sm:text-lg font-medium text-blue-800 text-center">
                  User {item}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm text-center mt-2">
                  Responsive grid item
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App