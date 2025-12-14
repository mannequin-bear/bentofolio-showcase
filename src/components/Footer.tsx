import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
          © {currentYear} Portfolio. Built with
          <Heart size={14} className="text-primary fill-primary" />
          and lots of coffee.
        </p>
      </div>
    </footer>
  );
}
