import { useState } from "react";
import { Linkedin, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Team = () => {
  
  const [team, setTeam] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in tech industry",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      bio: "Expert in scalable architecture and cloud solutions",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Lead Designer",
      bio: "Award-winning designer focused on user experience",
      color: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Senior Developer",
      bio: "Full-stack developer with passion for innovation",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Marketing Director",
      bio: "Strategic marketing expert with proven track record",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Operations Manager",
      bio: "Efficiency expert ensuring smooth operations",
      color: "from-yellow-500 to-orange-500"
    }
  ]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary/20 via-background to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Meet Our <span className="text-primary">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Talented professionals dedicated to delivering exceptional results and driving your success.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Our Team</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all group"
              >
                <div
                  className={`h-64 bg-gradient-to-br ${member.color} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-background/20" />
                  <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform">
                    <span className="text-5xl font-bold text-primary">{member.name.charAt(0)}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <div className="text-primary font-medium mb-3">{member.role}</div>
                  <p className="text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex space-x-2">
                    <button className="w-10 h-10 rounded-lg bg-secondary/50 hover:bg-primary/20 flex items-center justify-center transition-colors group">
                      <Linkedin size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    </button>
                    <button className="w-10 h-10 rounded-lg bg-secondary/50 hover:bg-primary/20 flex items-center justify-center transition-colors group">
                      <Mail size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Culture</h2>
              <p className="text-xl text-muted-foreground">
                What makes Speshway a great place to work and grow
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Innovation First</h3>
                <p className="text-muted-foreground">
                  We encourage creativity and embrace new technologies
                </p>
              </Card>
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Collaboration</h3>
                <p className="text-muted-foreground">
                  Team work and knowledge sharing are at our core
                </p>
              </Card>
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Growth Mindset</h3>
                <p className="text-muted-foreground">
                  Continuous learning and development opportunities
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Photos Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Life at Speshway</h2>
            <p className="text-xl text-muted-foreground">
              Get a glimpse into our vibrant workplace culture and team activities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative overflow-hidden rounded-lg aspect-square">
              <img 
                src="/placeholder.svg" 
                alt="Team collaboration session" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Team Collaboration</h3>
                  <p className="text-sm opacity-90">Working together on innovative projects</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg aspect-square">
              <img 
                src="/placeholder.svg" 
                alt="Office workspace" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Modern Workspace</h3>
                  <p className="text-sm opacity-90">Comfortable and inspiring environment</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg aspect-square">
              <img 
                src="/placeholder.svg" 
                alt="Team celebration" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Celebrating Success</h3>
                  <p className="text-sm opacity-90">Milestones and achievements</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg aspect-square">
              <img 
                src="/placeholder.svg" 
                alt="Team learning session" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Learning & Growth</h3>
                  <p className="text-sm opacity-90">Continuous skill development</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg aspect-square">
              <img 
                src="/placeholder.svg" 
                alt="Team building activity" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Team Building</h3>
                  <p className="text-sm opacity-90">Fun activities and bonding</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg aspect-square">
              <img 
                src="/placeholder.svg" 
                alt="Innovation workshop" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Innovation Workshops</h3>
                  <p className="text-sm opacity-90">Creative problem solving</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg aspect-square">
              <img 
                src="/placeholder.svg" 
                alt="Office amenities" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Great Amenities</h3>
                  <p className="text-sm opacity-90">Comfort and convenience</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg aspect-square">
              <img 
                src="/placeholder.svg" 
                alt="Diversity and inclusion" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Diversity & Inclusion</h3>
                  <p className="text-sm opacity-90">Celebrating our differences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
