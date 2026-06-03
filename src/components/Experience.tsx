import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "B.Tech in Electrical and Computer Science Engineering",
      company: "Vellore Institute of Technology, Chennai",
      period: "2024 - 2028",
      description: "Pursuing my undergraduate degree with a strong focus on programming, data structures, algorithms, and full-stack development.",
      achievements: [
        "CGPA: 9.20 / 10",
        "Strong foundation in Java, Python, DSA, OOP, and SQL",
        "Building full-stack web apps, REST APIs, and ML solutions"
      ],
      type: "education"
    },
    {
      title: "Higher Secondary Education (Class XII)",
      company: "GD Birla Centre for Education, Kolkata",
      period: "2024",
      description: "Completed Class XII with a focus on science and mathematics, building the foundation for engineering studies.",
      achievements: [
        "Scored 92% in Class XII board examinations",
        "School Prefect — selected for leadership and communication skills"
      ],
      type: "education"
    },
    {
      title: "Secondary Education (Class X)",
      company: "Sacred Heart School",
      period: "2022",
      description: "Completed Class X with strong academic performance across all subjects.",
      achievements: [
        "Scored 88% in Class X board examinations"
      ],
      type: "education"
    },
    {
      title: "Media and Creative Head",
      company: "IE(I) Student Chapter, VIT Chennai",
      period: "2024 - Present",
      description: "Leading media initiatives and creative direction for the student chapter, coordinating teams to produce engaging digital content for technical events.",
      achievements: [
        "Led media for 5+ technical workshops and events",
        "Coordinated cross-functional teams to deliver digital content",
        "Managed promotional campaigns to improve student engagement"
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
            My academic journey and leadership experience
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
                            {exp.type === 'education' ? 'Education' : 'Experience'}
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
