import { ReactNode, CSSProperties } from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'scale' | 'fade';
  as?: 'div' | 'section' | 'article' | 'li';
}

const variants: Record<NonNullable<RevealProps['direction']>, string> = {
  up: 'translate-y-8',
  left: '-translate-x-8',
  right: 'translate-x-8',
  scale: 'scale-95',
  fade: '',
};

const Reveal = ({ children, className, delay = 0, direction = 'up', as: Tag = 'div' }: RevealProps) => {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const style: CSSProperties = { transitionDelay: `${delay}ms` };

  return (
    <Tag
      ref={ref as never}
      style={style}
      className={cn(
        'transition-all duration-700 ease-out will-change-transform',
        visible ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : `opacity-0 ${variants[direction]}`,
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
