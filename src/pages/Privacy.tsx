
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <Card className="bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-gray-800">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-indigo">
          <p className="text-gray-600 leading-relaxed">
            At our Tic Tac Toe game, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services. By using our Tic Tac Toe game, you agree to the collection and use of information in accordance with this policy.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Information Collection</h3>
          <p className="text-gray-600 leading-relaxed">
            We want to be clear about our data collection practices: we don't collect any personal information from our users. You can play our game completely anonymously without providing any personal details.
          </p>
          <p className="text-gray-600 leading-relaxed mt-3">
            However, we do use the following types of data:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>
              <strong>Cookies:</strong> We use minimal cookies that are essential for the game to function properly. These cookies do not track you or store any personal information.
            </li>
            <li>
              <strong>Analytics:</strong> We use anonymous analytics to understand how users interact with our site. This information helps us improve the user experience but cannot be traced back to individual users.
            </li>
            <li>
              <strong>Local Storage:</strong> We may store game preferences and settings locally on your device to improve your gaming experience. This data never leaves your device.
            </li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">How We Use Information</h3>
          <p className="text-gray-600 leading-relaxed">
            The anonymous information we collect is used solely for:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Improving our game functionality and user experience</li>
            <li>Analyzing overall usage patterns</li>
            <li>Maintaining and optimizing website performance</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Third-Party Services</h3>
          <p className="text-gray-600 leading-relaxed">
            Our website is advertisement-supported, but we ensure that any third-party advertisements comply with privacy regulations. These third parties may use cookies and similar technologies to deliver relevant ads. They operate independently of our site, and we recommend reviewing their privacy policies.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Data Security</h3>
          <p className="text-gray-600 leading-relaxed">
            We prioritize the security of our website and implement reasonable measures to protect against unauthorized access, alteration, disclosure, or destruction of information. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Children's Privacy</h3>
          <p className="text-gray-600 leading-relaxed">
            Our game is designed for users of all ages. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe we may have collected information about a child, please contact us.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Changes to This Privacy Policy</h3>
          <p className="text-gray-600 leading-relaxed">
            We may update our Privacy Policy from time to time. Any changes will be posted on this page, and the modified date will be updated below. We encourage users to check this page periodically for changes.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Contact Us</h3>
          <p className="text-gray-600 leading-relaxed">
            If you have any questions or concerns about our privacy practices, please don't hesitate to contact us through our <a href="/contact" className="text-indigo-600 hover:text-indigo-800 font-medium">Contact page</a>.
          </p>
          
          <p className="text-gray-500 text-sm mt-8">Last Updated: May 8, 2025</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Privacy;
