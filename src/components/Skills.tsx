import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
{
title: "Programming Languages",
skills: [
{ name: "Java", level: 90 },
{ name: "Python", level: 85 },
{ name: "C", level: 80 },
{ name: "JavaScript", level: 80 }
]
},
{
title: "Web Development",
skills: [
{ name: "React", level: 85 },
{ name: "Node.js", level: 75 },
{ name: "Express.js", level: 75 },
{ name: "Tailwind CSS", level: 85 }
]
},
{
title: "Databases & Tools",
skills: [
{ name: "MySQL", level: 80 },
{ name: "Git/GitHub", level: 85 },
{ name: "VS Code", level: 95 },
{ name: "Vite", level: 80 }
]
},
{
title: "Core CS",
skills: [
{ name: "Data Structures", level: 85 },
{ name: "Algorithms", level: 80 },
{ name: "OOP", level: 85 },
{ name: "REST APIs", level: 75 }
]
}
];


  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="bg-card border-border hover:shadow-medium transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-card-foreground font-medium">{skill.name}</span>
                        <span className="text-muted-foreground text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${index * 0.3}s`
                          }}
                        ></div>
                      </div>
                    </div>
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

export default Skills;