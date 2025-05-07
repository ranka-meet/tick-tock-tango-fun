
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Youtube, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto py-12">
      <Card className="bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-gray-800">Connect With Me</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-center text-gray-600 mb-6">
            Follow me on social media to stay updated with my latest content and projects.
          </p>
          
          <div className="grid gap-4">
            {/* Instagram */}
            <a 
              href="https://www.instagram.com/meet__ranka" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-pink-400 hover:bg-pink-50 transition-all">
                <div className="rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-400 p-2 mr-4">
                  <Instagram className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 group-hover:text-pink-600">Instagram</h3>
                  <p className="text-sm text-gray-600">Follow me for behind-the-scenes content and updates</p>
                </div>
                <ExternalLink className="ml-auto h-4 w-4 text-gray-400 group-hover:text-pink-500" />
              </div>
            </a>
            
            {/* Twitter/X */}
            <a 
              href="https://x.com/RankaMeet20445" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-gray-800 hover:bg-gray-50 transition-all">
                <div className="rounded-full bg-black p-2 mr-4">
                  <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 group-hover:text-gray-900">X (Twitter)</h3>
                  <p className="text-sm text-gray-600">Follow for thoughts, announcements and interactions</p>
                </div>
                <ExternalLink className="ml-auto h-4 w-4 text-gray-400 group-hover:text-gray-800" />
              </div>
            </a>
            
            {/* YouTube */}
            <a 
              href="https://www.youtube.com/@meetranka" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-red-500 hover:bg-red-50 transition-all">
                <div className="rounded-full bg-red-600 p-2 mr-4">
                  <Youtube className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 group-hover:text-red-600">YouTube</h3>
                  <p className="text-sm text-gray-600">Subscribe for video content, tutorials and more</p>
                </div>
                <ExternalLink className="ml-auto h-4 w-4 text-gray-400 group-hover:text-red-500" />
              </div>
            </a>
          </div>
          
          <p className="text-center text-sm text-gray-500 pt-4">
            Feel free to reach out on any of these platforms!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
