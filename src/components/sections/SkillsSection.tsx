import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { skillsData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <Container>
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
            Technical Skills
          </h2>
          <Separator className="w-20 h-1 bg-primary rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground max-w-[800px]">
            My expertise in automation technologies and tools allows me to create efficient, scalable solutions that bridge the gap between code and no-code approaches.
          </p>
        </div>

        <Tabs defaultValue="programming" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="programming">Programming</TabsTrigger>
            <TabsTrigger value="automation">No-Code/Low-Code</TabsTrigger>
            <TabsTrigger value="other">Other Skills</TabsTrigger>
          </TabsList>
          
          <TabsContent value="programming" className="space-y-8">
            <div className="grid gap-6">
              {skillsData.programmingLanguages.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <h3 className="text-lg font-medium mb-4">Programming Applications</h3>
              <div className="flex flex-wrap gap-3">
                <Badge className="px-3 py-1">API Development</Badge>
                <Badge className="px-3 py-1">Data Processing</Badge>
                <Badge className="px-3 py-1">Web Development</Badge>
                <Badge className="px-3 py-1">Excel VBA Automation</Badge>
                <Badge className="px-3 py-1">FastAPI</Badge>
                <Badge className="px-3 py-1">Next.js</Badge>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="automation" className="space-y-8">
            <div className="grid gap-6">
              {skillsData.automationTools.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <h3 className="text-lg font-medium mb-4">Automation Use Cases</h3>
              <div className="flex flex-wrap gap-3">
                <Badge className="px-3 py-1">Client Onboarding</Badge>
                <Badge className="px-3 py-1">Workflow Automation</Badge>
                <Badge className="px-3 py-1">Data Integration</Badge>
                <Badge className="px-3 py-1">Business Process Automation</Badge>
                <Badge className="px-3 py-1">CRM Automation</Badge>
                <Badge className="px-3 py-1">Form & Survey Processing</Badge>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="other" className="space-y-8">
            <div className="grid gap-6">
              {skillsData.otherSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <h3 className="text-lg font-medium mb-4">Other Expertise</h3>
              <div className="flex flex-wrap gap-3">
                <Badge className="px-3 py-1">Process Optimization</Badge>
                <Badge className="px-3 py-1">Data Visualization</Badge>
                <Badge className="px-3 py-1">Technical Documentation</Badge>
                <Badge className="px-3 py-1">AI-Assisted Development</Badge>
                <Badge className="px-3 py-1">System Integration</Badge>
                <Badge className="px-3 py-1">Problem Solving</Badge>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 p-6 bg-muted/30 rounded-lg border border-border max-w-4xl mx-auto">
          <h3 className="text-xl font-medium mb-4">My Automation Philosophy</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-primary"
                >
                  <path d="M12 2v4" />
                  <path d="M12 18v4" />
                  <path d="m4.93 4.93 2.83 2.83" />
                  <path d="m16.24 16.24 2.83 2.83" />
                  <path d="M2 12h4" />
                  <path d="M18 12h4" />
                  <path d="m4.93 19.07 2.83-2.83" />
                  <path d="m16.24 7.76 2.83-2.83" />
                </svg>
              </div>
              <h4 className="font-medium">Simplify First</h4>
              <p className="text-sm text-muted-foreground">Before automating, I focus on simplifying the process to ensure maximum efficiency with minimal complexity.</p>
            </div>
            
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-primary"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M8 12h8" />
                  <path d="M12 8v8" />
                </svg>
              </div>
              <h4 className="font-medium">Right Tool for the Job</h4>
              <p className="text-sm text-muted-foreground">I blend code and no-code solutions to deliver the most efficient and maintainable automation for each unique situation.</p>
            </div>
            
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-primary"
                >
                  <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                  <path d="M10 2c1 .5 2 2 2 5" />
                </svg>
              </div>
              <h4 className="font-medium">Sustainable Growth</h4>
              <p className="text-sm text-muted-foreground">I build solutions that scale with your business and adapt to changing requirements without requiring constant maintenance.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
} 