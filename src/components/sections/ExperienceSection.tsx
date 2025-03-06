import { Separator } from "@/components/ui/separator";
import { experienceData } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <Container>
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
            Work Experience
          </h2>
          <Separator className="w-20 h-1 bg-primary rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground max-w-[800px]">
            My professional journey in automation and development.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_4px_1fr] max-w-5xl mx-auto gap-8 relative">
          {/* Left column */}
          <div className="space-y-12">
            {experienceData
              .filter((_, index) => index % 2 === 0)
              .map((job, index) => (
                <Card key={index} className="relative">
                  <div className="absolute top-4 right-0 h-8 w-8 bg-primary/10 rounded-l-full flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-primary"></div>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold">{job.position}</h3>
                      <p className="text-muted-foreground">{job.company}</p>
                      <p className="text-sm text-muted-foreground">{job.duration}</p>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="details">
                        <AccordionTrigger className="text-sm font-medium">
                          View Responsibilities
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc list-inside space-y-2 mt-2 text-sm text-muted-foreground">
                            {job.description.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* Timeline */}
          <div className="hidden md:block relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-full w-[2px] bg-border"></div>
            </div>
            <div className="sticky top-[30vh] h-6 w-6 rounded-full bg-primary flex items-center justify-center z-10">
              <div className="h-3 w-3 rounded-full bg-background"></div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-12 md:mt-24">
            {experienceData
              .filter((_, index) => index % 2 === 1)
              .map((job, index) => (
                <Card key={index} className="relative">
                  <div className="absolute top-4 left-0 h-8 w-8 bg-primary/10 rounded-r-full flex items-center justify-center md:block hidden">
                    <div className="h-3 w-3 rounded-full bg-primary"></div>
                  </div>
                  <div className="absolute top-4 right-0 h-8 w-8 bg-primary/10 rounded-l-full flex items-center justify-center md:hidden">
                    <div className="h-3 w-3 rounded-full bg-primary"></div>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold">{job.position}</h3>
                      <p className="text-muted-foreground">{job.company}</p>
                      <p className="text-sm text-muted-foreground">{job.duration}</p>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="details">
                        <AccordionTrigger className="text-sm font-medium">
                          View Responsibilities
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc list-inside space-y-2 mt-2 text-sm text-muted-foreground">
                            {job.description.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        <div className="mt-20 max-w-3xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 to-background border-primary/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-4">Automation Impact Highlights</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Before Automation</h4>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Manual deployment process taking 2+ hours</li>
                    <li>20+ hours weekly on repetitive tasks</li>
                    <li>Error-prone manual testing cycles</li>
                    <li>Slow incident response</li>
                    <li>Complex system integration</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">After Automation</h4>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Automated deployments in under 30 minutes</li>
                    <li>95% reduction in manual task time</li>
                    <li>Consistent, reliable test coverage</li>
                    <li>Proactive monitoring and quick resolution</li>
                    <li>Seamless API-driven integrations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
} 