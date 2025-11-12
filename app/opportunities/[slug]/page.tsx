import { getOpportunityBySlug, getAllOpportunities } from "@/sanity";
import { OpportunityDetailsWrapper } from "@/components/opportunities/OpportunityDetailsWrapper";
import { notFound } from "next/navigation";

interface OpportunityDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function OpportunityDetailPage({ params }: OpportunityDetailPageProps) {
  const { slug } = await params;
  const opportunity = await getOpportunityBySlug(slug);

  if (!opportunity) {
    notFound();
  }

  const allOpportunities = await getAllOpportunities();
  const otherOpportunities = allOpportunities.filter((o) => o._id !== opportunity._id).slice(0, 3);

  return <OpportunityDetailsWrapper opportunity={opportunity} otherOpportunities={otherOpportunities} />;
}

export async function generateStaticParams() {
  const opportunities = await getAllOpportunities();
  return opportunities.map((opp) => ({
    slug: opp.slug.current,
  }));
}

export const revalidate = 60;
