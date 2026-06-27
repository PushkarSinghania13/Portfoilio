import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Reveal from '@/components/Reveal';
import { Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'FinSight – Financial Document Analysis Platform',
    description:
      'A full-stack web platform for financial document processing and structured data visualization. Integrated OCR-based extraction workflows with REST APIs and reusable, responsive frontend components.',
    tech: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'OCR'],
  },
  {
    title: 'DoseWise – Insulin Management System',
    description:
      'A healthcare management platform for insulin tracking and glucose data analysis. Built FastAPI backend for user workflows and structured relational schemas in PostgreSQL for secure data storage.',
    tech: ['React', 'FastAPI', 'PostgreSQL'],
  },
  {
    title: 'AI-Based Fault Detection in Electrical Machines',
    description:
      'A machine learning pipeline to classify electrical machine faults using sensor datasets. Applied preprocessing, feature extraction, and classification techniques.',
    tech: ['Python', 'Scikit-learn', 'Machine Learning'],
  },
  {
    title: 'Drowsiness Detection Smart Glasses',
    description:
      'A wearable embedded system for driver drowsiness monitoring using sensors and Arduino. Configured alert mechanisms via microcontroller programming and real-time signal analysis.',
    tech: ['Arduino', 'Embedded C', 'Sensors'],
  },
  {
    title: 'Audio Signal Processing and Analysis',
    description:
      'Analyzed audio signals using FFT, filtering, and waveform visualization in MATLAB. Performed frequency-domain analysis and signal enhancement for multiple audio inputs.',
    tech: ['MATLAB', 'DSP', 'FFT'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects across full-stack development, ML, and embedded systems
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 100} direction="up">
              <Card className="group relative bg-card border-border transition-all duration-500 hover:-translate-y-2 hover:shadow-strong overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-primary-glow group-hover:w-full transition-all duration-500"></div>

                <CardHeader>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-primary mt-1 shrink-0 group-hover:rotate-12 transition-transform" />
                    <h3 className="text-lg sm:text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
