import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Mail } from 'lucide-react';

const phrases = ['Competitive Programmer', 'Web Developer', 'Problem Solver'];

const Hero = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

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
      } else if (currentText.length > 0) {
        setCurrentText(currentText.slice(0, -1));
      } else {
        setIsDeleting(false);
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
      }
    }, typeSpeed);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentPhrase]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen pt-24 lg:pt-28 pb-16 bg-gradient-primary flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-soft"></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-soft"
          style={{ animationDelay: '1s' }}
        ></div>
        <div className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--accent)) 1.5px, transparent 1.5px)`,
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10">
        <div className="text-center lg:text-left space-y-6 animate-fade-in-up order-2 lg:order-1">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-accent opacity-90 tracking-wide">
              HELLO!
            </h2>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              I'm <span className="text-accent">Pushkar Singhania</span>
            </h1>
          </div>

          <div className="h-12 flex items-center justify-center lg:justify-start">
            <span className="text-lg sm:text-xl lg:text-2xl text-primary-foreground/90 font-medium">
              {currentText}
              <span className="ml-1 w-0.5 h-6 bg-accent inline-block animate-blink"></span>
            </span>
          </div>

          <p className="text-base sm:text-lg text-primary-foreground/80 max-w-2xl leading-relaxed mx-auto lg:mx-0">
            B.Tech student in Electrical and Computer Science at VIT Chennai. I'm passionate about building practical tech solutions and exploring the intersection of hardware and software. Currently diving into web development and strengthening my foundation in data structures and algorithms.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent-warm font-medium px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-medium group"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              Get In Touch
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-medium px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 group"
            >
              <a href="/Pushkar_Singhania_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end animate-scale-in order-1 lg:order-2">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-tr from-accent/40 to-transparent rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-strong ring-4 ring-accent/30 relative">
              <img
                src="/lovable-uploads/05db408a-1d85-4166-9ce1-3d08f23c8e88.png"
                alt="Pushkar Singhania"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-accent rounded-full opacity-20 animate-bounce-gentle"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 sm:w-16 sm:h-16 bg-accent rounded-full opacity-30 animate-pulse-soft"></div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('skills')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-accent hover:text-primary-foreground transition-colors animate-bounce-gentle"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;
