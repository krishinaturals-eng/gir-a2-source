import { useEffect, useState } from 'react';
import { removeBackground, loadImageFromUrl } from '@/utils/backgroundRemoval';

interface LogoProcessorProps {
  originalSrc: string;
  alt: string;
  className?: string;
  onProcessed?: (processedUrl: string) => void;
}

const LogoProcessor = ({ originalSrc, alt, className, onProcessed }: LogoProcessorProps) => {
  const [processedSrc, setProcessedSrc] = useState<string>(originalSrc);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const processLogo = async () => {
      try {
        setIsProcessing(true);
        
        // Load the original image
        const img = await loadImageFromUrl(originalSrc);
        
        // Remove background
        const processedBlob = await removeBackground(img);
        
        // Create URL for the processed image
        const processedUrl = URL.createObjectURL(processedBlob);
        setProcessedSrc(processedUrl);
        
        if (onProcessed) {
          onProcessed(processedUrl);
        }
      } catch (error) {
        console.error('Failed to process logo:', error);
        // Keep original image on error
        setProcessedSrc(originalSrc);
      } finally {
        setIsProcessing(false);
      }
    };

    processLogo();
  }, [originalSrc, onProcessed]);

  return (
    <div className="relative">
      <img 
        src={processedSrc} 
        alt={alt} 
        className={className}
        style={{ opacity: isProcessing ? 0.7 : 1 }}
      />
      {isProcessing && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default LogoProcessor;
