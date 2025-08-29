import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
}

const LoadingSpinner = ({ size = 'md', className, text }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <div className={cn(
        "border-4 border-earth-green/20 border-t-earth-green rounded-full animate-spin",
        sizeClasses[size]
      )} />
      {text && (
        <p className="text-sm text-muted-foreground mt-2 animate-pulse-slow">
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;
