import { ExternalLink, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import { StaggerContainer, StaggerItem, HoverScale, FadeIn, ScrollReveal, ScrollParallaxItem } from "@/components/animations";
import { Helmet } from "react-helmet-async";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['portfolios'],
    queryFn: () => api.get('/portfolios').then(res => res.data),
  });

  const openProjectDetails = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center">Loading...</div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center text-red-500">Error loading projects</div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Projects | Speshway Solutions | Web & App Development Portfolio</title>
        <meta name="description" content="Explore our portfolio of software, app, and website development projects by Speshway Solutions, a top IT company in Hyderabad." />
        <meta name="keywords" content="Speshway projects, case studies, software solutions, client success, web development portfolio, app development projects, IT solution in hyderabad" />
        <link rel="canonical" href="https://www.speshway.com/projects" />
        <meta property="og:title" content="Projects | Speshway Solutions | Web & App Development Portfolio" />
        <meta property="og:description" content="See how we deliver reliable, scalable, and secure solutions in Hyderabad." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.speshway.com/projects" />
        <meta property="og:image" content="https://www.speshway.com/logo.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Projects | Speshway Solutions | Web & App Development Portfolio" />
        <meta name="twitter:description" content="See how we deliver reliable, scalable, and secure solutions in Hyderabad." />
        <script type="application/ld+json">{JSON.stringify({
          "@context":"https://schema.org",
          "@type":"BreadcrumbList",
          "itemListElement":[
            {"@type":"ListItem","position":1,"name":"Home","item":"https://www.speshway.com/"},
            {"@type":"ListItem","position":2,"name":"Projects","item":"https://www.speshway.com/projects"}
          ]
        })}</script>
      </Helmet>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              <span className="text-primary">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Showcasing our successful projects and the innovative solutions we've delivered for clients worldwide.
            </p>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {projects && projects.length > 0 ? (
            <StaggerContainer staggerDelay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
                {projects.map((project: any, index: number) => (
                  <StaggerItem key={project._id || index}>
                    <ScrollParallaxItem direction={index % 2 === 0 ? "left" : "right"} intensity="strong">
                      <HoverScale>
                      <Card
                        className="overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all group h-[380px] sm:h-[400px] lg:h-[420px] flex flex-col"
                      >
                  {project.image?.url ? (
                    <div className="h-64 sm:h-72 md:h-80 relative overflow-hidden bg-gradient-to-br from-background/20 to-background/10">
                      <img
                        src={project.image.url}
                        alt={project.title}
                        className="w-full h-full object-contain object-center group-hover:scale-[1.02] transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    </div>
                  ) : (
                    <div className={`h-64 sm:h-72 md:h-80 bg-gradient-to-br ${project.color || 'from-blue-500/20 to-cyan-500/20'} flex items-center justify-center relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-background/20" />
                      <div className="text-6xl font-bold text-primary/20 relative z-10">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                  )}
                  <div className="p-4 sm:p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm text-primary font-medium">{project.category}</div>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-secondary text-secondary-foreground">
                        {project.status === 'in_progress' ? 'In Progress' : project.status === 'completed' ? 'Completed' : 'Upcoming'}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-3 text-sm leading-snug max-h-16 overflow-hidden">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
                      {project.technologies?.map((tech: string, idx: number) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-secondary/50 rounded-full text-xs text-muted-foreground border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto">
                      <Button
                        variant="ghost"
                        className="mx-auto w-[150px] justify-center text-primary hover:text-primary hover:bg-primary/10"
                        onClick={() => openProjectDetails(project)}
                      >
                        View Details
                        <ExternalLink size={16} className="ml-2" />
                      </Button>
                    </div>
                  </div>
                      </Card>
                      </HoverScale>
                    </ScrollParallaxItem>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Project Success Metrics</h2>
              <p className="text-xl text-muted-foreground">Numbers that speak for our commitment to excellence</p>
            </div>
            <StaggerContainer staggerDelay={0.1}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: '98%', label: 'Client Satisfaction' },
                  { value: '500+', label: 'Projects Delivered' },
                  { value: '95%', label: 'On-Time Delivery' },
                  { value: '50+', label: 'Industries Served' },
                ].map((stat, idx) => (
                  <StaggerItem key={idx}>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </div>
      </section>

      <Footer />

      {/* Project Details Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-border animate-scale-in">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">{selectedProject.title}</h2>
                  <div className="text-sm text-primary font-medium">{selectedProject.category}</div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeModal}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X size={24} />
                </Button>
              </div>
              
              <div className="space-y-6">
                {selectedProject.image?.url && (
                  <div className="w-full h-72 rounded-lg overflow-hidden bg-gradient-to-br from-background/20 to-background/10">
                    <img
                      src={selectedProject.image.url}
                      alt={selectedProject.title}
                      className="w-full h-full object-contain object-center"
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Project Overview</h3>
                  <p className="text-muted-foreground leading-relaxed">{selectedProject.description}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies?.map((tech: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-secondary/50 rounded-full text-sm text-muted-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Key Features</h3>
                  {selectedProject.features && selectedProject.features.length > 0 ? (
                    <ul className="space-y-2 text-muted-foreground">
                      {selectedProject.features.map((f: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground">No features listed</p>
                  )}
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Project Results</h3>
                  {selectedProject.results && selectedProject.results.length > 0 ? (
                    <div className="grid grid-cols-2 gap-4">
                      {selectedProject.results.map((r: any, idx: number) => (
                        <div key={idx} className="bg-secondary/30 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-primary mb-1">{r.value}</div>
                          <div className="text-sm text-muted-foreground">{r.label}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">No results provided</p>
                  )}
                </div>
              </div>
              
              <div className="mt-8 flex gap-3">
                <Button 
                  variant="outline" 
                  onClick={closeModal}
                  className="flex-1"
                >
                  Close
                </Button>
                <Button className="flex-1" disabled={!selectedProject.demoUrl} onClick={() => {
                  if (selectedProject.demoUrl) {
                    window.open(selectedProject.demoUrl, '_blank');
                  }
                }}>
                  <ExternalLink size={16} className="mr-2" />
                  View Live Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
