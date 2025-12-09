import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import api from '@/lib/api';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { ScrollReveal } from '@/components/animations';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ManageJobs = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<any>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    type: 'full_time',
    experience: '',
    department: '',
    status: 'open',
  });
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: jobs, isLoading } = useQuery({
    queryKey: ['jobs'],
    queryFn: () => api.get('/jobs').then(res => res.data),
  });

  const createMutation = useMutation({
    mutationFn: (data: any) => api.post('/jobs', data),
    onSuccess: (response) => {
      const newJob = response.data?.data || response.data;
      queryClient.setQueryData(['jobs'], (old: any) => old ? [newJob, ...old] : [newJob]);
      toast({ title: 'Job created successfully' });
      resetForm();
      setIsDialogOpen(false);
    },
    onError: (error: any) => {
      toast({ title: 'Error creating job', description: error.response?.data?.message || 'Failed to create job', variant: 'destructive' });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) => api.put(`/jobs/${id}`, data),
    onSuccess: (response, variables) => {
      const updatedJob = response.data?.data || response.data;
      queryClient.setQueryData(['jobs'], (old: any) => old ? old.map((j: any) => j._id === variables.id ? updatedJob : j) : [updatedJob]);
      toast({ title: 'Job updated successfully' });
      resetForm();
      setIsDialogOpen(false);
    },
    onError: (error: any) => {
      toast({ title: 'Error updating job', description: error.response?.data?.message || 'Failed to update job', variant: 'destructive' });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => api.delete(`/jobs/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
      toast({ title: 'Job deleted successfully' });
    },
    onError: (error: any) => {
      toast({ title: 'Error deleting job', description: error.response?.data?.message || 'Failed to delete job', variant: 'destructive' });
    },
  });

  const resetForm = () => {
    setEditingJob(null);
    setFormData({ title: '', description: '', location: '', type: 'full_time', experience: '', department: '', status: 'open' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingJob) {
      updateMutation.mutate({ id: editingJob._id, data: formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  const handleEdit = (job: any) => {
    setEditingJob(job);
    setFormData({
      title: job.title || '',
      description: job.description || '',
      location: job.location || '',
      type: job.type || 'full_time',
      experience: job.experience || '',
      department: job.department || '',
      status: job.status || 'open',
    });
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Admin – Manage Jobs | Speshway Solutions</title>
        <meta name="robots" content="noindex,nofollow" />
        <link rel="canonical" href="https://www.speshway.com/admin/jobs" />
      </Helmet>
      <Navbar />

      <section className="pt-28 sm:pt-32 pb-12 sm:pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-foreground">Manage Jobs</h1>
            <p className="text-muted-foreground">Create and update job postings</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button variant="ghost" onClick={() => navigate('/admin/dashboard')}>
                Back to Dashboard
              </Button>
              <Button variant="outline" onClick={() => navigate('/career')}>View Career Page</Button>
              <Button onClick={() => { resetForm(); setIsDialogOpen(true); }}>Add Job</Button>
            </div>
          </div>

          <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading ? (
              <Card className="p-6">Loading...</Card>
            ) : jobs && jobs.length > 0 ? (
              jobs.map((job: any) => (
                <Card key={job._id} className="p-6 border-border bg-card/50">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-foreground">{job.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded ${job.status === 'open' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-700'}`}>{job.status}</span>
                  </div>
                  {typeof job.jobNumber === 'number' && (<p className="text-xs text-muted-foreground mb-1">Job # {job.jobNumber}</p>)}
                  {job.experience && <p className="text-sm text-muted-foreground mb-2">Experience: {job.experience}</p>}
                  <p className="text-sm text-muted-foreground line-clamp-3">{job.description}</p>
                  <div className="mt-4 flex gap-3">
                    <Button variant="outline" onClick={() => handleEdit(job)}>Edit</Button>
                    <Button variant="destructive" onClick={() => deleteMutation.mutate(job._id)}>Delete</Button>
                  </div>
                </Card>
              ))
            ) : (
              <Card className="p-6">No jobs posted yet</Card>
            )}
          </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingJob ? 'Edit Job' : 'Add New Job'}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="title">Job Title *</Label>
              <Input id="title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required />
            </div>
            <div>
              <Label htmlFor="description">Job Description *</Label>
              <Textarea id="description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} rows={6} required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="location">Location</Label>
                <Input id="location" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} />
              </div>
              <div>
                <Label htmlFor="type">Type</Label>
                <select
                  id="type"
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="full_time">Full-time</option>
                  <option value="part_time">Part-time</option>
                  <option value="contract">Contract</option>
                  <option value="internship">Internship</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="experience">Experience</Label>
                <Input id="experience" value={formData.experience} onChange={(e) => setFormData({ ...formData, experience: e.target.value })} />
              </div>
              <div>
                <Label htmlFor="department">Department</Label>
                <Input id="department" value={formData.department} onChange={(e) => setFormData({ ...formData, department: e.target.value })} />
              </div>
            </div>
            <div>
              <Label htmlFor="status">Status</Label>
              <select
                id="status"
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="open">Open</option>
                <option value="closed">Closed</option>
              </select>
            </div>
            <div className="flex justify-end gap-3">
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
              <Button type="submit">{editingJob ? 'Update Job' : 'Create Job'}</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ManageJobs;
