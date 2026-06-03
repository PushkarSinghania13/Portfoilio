import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: "FinSight – Financial Document Analysis Platform",
      description: "A full-stack web platform for financial document processing and structured data visualization. Integrated OCR-based extraction workflows with REST APIs and reusable, responsive frontend components.",
      tech: ["React", "Node.js", "Express", "Tailwind CSS", "OCR"],
    },
    {
      title: "DoseWise – Insulin Management System",
      description: "A healthcare management platform for insulin tracking and glucose data analysis. Built FastAPI backend for user workflows and structured relational schemas in PostgreSQL for secure data storage.",
      tech: ["React", "FastAPI", "PostgreSQL"],
    },
    {
      title: "AI-Based Fault Detection in Electrical Machines",
      description: "A machine learning pipeline to classify electrical machine faults using sensor datasets. Applied preprocessing, feature extraction, and classification techniques.",
      tech: ["Python", "Scikit-learn", "Machine Learning"],
    },
    {
      title: "Drowsiness Detection Smart Glasses",
      description: "A wearable embedded system for driver drowsiness monitoring using sensors and Arduino. Configured alert mechanisms via microcontroller programming and real-time signal analysis.",
      tech: ["Arduino", "Embedded C", "Sensors"],
    },
    {
      title: "Audio Signal Processing and Analysis",
      description: "Analyzed audio signals using FFT, filtering, and waveform visualization in MATLAB. Performed frequency-domain analysis and signal enhancement for multiple audio inputs.",
      tech: ["MATLAB", "DSP", "FFT"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects that showcase my skills across full-stack development, ML, and embedded systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-card border-border hover:shadow-strong transition-all duration-300 hover:scale-105 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader>
                <h3 className="text-xl font-semibold text-card-foreground">{project.title}</h3>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
