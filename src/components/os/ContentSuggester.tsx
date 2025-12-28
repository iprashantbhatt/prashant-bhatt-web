'use client';
import { useEffect, useState } from 'react';
import { suggestContent } from '@/ai/flows/personalized-content-suggestions';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Lightbulb, X } from 'lucide-react';

export default function ContentSuggester() {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const referrer = document.referrer;
    if (referrer && !referrer.includes(window.location.host)) {
      suggestContent({ referralLink: referrer })
        .then(result => {
          if (result.suggestions && result.suggestions.length > 0) {
            setSuggestions(result.suggestions);
            setIsVisible(true);
          }
        })
        .catch(console.error);
    }
  }, []);

  if (!isVisible || suggestions.length === 0) {
    return null;
  }

  return (
    <div className="absolute top-20 left-4 right-4 z-10">
      <Alert>
        <Lightbulb className="h-4 w-4" />
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-muted"
        >
          <X className="h-4 w-4" />
        </button>
        <AlertTitle>Personalized For You!</AlertTitle>
        <AlertDescription>
          <p>Based on how you got here, you might be interested in:</p>
          <ul className="list-disc pl-5 mt-2 text-sm">
            {suggestions.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
