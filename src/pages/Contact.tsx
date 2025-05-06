
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';
import { Loader2 } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Initialize EmailJS with your user ID (public key)
      emailjs.init("bHukafeo5Wf3ixH0M");
      
      // EmailJS service configuration
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        to_email: "meetranka1442003@gmail.com", // Keep this parameter if needed by your system
      };
      
      // Send the email using EmailJS with updated parameters
      const response = await emailjs.send(
        "service_bzeif7e",  // Your service ID
        "template_x0jfsff", // Your template ID
        templateParams
      );
      
      console.log("Email sent successfully:", response);
      
      toast({
        title: "Message Sent",
        description: "Thank you for your feedback! We'll get back to you soon.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-12">
      <Card className="bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-gray-800">Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mt-1"
                rows={4}
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-indigo-600 hover:bg-indigo-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
