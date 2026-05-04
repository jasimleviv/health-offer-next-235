import ImagePlaceholder from "./ImagePlaceholder";

export default function ArticleGrid({ articles }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <a
          key={article.id}
          className="group rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
          href={`/article/${article.slug}`}
        >
          <ImagePlaceholder label={article.category.replaceAll("-", " ")} height={170} />
          <div className="mt-4 flex items-center gap-2 text-xs font-black uppercase tracking-wide text-emerald-600">
            {article.trending && <span className="rounded-full bg-rose-100 px-2 py-1 text-rose-700">Trending</span>}
            <span>{article.offerType.replaceAll("-", " ")}</span>
          </div>
          <h3 className="mt-2 text-lg font-black leading-6 group-hover:text-emerald-700 dark:group-hover:text-emerald-300">{article.title}</h3>
          <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{article.description}</p>
          <div className="mt-4 flex items-center justify-between text-sm font-bold">
            <span>Rating {article.rating}</span>
            <span className="text-emerald-600">{article.popularityScore}% popular</span>
          </div>
        </a>
      ))}
    </div>
  );
}

