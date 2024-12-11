export default function Home() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 animate-gradient-xy"></div>
          <div className="absolute inset-0 opacity-30">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full mix-blend-multiply filter blur-xl animate-float"
                style={{
                  backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 300 + 50}px`,
                  height: `${Math.random() * 300 + 50}px`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 10 + 5}s`,
                }}
              ></div>
            ))}
          </div>
        </div>
        <div className="relative z-10 space-y-8">
          <h1 className="text-4xl sm:text-6xl font-bold text-white drop-shadow-lg">
            Welcome to ColorCraft
          </h1>
          <p className="text-lg sm:text-xl text-white drop-shadow-md max-w-2xl mx-auto">
            Explore, generate, and craft beautiful colors and gradients for your next project.
          </p>
        </div>
      </div>
    )
  }
  
  