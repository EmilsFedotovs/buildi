import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, HardHat, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PostJob = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    jobType: "",
    salary: "",
    description: "",
    requirements: "",
    benefits: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle job posting submission
    console.log("Job posted:", formData);
    // For now, just show a success message and redirect
    alert("Job posted successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Button 
              variant="ghost" 
              className="mb-4" 
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            <h1 className="text-3xl font-bold text-foreground mb-2">Post a Job</h1>
            <p className="text-muted-foreground">
              Find the perfect construction worker for your project
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HardHat className="h-5 w-5 text-primary" />
                    Job Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Basic Info */}
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="title">Job Title *</Label>
                        <Input
                          id="title"
                          placeholder="e.g. Experienced Carpenter"
                          value={formData.title}
                          onChange={(e) => handleInputChange("title", e.target.value)}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="company">Company Name *</Label>
                        <Input
                          id="company"
                          placeholder="Your company name"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="location">Location *</Label>
                          <Input
                            id="location"
                            placeholder="e.g. London, UK"
                            value={formData.location}
                            onChange={(e) => handleInputChange("location", e.target.value)}
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="jobType">Job Type *</Label>
                          <Select onValueChange={(value) => handleInputChange("jobType", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select job type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="full-time">Full Time</SelectItem>
                              <SelectItem value="part-time">Part Time</SelectItem>
                              <SelectItem value="contract">Contract</SelectItem>
                              <SelectItem value="temporary">Temporary</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="salary">Salary Range</Label>
                        <Input
                          id="salary"
                          placeholder="e.g. £25,000 - £35,000 per year"
                          value={formData.salary}
                          onChange={(e) => handleInputChange("salary", e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <Label htmlFor="description">Job Description *</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe the role, responsibilities, and what you're looking for..."
                        className="min-h-32"
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        required
                      />
                    </div>

                    {/* Requirements */}
                    <div>
                      <Label htmlFor="requirements">Requirements</Label>
                      <Textarea
                        id="requirements"
                        placeholder="List the required skills, qualifications, and experience..."
                        className="min-h-24"
                        value={formData.requirements}
                        onChange={(e) => handleInputChange("requirements", e.target.value)}
                      />
                    </div>

                    {/* Benefits */}
                    <div>
                      <Label htmlFor="benefits">Benefits</Label>
                      <Textarea
                        id="benefits"
                        placeholder="List the benefits, perks, and what makes this opportunity great..."
                        className="min-h-24"
                        value={formData.benefits}
                        onChange={(e) => handleInputChange("benefits", e.target.value)}
                      />
                    </div>

                    <Button type="submit" className="w-full" variant="construction" size="lg">
                      Post Job
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Preview */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-lg">Preview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {formData.title ? (
                    <div>
                      <h3 className="font-semibold text-lg">{formData.title}</h3>
                      {formData.company && (
                        <p className="text-muted-foreground">{formData.company}</p>
                      )}
                    </div>
                  ) : (
                    <div className="text-muted-foreground text-sm">
                      Fill in the form to see a preview of your job posting
                    </div>
                  )}

                  {formData.location && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {formData.location}
                    </div>
                  )}

                  {formData.jobType && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <Badge variant="secondary">{formData.jobType}</Badge>
                    </div>
                  )}

                  {formData.salary && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <DollarSign className="h-4 w-4" />
                      {formData.salary}
                    </div>
                  )}

                  {formData.description && (
                    <div>
                      <h4 className="font-medium mb-2">Description</h4>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {formData.description}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PostJob;