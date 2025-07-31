import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Student",
      company: "VIT Chennai",
      period: "2022 - Present",
      description: "B.Tech in Electrical and Computer Science Engineering. Focusing on data structures, algorithms, web development, and competitive programming.",
      achievements: [
        "Maintained high academic performance",
        "Active participant in coding competitions",
        "Member of technical clubs and societies"
      ],
      type: "education"
    },
    {
      title: "Competitive Programmer",
      company: "Self-Learning",
      period: "2021 - Present",
      description: "Actively solving algorithmic problems on various platforms to improve problem-solving skills and programming proficiency.",
      achievements: [
        "Solved 500+ problems across platforms",
        "Participated in multiple coding contests",
        "Strong foundation in DSA concepts"
      ],
      type: "development"
    },
    {
      title: "Web Development Journey",
      company: "Self-Learning",
      period: "2023 - Present",
      description: "Learning and building web applications using modern technologies like React, JavaScript, and various frameworks.",
      achievements: [
        "Built multiple personal projects",
        "Learning full-stack development",
        "Exploring modern web technologies"
      ],
      type: "development"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Experience & <span className="text-primary">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey in technology, learning, and skill development
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 animate-fade-in-up ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Timeline Node */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content */}
                <div className="lg:w-5/12">
                  <Card className="bg-card border-border hover:shadow-medium transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-start justify-between flex-wrap gap-2">
                          <div>
                            <h3 className="text-xl font-semibold text-card-foreground">{exp.title}</h3>
                            <p className="text-primary font-medium">{exp.company}</p>
                          </div>
                          <span className="text-muted-foreground text-sm bg-muted px-3 py-1 rounded-full">
                            {exp.period}
                          </span>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>

                        <div className="space-y-2">
                          <h4 className="font-medium text-card-foreground">Key Highlights:</h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                                <span className="text-primary mt-2">•</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-2">
                          <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                            exp.type === 'education' 
                              ? 'bg-blue-100 text-blue-800' 
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {exp.type === 'education' ? 'Education' : 'Development'}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for timeline */}
                <div className="hidden lg:block lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;