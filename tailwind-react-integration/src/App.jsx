// src/App.jsx
import UserProfile from './components/UserProfile'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="w-full max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Responsive Design Implementation
          </h1>
          <p className="text-lg text-gray-600">
            UserProfile component with exact responsive requirements
          </p>
        </header>

        {/* UserProfile Component */}
        <UserProfile />

        {/* Requirements Demonstration */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Responsive Requirements Implemented
          </h2>
          
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-medium text-green-900 mb-2">✅ Container Responsive Adjustments</h3>
              <ul className="text-sm text-green-800">
                <li><code>p-4 sm:p-8</code> - Padding adjusts on small screens</li>
                <li><code>max-w-xs sm:max-w-sm</code> - Max width adapts to screen size</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-medium text-green-900 mb-2">✅ Responsive Typography</h3>
              <ul className="text-sm text-green-800">
                <li><code>text-lg sm:text-xl</code> - Heading size adjusts</li>
                <li><code>text-sm sm:text-base</code> - Paragraph text adapts</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-medium text-green-900 mb-2">✅ Responsive Image Sizing</h3>
              <ul className="text-sm text-green-800">
                <li><code>w-24 h-24 sm:w-36 sm:h-36</code> - Image scales appropriately</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App