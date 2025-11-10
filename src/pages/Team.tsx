import { useState } from "react";
import { Linkedin, Mail, Plus, Edit, Trash2, Upload, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Team = () => {
  const { toast } = useToast();
  
  const [team, setTeam] = useState([
    {
      id: 1,
      name: "Charan R",
      role: "Associate Software Engineer",
      bio: "Passionate developer building innovative solutions with cutting-edge technologies.",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      id: 2,
      name: "Samyuktha K",
      role: "Associate Software Engineer",
      bio: "Creative problem solver dedicated to delivering high-quality software solutions.",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      id: 3,
      name: "Kishore M",
      role: "Associate Software Engineer",
      bio: "Tech enthusiast committed to excellence in software development and innovation.",
      color: "from-green-500/20 to-emerald-500/20",
    },
  ]);

  const [culturePhotos, setCulturePhotos] = useState<string[]>([]);
  const [isAddingMember, setIsAddingMember] = useState(false);
  const [editingMember, setEditingMember] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", role: "", bio: "" });

  const colors = [
    "from-blue-500/20 to-cyan-500/20",
    "from-purple-500/20 to-pink-500/20",
    "from-green-500/20 to-emerald-500/20",
    "from-orange-500/20 to-red-500/20",
    "from-teal-500/20 to-cyan-500/20",
    "from-indigo-500/20 to-purple-500/20",
  ];

  const handleAddMember = () => {
    if (formData.name && formData.role && formData.bio) {
      const newMember = {
        id: Date.now(),
        ...formData,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
      setTeam([...team, newMember]);
      setFormData({ name: "", role: "", bio: "" });
      setIsAddingMember(false);
      toast({ title: "Team member added successfully!" });
    }
  };

  const handleEditMember = (id: number) => {
    const member = team.find((m) => m.id === id);
    if (member) {
      setFormData({ name: member.name, role: member.role, bio: member.bio });
      setEditingMember(id);
    }
  };

  const handleUpdateMember = () => {
    if (formData.name && formData.role && formData.bio && editingMember) {
      setTeam(team.map((m) => (m.id === editingMember ? { ...m, ...formData } : m)));
      setFormData({ name: "", role: "", bio: "" });
      setEditingMember(null);
      toast({ title: "Team member updated successfully!" });
    }
  };

  const handleDeleteMember = (id: number) => {
    setTeam(team.filter((m) => m.id !== id));
    toast({ title: "Team member removed successfully!" });
  };

  const handleAddPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCulturePhotos([...culturePhotos, reader.result as string]);
        toast({ title: "Photo added successfully!" });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeletePhoto = (index: number) => {
    setCulturePhotos(culturePhotos.filter((_, i) => i !== index));
    toast({ title: "Photo removed successfully!" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
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
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-foreground">Our Team</h2>
            <Button onClick={() => setIsAddingMember(true)} className="bg-primary hover:bg-primary/90">
              <Plus size={18} className="mr-2" />
              Add Member
            </Button>
          </div>

          {/* Add/Edit Member Form */}
          {(isAddingMember || editingMember) && (
            <Card className="p-6 mb-8 bg-card/50 backdrop-blur-sm border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">
                {editingMember ? "Edit Team Member" : "Add New Team Member"}
              </h3>
              <div className="space-y-4">
                <Input
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background/50 border-border"
                />
                <Input
                  placeholder="Role"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="bg-background/50 border-border"
                />
                <Textarea
                  placeholder="Bio"
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  className="bg-background/50 border-border"
                  rows={3}
                />
                <div className="flex gap-2">
                  <Button
                    onClick={editingMember ? handleUpdateMember : handleAddMember}
                    className="bg-primary hover:bg-primary/90"
                  >
                    {editingMember ? "Update" : "Add"}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsAddingMember(false);
                      setEditingMember(null);
                      setFormData({ name: "", role: "", bio: "" });
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </Card>
          )}

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
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <button className="w-10 h-10 rounded-lg bg-secondary/50 hover:bg-primary/20 flex items-center justify-center transition-colors group">
                        <Linkedin size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                      </button>
                      <button className="w-10 h-10 rounded-lg bg-secondary/50 hover:bg-primary/20 flex items-center justify-center transition-colors group">
                        <Mail size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                      </button>
                    </div>
                    <div className="flex space-x-1">
                      <button
                        onClick={() => handleEditMember(member.id)}
                        className="w-8 h-8 rounded-lg bg-secondary/50 hover:bg-primary/20 flex items-center justify-center transition-colors"
                      >
                        <Edit size={14} className="text-muted-foreground hover:text-primary" />
                      </button>
                      <button
                        onClick={() => handleDeleteMember(member.id)}
                        className="w-8 h-8 rounded-lg bg-secondary/50 hover:bg-red-500/20 flex items-center justify-center transition-colors"
                      >
                        <Trash2 size={14} className="text-muted-foreground hover:text-red-500" />
                      </button>
                    </div>
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
            
            {/* Culture Photos */}
            {culturePhotos.length > 0 && (
              <div className="mb-12">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground">Culture Gallery</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {culturePhotos.map((photo, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={photo}
                        alt={`Culture ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <button
                        onClick={() => handleDeletePhoto(index)}
                        className="absolute top-2 right-2 w-8 h-8 bg-red-500/80 hover:bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X size={16} className="text-white" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="mb-8 text-center">
              <label className="cursor-pointer">
                <Button className="bg-primary hover:bg-primary/90">
                  <Upload size={18} className="mr-2" />
                  Add Culture Photo
                </Button>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAddPhoto}
                  className="hidden"
                />
              </label>
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

      <Footer />
    </div>
  );
};

export default Team;
