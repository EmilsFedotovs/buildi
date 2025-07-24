import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Calendar, 
  DollarSign, 
  Clock, 
  Building,
  Star,
  Users
} from "lucide-react";

const JobPreview = () => {
  const sampleJobs = [
    {
      id: 1,
      title: "Experienced Electrician - Commercial Project",
      company: "Metro Construction Group",
      location: "Downtown Seattle, WA",
      type: "Full-time",
      pay: "$45-65/hour",
      posted: "2 days ago",
      urgent: true,
      rating: 4.8,
      description: "Seeking licensed electrician for 6-month commercial building project. Must have experience with industrial electrical systems.",
      requirements: ["Licensed Electrician", "5+ years experience", "Commercial experience", "Own tools"],
      badges: ["Urgent", "High Pay", "Long Term"]
    },
    {
      id: 2,
      title: "Residential Plumber",
      company: "HomeFlow Plumbing",
      location: "Bellevue, WA",
      type: "Contract",
      pay: "$40-50/hour",
      posted: "1 day ago",
      urgent: false,
      rating: 4.6,
      description: "Multiple residential plumbing jobs available. Flexible schedule and competitive pay.",
      requirements: ["Plumbing License", "3+ years experience", "Reliable transportation"],
      badges: ["Flexible", "Multiple Projects"]
    },
    {
      id: 3,
      title: "Framing Crew Leader",
      company: "Pacific Builders",
      location: "Tacoma, WA",
      type: "Full-time",
      pay: "$35-45/hour",
      posted: "3 days ago",
      urgent: false,
      rating: 4.9,
      description: "Lead a team of framers on residential construction projects. Leadership experience required.",
      requirements: ["10+ years framing", "Leadership experience", "Own truck", "Team management"],
      badges: ["Leadership", "Team Lead", "Residential"]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Latest Opportunities
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Featured{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
              Job Listings
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover high-quality construction jobs posted by verified contractors and agencies.
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {sampleJobs.map((job) => (
            <Card key={job.id} className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      {job.urgent && (
                        <Badge variant="destructive" className="text-xs">
                          Urgent
                        </Badge>
                      )}
                      <Badge variant="outline" className="text-xs">
                        {job.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                      {job.title}
                    </CardTitle>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Building className="h-4 w-4 mr-2" />
                    {job.company}
                    <div className="flex items-center ml-2">
                      <Star className="h-3 w-3 text-warning fill-current" />
                      <span className="ml-1 text-xs">{job.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <MapPin className="h-4 w-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-success text-sm font-semibold">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {job.pay}
                    </div>
                    <div className="flex items-center text-muted-foreground text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {job.posted}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {job.description}
                </p>

                {/* Requirements */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Requirements:</h4>
                  <div className="flex flex-wrap gap-1">
                    {job.requirements.slice(0, 3).map((req, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {req}
                      </Badge>
                    ))}
                    {job.requirements.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{job.requirements.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Job Badges */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {job.badges.map((badge, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {badge}
                    </Badge>
                  ))}
                </div>

                <Button className="w-full group-hover:bg-primary-hover transition-colors">
                  <Users className="h-4 w-4 mr-2" />
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Jobs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JobPreview;