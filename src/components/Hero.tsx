import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';



const Hero = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const phrases = ["Competitive Programmer", "Web Developer", "Problem Solver"];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const phrase = phrases[currentPhrase];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < phrase.length) {
          setCurrentText(phrase.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentPhrase, phrases]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen pt-20 lg:pt-24 bg-gradient-primary flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--accent)) 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="text-center lg:text-left space-y-6 animate-fade-in-up">
          <div className="space-y-2">
            <h2 className="text-2xl lg:text-3xl font-medium text-accent opacity-90">
              HELLO!
            </h2>
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              I'm <span className="text-accent">Pushkar Singhania</span>
            </h1>
          </div>

          {/* Typewriter Effect */}
          <div className="h-12 flex items-center justify-center lg:justify-start">
            <span className="text-xl lg:text-2xl text-primary-foreground/90 font-medium">
              {currentText}
              <span className="ml-1 w-0.5 h-6 bg-accent inline-block animate-blink"></span>
            </span>
          </div>

          <p className="text-lg text-primary-foreground/80 max-w-2xl leading-relaxed">
            B.Tech student in Electrical and Computer Science at VIT Chennai. I'm passionate about building practical tech solutions and exploring the intersection of hardware and software. Currently diving into web development and strengthening my foundation in data structures and algorithms.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent-warm font-medium px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-medium"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-accent/20 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-medium px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <a
                href="/Pushkar_Singhania_Resume.pdf"
                 target="_blank"
                 rel="noopener noreferrer"
            >
                  Download Resume
              </a>
            </Button>

          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end animate-slide-in-right">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-strong">
              <img 
                src="/lovable-uploads/05db408a-1d85-4166-9ce1-3d08f23c8e88.png" 
                alt="Pushkar Singhania"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full opacity-20 animate-bounce-gentle"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent rounded-full opacity-30 animate-pulse-soft"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <button 
          onClick={() => scrollToSection('about')}
          className="text-accent hover:text-primary-foreground transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;