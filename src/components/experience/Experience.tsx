import { experience } from '../../data/experience';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { ExperienceItem } from './ExperienceItem';

export function Experience() {
  return (
    <section
      id="experience"
      className="section-shell deferred-section border-y border-border bg-surface/20"
      aria-labelledby="experience-title"
    >
      <Container>
        <div id="experience-title">
          <SectionHeading
            eyebrow="Experience"
            title={
              <>
                A Journey<span className="mt-3 block gradient-text">of Growth.</span>
              </>
            }
          />
        </div>
        <ol className="timeline relative mt-10 space-y-10 md:mt-12 md:space-y-12">
          {experience.map((item, index) => (
            <ExperienceItem key={item.id} item={item} index={index} />
          ))}
        </ol>
      </Container>
    </section>
  );
}
