import { Card, CardContent } from '@/components/ui/card';
import Reveal from '@/components/Reveal';
import { GraduationCap, Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'B.Tech in Electrical and Computer Science Engineering',
    company: 'Vellore Institute of Technology, Chennai',
    period: '2024 - 2028',
    description:
      'Pursuing my undergraduate degree with a strong focus on programming, data structures, algorithms, and full-stack development.',
    achievements: [
      'CGPA: 9.20 / 10',
      'Strong foundation in Java, Python, DSA, OOP, and SQL',
      'Building full-stack web apps, REST APIs, and ML solutions',
    ],
    type: 'education',
  },
  {
    title: 'Higher Secondary Education (Class XII)',
    company: 'GD Birla Centre for Education, Kolkata',
    period: '2024',
    description:
      'Completed Class XII with a focus on science and mathematics, building the foundation for engineering studies.',
    achievements: [
      'Scored 92% in Class XII board examinations',
      'School Prefect — selected for leadership and communication skills',
    ],
    type: 'education',
  },
  {
    title: 'Secondary Education (Class X)',
    company: 'Sacred Heart School',
    period: '2022',
    description: 'Completed Class X with strong academic performance across all subjects.',
    achievements: ['Scored 88% in Class X board examinations'],
    type: 'education',
  },
  {
    title: 'Media and Creative Head',
    company: 'IE(I) Student Chapter, VIT Chennai',
    period: '2024 - Present',
    description:
      'Leading media initiatives and creative direction for the student chapter, coordinating teams to produce engaging digital content for technical events.',
    achievements: [
      'Led media for 5+ technical workshops and events',
      'Coordinated cross-functional teams to deliver digital content',
      'Managed promotional campaigns to improve student engagement',
    ],
    type: 'development',
  },
] as const;

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Experience & <span className="text-primary">Education</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic journey and leadership experience
          </p>
        </Reveal>

        <div className="relative">
          {/* Timeline line - left on mobile, center on desktop */}
          <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-primary/40 via-primary/20 to-transparent"></div>

          <div className="space-y-10 lg:space-y-16">
            {experiences.map((exp, index) => {
              const Icon = exp.type === 'education' ? GraduationCap : Briefcase;
              const isRight = index % 2 === 0;
              return (
                <Reveal
                  key={index}
                  delay={index * 100}
                  direction={isRight ? 'right' : 'left'}
                  className="relative"
                >
                  <div
                    className={`flex flex-col lg:flex-row gap-6 items-start ${
                      isRight ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Node */}
                    <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 -translate-y-0 w-8 h-8 bg-primary text-primary-foreground rounded-full border-4 border-background z-10 flex items-center justify-center shadow-medium">
                      <Icon className="w-4 h-4" />
                    </div>

                    {/* Spacer for mobile to push card right of timeline */}
                    <div className="lg:hidden w-12 shrink-0"></div>

                    <div className="flex-1 lg:w-5/12 lg:flex-initial pl-0">
                      <Card className="bg-card border-border hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <div className="flex items-start justify-between flex-wrap gap-2">
                              <div>
                                <h3 className="text-lg sm:text-xl font-semibold text-card-foreground">
                                  {exp.title}
                                </h3>
                                <p className="text-primary font-medium">{exp.company}</p>
                              </div>
                              <span className="text-muted-foreground text-xs sm:text-sm bg-muted px-3 py-1 rounded-full whitespace-nowrap">
                                {exp.period}
                              </span>
                            </div>

                            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                              {exp.description}
                            </p>

                            <ul className="space-y-1">
                              {exp.achievements.map((a, i) => (
                                <li
                                  key={i}
                                  className="text-muted-foreground text-sm flex items-start gap-2"
                                >
                                  <span className="text-primary mt-1.5 text-xs">●</span>
                                  {a}
                                </li>
                              ))}
                            </ul>

                            <span
                              className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                                exp.type === 'education'
                                  ? 'bg-primary/10 text-primary'
                                  : 'bg-accent-warm text-accent-foreground'
                              }`}
                            >
                              {exp.type === 'education' ? 'Education' : 'Experience'}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="hidden lg:block lg:w-5/12"></div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
