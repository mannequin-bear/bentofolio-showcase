import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";

interface Article {
  title: string;
  date: string;
  excerpt: string;
  link: string;
}

interface ArticlesSectionProps {
  articles: Article[];
}

export function ArticlesSection({ articles }: ArticlesSectionProps) {
  return (
    <section id="blog" className="py-20 px-4 md:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Latest Posts
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {articles.map((article, index) => (
            <motion.a
              key={article.title}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bento-card group flex flex-col"
            >
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                <Calendar size={14} />
                <span>{article.date}</span>
              </div>

              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors flex items-start gap-2">
                {article.title}
                <ArrowUpRight
                  size={18}
                  className="flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </h3>

              <p className="text-muted-foreground text-sm line-clamp-2">
                {article.excerpt}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
