import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'react-router-dom';
import api from '@/lib/api';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/animations';

const JobDetails = () => {
  const { id } = useParams();

  const { data: job, isLoading, error } = useQuery({
    queryKey: ['job', id],
    queryFn: () => api.get(`/jobs/${id}`).then(res => res.data),
    enabled: !!id,
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <Card className="p-6">Loading...</Card>
          ) : error ? (
            <Card className="p-6">Failed to load job</Card>
          ) : job ? (
            <ScrollReveal>
            <Card className="p-8 bg-card/50 border-border">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-1">{job.title}</h1>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                    {job.location && <span className="bg-secondary/30 px-2 py-1 rounded">{job.location}</span>}
                    {job.type && <span className="bg-secondary/30 px-2 py-1 rounded">{String(job.type).replace('_',' ')}</span>}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-xs px-2 py-1 rounded ${job.status === 'open' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-700'}`}>{job.status}</span>
                  <Link to={`/send-resume?position=${encodeURIComponent(job.title)}`}>
                    <Button className="bg-primary">Apply Now</Button>
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <div className="space-y-4">
                      <div className="grid grid-cols-[160px_1fr] items-center gap-4">
                        <div className="font-semibold text-foreground">Job Title:</div>
                        <div className="text-muted-foreground">{job.title}</div>
                      </div>
                      {job.location && (
                        <div className="grid grid-cols-[160px_1fr] items-center gap-4">
                          <div className="font-semibold text-foreground">Location:</div>
                          <div className="text-muted-foreground">{job.location}</div>
                        </div>
                      )}
                      {job.experience && (
                        <div className="grid grid-cols-[160px_1fr] items-center gap-4">
                          <div className="font-semibold text-foreground">Experience:</div>
                          <div className="text-muted-foreground">{job.experience}</div>
                        </div>
                      )}
                    <div>
                      <h2 className="font-semibold text-foreground">Summary:</h2>
                      <div className="prose prose-invert max-w-none text-muted-foreground">
                        <p className="whitespace-pre-wrap">{job.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <Card className="p-6 bg-card border-border">
                    <h3 className="text-lg font-semibold mb-4">Key job details</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between"><span className="text-muted-foreground">Job number:</span><span className="font-medium">{job.jobNumber ?? '-'}</span></div>
                      {job.department && <div className="flex justify-between"><span className="text-muted-foreground">Job category:</span><span className="font-medium">{job.department}</span></div>}
                      {job.location && <div className="flex justify-between"><span className="text-muted-foreground">Location:</span><span className="font-medium">{job.location}</span></div>}
                      {job.postedAt && <div className="flex justify-between"><span className="text-muted-foreground">Date published:</span><span className="font-medium">{new Date(job.postedAt).toLocaleDateString()}</span></div>}
                      {job.type && <div className="flex justify-between"><span className="text-muted-foreground">Employment type:</span><span className="font-medium capitalize">{String(job.type).replace('_',' ')}</span></div>}
                    </div>
                  </Card>
                </div>
              </div>
            </Card>
            </ScrollReveal>
          ) : (
            <Card className="p-6">Job not found</Card>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobDetails;
