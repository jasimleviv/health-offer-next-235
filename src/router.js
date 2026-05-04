import AdminPage from "@/src/views/AdminPage";
import ArticlePage from "@/src/views/ArticlePage";
import CategoryPage from "@/src/views/CategoryPage";
import ComparisonPageTemplate from "@/src/views/ComparisonPageTemplate";
import HomePage from "@/src/views/HomePage";
import OffersHubPage from "@/src/views/OffersHubPage";
import ReviewPageTemplate from "@/src/views/ReviewPageTemplate";

export const routes = [
  { path: "/", element: HomePage },
  { path: "/category/:categorySlug", element: CategoryPage },
  { path: "/article/:slug", element: ArticlePage },
  { path: "/offers/:offerType", element: OffersHubPage },
  { path: "/review/:slug", element: ReviewPageTemplate },
  { path: "/compare/:categorySlug", element: ComparisonPageTemplate },
  { path: "/admin", element: AdminPage },
];

export default routes;
