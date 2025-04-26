
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="max-w-2xl mx-auto py-12">
      <Card className="bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-gray-800">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-indigo">
          <p className="text-gray-600 leading-relaxed">
            At our Tic Tac Toe game, we take your privacy seriously. We want to be clear about our data collection practices: we don't collect any personal information from our users. You can play our game completely anonymously.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We use minimal cookies that are essential for the game to function properly. These cookies do not track you or store any personal information. Our website is advertisement-supported, but we ensure that any third-party advertisements comply with privacy regulations.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If you have any questions or concerns about our privacy practices, please don't hesitate to contact us through our contact page.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Privacy;
