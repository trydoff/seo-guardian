import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Share2, Twitter, Linkedin } from "lucide-react";
import { toast } from "sonner";

const ShareDialog = ({ url, score }) => {
  const shareText = `Check out this SEO analysis! Score: ${score}/100 for ${url}`;
  
  const handleShare = (platform) => {
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(window.location.href)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}&summary=${encodeURIComponent(shareText)}`
    };
    
    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    toast.success(`Shared on ${platform === 'twitter' ? 'X' : 'LinkedIn'}`);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Share2 className="h-4 w-4" />
          Share
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share Report</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <Button
            variant="outline"
            className="flex items-center gap-2 justify-start"
            onClick={() => handleShare('twitter')}
          >
            <Twitter className="h-5 w-5" />
            Share on X
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 justify-start"
            onClick={() => handleShare('linkedin')}
          >
            <Linkedin className="h-5 w-5" />
            Share on LinkedIn
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareDialog;