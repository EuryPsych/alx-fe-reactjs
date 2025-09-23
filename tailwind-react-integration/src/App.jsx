// src/App.jsx
import UserProfile from './components/UserProfile'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="w-full max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            React Component Styling with Tailwind CSS
          </h1>
          <p className="text-lg text-gray-600">
            This demonstrates the UserProfile component styled with Tailwind CSS utility classes
          </p>
        </header>

        {/* UserProfile Component */}
        <UserProfile />

        {/* Additional Info Section */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Styling Details
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Container Styles:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>bg-gray-100 (background color)</li>
                <li>p-8 (padding)</li>
                <li>max-w-sm (maximum width)</li>
                <li>mx-auto (horizontal centering)</li>
                <li>my-20 (vertical margin)</li>
                <li>rounded-lg (border radius)</li>
                <li>shadow-lg (box shadow)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Element Styles:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>rounded-full (circular image)</li>
                <li>w-36 h-36 (image dimensions)</li>
                <li>text-xl (heading size)</li>
                <li>text-blue-800 (heading color)</li>
                <li>text-gray-600 (paragraph color)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App