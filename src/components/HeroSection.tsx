import React, { useEffect, useRef } from 'react';
import { BookOpen, Search, ChevronRight, BookOpen as BookIcon } from 'lucide-react';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animation for medical-themed background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const updateCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Medical symbols and shapes for animation
    const symbols = [
      '\u2695', // Staff of Aesculapius
      '\u2624', // Caduceus
      '\u2764', // Heart
      '+',      // Plus sign
    ];

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      symbol: string;
      opacity: number;
      direction: number;
    }> = [];

    // Create particles - reduce quantity for cleaner look
    for (let i = 0; i < 35; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 8 + 4, // Smaller size
        speed: Math.random() * 0.3 + 0.1, // Slower movement
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        opacity: Math.random() * 0.08 + 0.02, // More subtle
        direction: Math.random() * Math.PI * 2
      });
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles
      particles.forEach(particle => {
        ctx.font = `${particle.size}px serif`;
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Move particles
        particle.x += Math.cos(particle.direction) * particle.speed;
        particle.y += Math.sin(particle.direction) * particle.speed;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.direction = Math.PI - particle.direction;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.direction = -particle.direction;
        }
        
        ctx.fillText(particle.symbol, particle.x, particle.y);
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  return (
    <div className="hero-gradient relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-900">
      {/* Animated medical background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-0"
      />
      
      {/* Subtle gradients */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute top-1/2 -left-24 w-48 h-48 rounded-full bg-indigo-500/15 blur-3xl"></div>
      <div className="absolute bottom-12 right-1/4 w-40 h-40 rounded-full bg-sky-400/10 blur-3xl"></div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sky-600/70 text-white backdrop-blur-sm shadow-lg mb-6">
            <span className="flex h-2 w-2 rounded-full bg-cyan-300 mr-2 animate-pulse"></span>
            Thư viện y khoa tiếng Việt
          </span>

          {/* Main title with modern typography */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight">
            <span className="block font-lora text-white mb-2">
              Tài liệu y khoa
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-sky-100 font-montserrat font-bold">
              cho tương lai Việt Nam
            </span>
          </h1>

          {/* Subtitle with clean typography */}
          <p className="mt-6 max-w-2xl mx-auto text-lg text-sky-100 font-light">
            Tiếp cận nguồn tri thức y khoa quốc tế thông qua các bản dịch 
            <span className="font-medium text-cyan-200"> chất lượng cao </span>
            từ đội ngũ chuyên gia hàng đầu.
          </p>

          {/* Modern action buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <a
              href="#featured-books"
              className="bg-white text-blue-800 hover:bg-blue-50 font-medium rounded-lg px-6 py-3 flex items-center justify-center transition-all group"
            >
              <BookOpen className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
              <span>Khám phá thư viện</span>
            </a>
            
            <a
              href="/request"
              className="bg-blue-600 text-white hover:bg-blue-700 font-medium rounded-lg px-6 py-3 flex items-center justify-center transition-all group"
            >
              <span>Yêu cầu bản dịch</span>
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Modern search bar */}
          <div className="mt-12 max-w-xl mx-auto">
            <div className="relative rounded-lg shadow-lg">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full py-3 pl-12 pr-24 bg-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all placeholder:text-gray-500"
                placeholder="Tìm kiếm sách y khoa..."
              />
              <button className="absolute inset-y-1 right-1 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-all flex items-center">
                <span className="font-medium text-sm">Tìm kiếm</span>
              </button>
            </div>
          </div>

          {/* Stats section - smaller and more modern */}
          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-4xl mx-auto">
            {[
              { count: '50+', label: 'Đầu sách y khoa', icon: 'books' },
              { count: '5,000+', label: 'Trang được dịch', icon: 'pages' },
              { count: '20+', label: 'Chuyên gia y khoa', icon: 'experts' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/5 transform hover:translate-y-[-3px] transition-all duration-300"
              >
                {stat.icon === 'books' && (
                  <div className="w-8 h-8 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
                    <BookIcon className="h-4 w-4 text-white" />
                  </div>
                )}
                {stat.icon === 'pages' && (
                  <div className="w-8 h-8 mx-auto mb-3 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                  </div>
                )}
                {stat.icon === 'experts' && (
                  <div className="w-8 h-8 mx-auto mb-3 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                  </div>
                )}
                <div className="text-2xl font-bold text-white">{stat.count}</div>
                <div className="text-sky-100 mt-1 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modern wave divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-auto">
          <path
            fill="#f8fafc"
            fillOpacity="1"
            d="M0,96L40,112C80,128,160,160,240,165.3C320,171,400,149,480,149.3C560,149,640,171,720,176C800,181,880,171,960,154.7C1040,139,1120,117,1200,112C1280,107,1360,117,1400,122.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;