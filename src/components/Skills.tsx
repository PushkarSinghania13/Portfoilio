import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Reveal from '@/components/Reveal';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'C', level: 80 },
      { name: 'JavaScript', level: 80 },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'React', level: 85 },
      { name: 'Node.js', level: 75 },
      { name: 'Express.js', level: 75 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    title: 'Databases & Tools',
    skills: [
      { name: 'MySQL', level: 80 },
      { name: 'Git/GitHub', level: 85 },
      { name: 'VS Code', level: 95 },
      { name: 'Vite', level: 80 },
    ],
  },
  {
    title: 'Core CS',
    skills: [
      { name: 'Data Structures', level: 85 },
      { name: 'Algorithms', level: 80 },
      { name: 'OOP', level: 85 },
      { name: 'REST APIs', level: 75 },
    ],
  },
];

const SkillCard = ({ category, index }: { category: typeof skillCategories[number]; index: number }) => {
  const { ref, visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.25 });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => setAnimate(true), 150);
      return () => clearTimeout(t);
    }
  }, [visible]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <Card className="bg-card border-border hover:shadow-medium transition-all duration-300 hover:-translate-y-2 h-full">
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
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full transition-[width] duration-1000 ease-out"
                    style={{ width: animate ? `${skill.level}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
